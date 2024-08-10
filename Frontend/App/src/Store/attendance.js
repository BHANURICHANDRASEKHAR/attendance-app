import { createSlice } from "@reduxjs/toolkit";
const Attendanceslice=createSlice({
    name:'Attendance',
    initialState:{absentList:[]},
    reducers:{
        setAbsent(state,actions)
        {
            
         const list=actions.payload.map((value)=>value.slice(8,10))
         state.absentList=list.sort((a, b) => {
            
            const isANumeric = !isNaN(Number(a));
            const isBNumeric = !isNaN(Number(b));
        
            if (isANumeric && !isBNumeric) {
                return 1; 
            }
            if (!isANumeric && isBNumeric) {
                return -1; 
            }
            return a.localeCompare(b);
        });
        
        }
    }
})
    export const  AttendanceActions=Attendanceslice.actions

export default Attendanceslice.reducer;