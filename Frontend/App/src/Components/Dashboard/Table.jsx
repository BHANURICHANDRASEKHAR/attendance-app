import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import * as XLSX from 'xlsx';

function StripedRowExample({ userdata }) {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return userdata;

    let sortableData = [...userdata];
    sortableData.sort((a, b) => {
      if (a.totalAttendance < b.totalAttendance) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a.totalAttendance > b.totalAttendance) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortableData;
  }, [userdata, sortConfig]);

  const handleSort = () => {
    setSortConfig((prevConfig) => {
      if (!prevConfig) {
        return { direction: 'asc' };
      }
      return {
        direction: prevConfig.direction === 'asc' ? 'desc' : 'asc',
      };
    });
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(sortedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

    // Set the column widths
    const colWidths = [{ wch: 5 }, { wch: 20 }, { wch: 30 }, { wch: 15 }];
    worksheet['!cols'] = colWidths;

    XLSX.writeFile(workbook, "StudentsData.xlsx");
  };

  return (
    <div>
      
      <Table striped='columns' className='m-1 text-lg-center overflow-scroll'>
        <thead>
          <tr>
            <th>#</th>
            <th>Pin Number</th>
            <th>Student Name</th>
            <th style={{ cursor: 'pointer' }}>
              Presentess Count{' '}
              {sortConfig && sortConfig.direction === 'asc' ? (
                <FaSortAlphaUpAlt className='float-end m-2' onClick={handleSort}/>
              ) : (
                <FaSortAlphaDown className='float-end m-2' onClick={handleSort}/>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.totalAttendance}</td>
            </tr>
          ))}
        </tbody>
      </Table>
     <div className='d-flex justify-content-center'> <Button variant="success"  onClick={downloadExcel} className="mb-3 mt-4 ">
     Download Excel
   </Button></div>
    </div>
  );
}

export default React.memo(StripedRowExample);
