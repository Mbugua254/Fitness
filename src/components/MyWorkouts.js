import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyWorkouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/my-workouts', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => setWorkouts(res.data))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>My Workouts</h1>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>
            {workout.exercise} - {workout.duration} minutes on {workout.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyWorkouts;
