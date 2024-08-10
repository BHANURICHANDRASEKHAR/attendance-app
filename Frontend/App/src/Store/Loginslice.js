import { createSlice } from "@reduxjs/toolkit";
const Loginslice=createSlice({
    name:'Login',
    initialState:{loginstatus:false},
    reducers:{
        setlogin(state,payload)
        {
            
            state.loginstatus=true
           
        },
        setlogout(state,payload)
        {
            state.loginstatus=false
        }
    }
})
export const  LoginActions=Loginslice.actions

export default Loginslice.reducer;