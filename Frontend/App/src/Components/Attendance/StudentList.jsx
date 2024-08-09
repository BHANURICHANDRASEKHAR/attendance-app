import React, { useState } from 'react';
import data from './studentdata';
import { Button } from 'antd';
import {toastfunction,toastfail} from './send'

import './att.css'
import { useDispatch } from 'react-redux';
 function StudentList({ setData,data1 }) {
    const [selectedIds, setSelectedIds] = useState(new Set());
 const dispatch=useDispatch()
    const handleButtonClick = (id) => {
        setSelectedIds(prev => {
            const newSelectedIds = new Set(prev);
            if (newSelectedIds.has(id)) {
                newSelectedIds.delete(id);
            } else {
                newSelectedIds.add(id);
            }
            return newSelectedIds;
        });
    };
    const style = {
        background: '#FF574A',
        color: '#fff', 
    };
    const handleSubmit = () => {
        
        if(data1.sheet.length > 0) {
            setData(prevData => ({
                ...prevData,
                absentList: Array.from(selectedIds)
            }));
            console.log(data1)
            toastfunction()
        }
       else{
    toastfail('Please select a sheet')
       }
      
    };  
   
    return (
      <React.Fragment>
      <div className='att-parent'> 
      {
          data.map((value) => {
              const { id } = value;
              const isSelected = selectedIds.has(id);
              return (
                  <Button
                      className='att-child'
                      key={id}
                      onClick={() => handleButtonClick(id)}
                      style={isSelected ? style : {}}
                  >
                      {id}
                  </Button>
              );
          })
      }
  </div>
  <SubmitButton handler={handleSubmit} />
      </React.Fragment>
    );
}
export default React.memo(StudentList)
const SubmitButton = React.memo(({ handler }) => {
    return <div className='submitdiv'><Button className='submit' onClick={handler}>Submit</Button></div>
})