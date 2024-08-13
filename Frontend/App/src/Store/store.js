import { configureStore } from "@reduxjs/toolkit";
import Loginslice from "./Loginslice";
import Attendance from "./attendance";
import userDetails from "./userDetails";
import WhatAppSlice from "./ShareWhatapp";
import StudentSlice from "./StudentsData";
import TimeTableSlice from './timtable';
import LeaderBoard from "./LeaderBoard";
import BarGarph from "./bargraph";
import StudentData from "./StudentData";
const store=configureStore({
    reducer: {
        Loginslice:Loginslice,
        WhatappSlice:WhatAppSlice,
        AttendanceSlice:Attendance,
        StudentSlice:StudentSlice,
        user:userDetails,
        timetable:TimeTableSlice,
        bargraph:BarGarph,
        leaderboard:LeaderBoard,
        studentdata:StudentData,
      
    }
})

export default store;