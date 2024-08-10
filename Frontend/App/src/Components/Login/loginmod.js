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
            const response = await axios.get('http://localhost:5000/login', {
               params:{
                email: data.email,
                password: data.password
               }
            });

            if (response.data.status) {
                Cookie.set('x-token', response.data.token, { secure: true, sameSite: 'strict' }); 
               
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
