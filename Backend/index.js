import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import MongooDB from "./Database/database.js";
//signup router import
import sign_up_router from './Components/Signup.js'
//login in router import
import login_router from './Components/login.js'
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(
    {
        origin:"*",
    }
));
//db connection
MongooDB();

app.use('/signup', sign_up_router);
app.use('/login', login_router);
app.listen(5000,()=>{console.log(`listening on port::${5000}`)});