import React from "react";
import "./signUp.css"

function Login() {
    return (
        <div className="form-container">
            <p className="title">Log In</p>
            <form className="form">
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
                    placeholder="Enter your password" />
                    <div className="forgot">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="sign">Log In</button>
            </form>
            <p className="signup">Don't have an account?
                <a rel="noopener noreferrer" href="#" className=""> Sign Up</a>
            </p>
        </div>
    );
    }

    export default Login;
