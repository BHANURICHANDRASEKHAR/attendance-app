import { createSlice } from "@reduxjs/toolkit";


const TimeTableSlice = createSlice({
    name: 'TimeTableSlice', 
    initialState: { timetable: [] },
    reducers: {
        setTimetable(state, action) {
            state.timetable[0] = action.payload;
        },
    }
});

// Export actions
export const TimeTableSliceActions =TimeTableSlice.actions;

// Export the reducer
export default TimeTableSlice.reducer;
