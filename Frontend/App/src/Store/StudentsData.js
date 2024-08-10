import { createSlice } from "@reduxjs/toolkit";


const StudentSlice = createSlice({
    name: 'StudentSlice', 
    initialState: { students: [] },
    reducers: {
        setStudents(state, action) {
            state.students = action.payload;
        },
    }
});

// Export actions
export const StudentSliceActions = StudentSlice.actions;

// Export the reducer
export default StudentSlice.reducer;
