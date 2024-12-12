// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/MoodTracker';
import MoodHistory from './components/MoodHistory'; 
import ProtectedRoute from './components/Protected';  

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Home />} />  
                    <Route path="/history" element={<MoodHistory />} /> 
                </Route>
            </Routes>
        </>
    );
}

export default App;
