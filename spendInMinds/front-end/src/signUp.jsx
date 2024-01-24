import { useState } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className="form-container">
            <p className="title">Sign Up</p>
            <form className="form">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    name="name" id="name" 
                    placeholder="Enter your name" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name="email" id="email" 
                    placeholder="Enter your email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    name="password" id="password" 
                    placeholder="Choose a password" />
                    <div className="forgot">
                    </div>
                </div>
                <button className="sign">Register</button>
            </form>
            <p className="signup">Already have an account?
                <a rel="noopener noreferrer" href="#" className="">
                    <Link to="/login">Log In</Link>
                </a>
            </p>
        </div>
    );
}

export default SignUp;
