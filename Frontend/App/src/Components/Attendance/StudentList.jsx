import React, { useState } from 'react';
import { Button } from 'antd';
import storedatabase, { toastfail } from './send';
import './att.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { WhatappSliceActions } from '../../Store/ShareWhatapp';
function StudentList({ setData, data1, students }) {
    const [selectedIds, setSelectedIds] = useState(new Set());
    const userdata = useSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const handleButtonClick = (id) => {
        setSelectedIds((prev) => {
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
        if (isShiftSelected()) {
            storedatabase(data1,userdata,setLoading,Array.from(selectedIds),dispatch)
            dispatch(WhatappSliceActions.setFlagTrue());
        } else {
            toastfail('Please select a shift');
        }
    };

    const isShiftSelected = () => {
        if (data1.shift.length > 0) {
            setData((prevData) => ({
                ...prevData,
                absentList: Array.from(selectedIds),
            }));
            return true;
        }
        return false;
    };

    return (
        <React.Fragment>
            <div className='att-parent'>
                {students.map((student) => {
                    const { id } = student;
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
                })}
            </div>
            <SubmitButton handler={handleSubmit} loading={loading} />
        </React.Fragment>
    );
}

const SubmitButton = React.memo(({ handler, loading }) => {
    return (
        <div className='submitdiv'>
            <Button className='submit' disabled={loading} onClick={handler}>
                {loading ? '....Loading' : 'Submit'}
            </Button>
        </div>
    );
});

export default React.memo(StudentList);
