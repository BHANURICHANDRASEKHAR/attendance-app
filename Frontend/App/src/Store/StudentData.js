import { createSlice } from "@reduxjs/toolkit";
const StudentListSlice = createSlice({
    name: 'StudentListSlice', 
    initialState: { StudentList: [] },
    reducers: {
        setStudentList(state, action) {
            state.StudentList = action.payload;
        },
    }
});

// Export actions
export const StudentListSliceActions =StudentListSlice.actions;

// Export the reducer
export default StudentListSlice.reducer;
