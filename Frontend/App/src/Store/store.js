import { configureStore } from "@reduxjs/toolkit";
import Loginslice from "./Loginslice";
import Attendance from "./attendance";
const store=configureStore({
    reducer: {
        Loginslice:Loginslice,
        AttendanceSlice:Attendance
    }
})

export default store;