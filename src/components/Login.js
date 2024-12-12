// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Import the CSS file

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);  // Loading state
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username || !password) {
            setError('Username and Password are required');
            return;
        }

        setLoading(true);
        setError(''); // Clear previous error if any

        try {
            const response = await axios.post('http://localhost:8000/api/login/', { username, password });
            localStorage.setItem('token', response.data.access_token);  // Store token in localStorage
            setLoading(false);
            
            // Ensure that the user is redirected only if logged in successfully
            navigate('/', { replace: true });  // Redirect to home with replace option to prevent going back
        } catch (error) {
            setLoading(false);
            setError('Invalid credentials');  // Set error message if login fails
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>

                {error && <p className="error-message">{error}</p>}  {/* Display error message */}

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin} disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}  {/* Show loading text */}
                </button>
            </div>
        </div>
    );
};

export default Login;
