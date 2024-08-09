import { createSlice } from "@reduxjs/toolkit";
const Attendanceslice=createSlice({
    name:'Attendance',
    initialState:{absentList:[]},
    reducers:{
        setAbsent(state,actions)
        {
        state.absentList=actions.payload;
        }
    }
})
    export const  AttendanceActions=Attendanceslice.actions

export default Attendanceslice.reducer;