import { useState } from 'react';
import './signUp.css';

function SignUp() {

    return (
        <div className="form-container">
            <p className="title">Sign In</p>
            <form className="form">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="" />
                    <div className="forgot">
                        <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                    </div>
                </div>
                <button className="sign">Sign in</button>
            </form>
            <div className="social-message">
                <div className="line"></div>
                <p className="message">Login with social accounts</p>
                <div className="line"></div>
            </div>
            <div className="social-icons">
                <button aria-label="Log in with Google" className="icon">                </button>
                <button aria-label="Log in with Twitter" className="icon">                </button>
                <button aria-label="Log in with GitHub" className="icon">
                </button>
            </div>
            <p className="signup">You already have an account?
                <a rel="noopener noreferrer" href="#" className="">Log In </a>
            </p>
        </div>
    );
}

export default SignUp;
