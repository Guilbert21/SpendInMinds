import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';  // Make sure to import axios

import "./signUp.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Sucess"){
                navigate('/home');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="form-container">
            <p className="title">Log In</p>
            <form onSubmit={handleSubmit} className="form">
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="forgot">
                        <a rel="noopener noreferrer" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <button className="sign" type="submit">
                    Log In
                </button>
            </form>
            <p className="signup">
                Don't have an account?
                <a rel="noopener noreferrer" href="#" className="">
                    <Link to="/register">Sign Up</Link>
                </a>
            </p>
        </div>
    );
}

export default Login;
