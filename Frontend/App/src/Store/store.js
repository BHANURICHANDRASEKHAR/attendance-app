import { configureStore } from "@reduxjs/toolkit";
import Loginslice from "./Loginslice";
const store=configureStore({
    reducer: {
        Loginslice:Loginslice
    }
})

export default store;