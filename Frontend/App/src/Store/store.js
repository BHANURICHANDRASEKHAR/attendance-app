import { configureStore } from "@reduxjs/toolkit";
import Loginslice from "./Loginslice";
import Attendance from "./attendance";
import userDetails from "./userDetails";
const store=configureStore({
    reducer: {
        Loginslice:Loginslice,
        AttendanceSlice:Attendance,
        user:userDetails
    }
})

export default store;