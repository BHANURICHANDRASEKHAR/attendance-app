import { createSlice } from "@reduxjs/toolkit";


const LeaderBoardSlice = createSlice({
    name: 'LeaderBoardSlice', 
    initialState: { LeaderBoard: [] },
    reducers: {
        setLeaderBoard(state, action) {
            state.LeaderBoard = action.payload;
        },
    }
});

// Export actions
export const LeaderBoardSliceActions =LeaderBoardSlice.actions;

// Export the reducer
export default LeaderBoardSlice.reducer;
