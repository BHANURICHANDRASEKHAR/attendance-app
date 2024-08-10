import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import MongooDB from "./Database/database.js";
import sign_up_router from './Components/Signup.js';
import login_router from './Components/login.js';

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

app.listen(5000, () => {
    console.log(`Listening on port 5000`);
});
