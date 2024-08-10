import React, { useState } from 'react';
import Input from './Input';
import login from './loginmod.js';
import {useDispatch} from 'react-redux'
export default function Login({ authMode, changeAuthMode }) {
    const initialState = {
        email: '',
        password: ''
    };
    const dispatch = useDispatch()
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    // Handle form input changes
    function onHandler(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }

   
    async function handleSubmit(e) {
        e.preventDefault(); 
        await login(data, setLoading);
    }

    return (
        <div className="Auth-form-container">
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">
                    {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
                </h3>
                <div className="text-center">
                    Not registered yet?{" "}
                    <span className="link-primary" onClick={changeAuthMode}>
                        Sign Up
                    </span>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input
                        label='Email Address'
                        placeholder='e.g Abc.com'
                        name='email'
                        type='email'
                        handler={onHandler}
                        value={data.email}
                    />
                    <Input
                        label='Password'
                        placeholder='Enter Password'
                        name='password'
                        type='password'
                        handler={onHandler}
                        value={data.password}
                    />
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                            onClick={()=>login(data,setLoading,dispatch)}
                        >
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
