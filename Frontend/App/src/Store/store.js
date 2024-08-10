import { configureStore } from "@reduxjs/toolkit";
import Loginslice from "./Loginslice";
import Attendance from "./attendance";
import userDetails from "./userDetails";
import WhatAppSlice from "./ShareWhatapp";
import StudentSlice from "./StudentsData";
const store=configureStore({
    reducer: {
        Loginslice:Loginslice,
        WhatappSlice:WhatAppSlice,
        AttendanceSlice:Attendance,
        StudentSlice:StudentSlice,
        user:userDetails,
       
    }
})

export default store;