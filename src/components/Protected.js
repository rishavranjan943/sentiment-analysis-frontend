// components/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');  // Check if token exists in localStorage

    if (!token) {
        // If no token is found, redirect to the login page
        return <Navigate to="/login" />;
    }

    // If the token exists, render the child routes (protected content)
    return <Outlet />;
};

export default ProtectedRoute;
