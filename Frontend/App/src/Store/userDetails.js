import { createSlice } from "@reduxjs/toolkit";
const Userdetails=createSlice({
    name:'User',
    initialState:[],
    reducers:{
        setDetails(state,actions)
        {
            state.push(actions.payload);
        }
    }
})
export const UserdetailsActions=Userdetails.actions;
export default Userdetails.reducer;