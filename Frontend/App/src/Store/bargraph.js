import { createSlice } from "@reduxjs/toolkit";


const BarGarphSlice = createSlice({
    name: 'BarGarphSlice', 
    initialState: { BarGarph: [] },
    reducers: {
        setBarGraph(state, action) {
            
            state.BarGarph = action.payload;
        },
    }
});

// Export actions
export const BarGarphSliceActions =BarGarphSlice.actions;

// Export the reducer
export default BarGarphSlice.reducer;
