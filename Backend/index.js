import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import MongooDB from "./Database/database.js";
import sign_up_router from './Components/Signup.js';
import login_router from './Components/login.js';
//this is only for admin
import AdminRoute from './Components/AddStudents_to_Database/addStudents.js'
//get students Deatils
import GetStudents_Route from './Components/GetStudents.js';
//Post AbsenceList
import AbsenceList_Route from './Components/PutAbsentees.js'
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
//get Students for taking attendance
app.use('/getstudents', GetStudents_Route);
//post absence list
app.use('/post-absecentList',AbsenceList_Route)
app.listen(5000, () => {
    console.log(`Listening on port 5000`);
});
