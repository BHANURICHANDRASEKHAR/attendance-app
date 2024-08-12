import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import MongooDB from "./Database/database.js";
import sign_up_router from './Components/Signup.js';
import login_router from './Components/login.js';
//this is only for admin
import AdminRoute from './Components/AddStudents_to_Database/addStudents.js'
//this is only for admin
import addTimeTable from "./Components/AddStudents_to_Database/addTimeTable.js";
//get students Deatils
import GetStudents_Route from './Components/GetStudents.js';
//Post AbsenceList
import AbsenceList_Route from './Components/PutAbsentees.js'
//Mail testing Route
import MailTesting_Route from './Components/Mail/SendMail.js';
//Update PassWord
import UpdatePassWord_Route from './Components/UpdatePassword.js'
//get top 5 Strudents Names
import getTop5MostPresentStudents from './Components/GetTopStudents.js';
//get 1 week absentees 
import get1WeekPresentees from './Components/get7daysCount.js';
//timeTable Rouet
import getTable_Route from './Components/getTimetabledata.js'
import env from 'dotenv';
env.config();  //configure environment
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true,
    optionsSuccessStatus: 200, 
}));

// Database connection
MongooDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Routing
app.use('/signup', sign_up_router);
app.use('/login', login_router);
//admin Route
app.use(AdminRoute);
//admin route for Time table
app.use('/admin/timetable',addTimeTable)
//get Students for taking attendance
app.use('/getstudents', GetStudents_Route);
//post absence list
app.use('/post-absecentList',AbsenceList_Route)
app.use('/sendmail',MailTesting_Route)
//Update Password
app.use('/updatePassword', UpdatePassWord_Route);
app.get('/top5Students',getTop5MostPresentStudents);
//bottom 7
    app.get('/1weekabsentees',get1WeekPresentees);
//get student time table
app.use('/getStudentTimeTable',getTable_Route);
var port=process.env.port || 5000
app.listen(port, () => {
    console.log(`Listening on port 5000`);
});
