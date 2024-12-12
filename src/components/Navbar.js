import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));  // Use state to track the token
    const navigate = useNavigate();

    
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, [localStorage.getItem('token')])
    
    const handleLogout = (e) => {
        localStorage.removeItem('token');  // Remove token from localStorage
        setToken(null);  // Update the state to trigger a re-render
        navigate('/login');  // Redirect to login
    };

    return (
        <nav className="navbar">
            <div className="links">
                {token && <Link to="/" className="link">Mood Tracker</Link>}
                {token && <Link to="/history" className="link">Mood History</Link>}
            </div>
            <div className="buttons">
                {token ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login" className="link">Login</Link>
                        <Link to="/register" className="link">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
