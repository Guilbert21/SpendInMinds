import { useState } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="form-container">
            <p className="title">Sign Up</p>
            <form onSubmit={handleSubmit} className="form">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                        placeholder="Choose a password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="forgot">
                    </div>
                </div>
                <button className="sign">Register</button>
            </form>
            <p className="signup">
                Already have an account?
                <a rel="noopener noreferrer" href="#" className="">
                    <Link to="/login">Log In</Link>
                </a>
            </p>
        </div>
    );
}

export default SignUp;
