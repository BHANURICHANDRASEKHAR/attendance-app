import { createSlice } from "@reduxjs/toolkit";


const WhatsAppSlice = createSlice({
    name: 'WhatsAppSlice',
    initialState: { flag: false },
    reducers: {
        setFlagTrue(state) {
            state.flag = true;
        },
        setFlagFalse(state) {
            state.flag = false;
        }
    }
});


export const WhatappSliceActions = WhatsAppSlice.actions;


export default WhatsAppSlice.reducer;
