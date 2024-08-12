import axios from "axios";
import { toastfail, toastfunction } from "../Attendance/send.js";
import { mailtest } from './Submit.js';
import Cookie from 'js-cookie';
import {LoginActions} from '../../Store/Loginslice.js'

export default async function login(data, setloading,dispatch) {
    const flag = check(data);
    if (flag) {
        setloading(true);
        try {
            const response = await axios.get('https://attendance-app-0kvp.onrender.com/login', {
               params:{
                email: data.email,
                password: data.password
               }
            });

            if (response.data.status) {
                const date = new Date();
                date.setDate(date.getDate() + 365); 
                Cookie.set('x-token', response.data.token, { 
                    secure: true, 
                    sameSite: 'strict', 
                    expires: date 
                });
                                toastfunction(`Loggin Successfully `);
                dispatch(LoginActions.setlogout());
            } else {
                toastfail('Invalid Credentials');
            }
        } catch (error) {
            toastfail('Login failed. Please try again.');
            console.error('Error during login:', error);
        } finally {
            setloading(false);
        }
    }
}

function check(data) {
    if (data.password.length === 0 || data.email.length === 0) {
        toastfail("Please enter valid details");
        return false;
    } else if (!mailtest(data.email)) {
        return false;
    }
    return true;
}
