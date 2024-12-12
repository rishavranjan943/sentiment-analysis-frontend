import React, { useState } from 'react';
import axios from 'axios';
import './MoodTracker.css';  // Importing CSS file

const MoodTracker = () => {
    const [mood, setMood] = useState('');
    const [savedMood, setSavedMood] = useState('');  // To store the saved mood
    const [sentiment, setSentiment] = useState('');


    const handleMoodSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'http://localhost:8000/api/mood/', 
                { mood },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(response);
            setSavedMood(mood);  // Set the saved mood
            setSentiment(response.data.sentiment);
            setMood('');  // Clear the input field
            alert('Mood Saved');
        } catch (error) {
            alert('Error saving mood');
        }
    };

    return (
        <div className="mood-tracker-container">
            <h2>Track Mood</h2>
            <input
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="How are you feeling?"
                className="mood-input"
            />
            <button onClick={handleMoodSubmit} className="mood-submit-btn">
                Save Mood
            </button>

            {savedMood && (
                <div className="saved-mood">
                    <h3>Current Mood: {savedMood}</h3>
                    <h4>Sentiment {sentiment}</h4>
                </div>
            )}
        </div>
    );
};

export default MoodTracker;
