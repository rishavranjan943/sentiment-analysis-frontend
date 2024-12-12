// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';  // Import the CSS file

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:8000/api/register/', { username, email, password });
            navigate('/login');  // Redirect to login after successful registration
        } catch (error) {
            alert('Registration failed');  // Show an alert if registration fails
        }
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default Register;
