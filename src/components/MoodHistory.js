// History.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './History.css';  // Import the CSS file

const History = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch mood history when the component mounts
        const fetchHistory = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get('http://localhost:8000/api/moods/history/', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setHistory(response.data);
                } else {
                    alert('User not logged in');
                }
            } catch (error) {
                alert('Error fetching mood history');
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []); // Runs once when component mounts

    return (
        <div className="history-container">
            <h2>Mood History</h2>
            {loading ? (
                <p className="loading-message">Loading...</p>
            ) : history.length === 0 ? (
                <p className="no-data-message">No mood history available.</p>
            ) : (
                <div className="history-list">
                    {history.map((entry) => (
                        <div key={entry.timestamp} className="history-item">
                            <p><strong>Mood:</strong> {entry.mood}</p>
                            <p><strong>Sentiment:</strong> {entry.sentiment}</p>
                            <p><strong>Timestamp:</strong> {entry.timestamp}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default History;
