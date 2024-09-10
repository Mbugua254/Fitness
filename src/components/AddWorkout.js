import React, { useState } from 'react';
import axios from 'axios';

function AddWorkout() {
  const [workout, setWorkout] = useState({ exercise: '', duration: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://api.example.com/my-workouts', workout, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      console.log('Workout added:', res.data);
      // Redirect to MyWorkouts after submission
    })
    .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Add a New Workout</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Exercise" 
          value={workout.exercise} 
          onChange={e => setWorkout({ ...workout, exercise: e.target.value })} 
          required
        />
        <input 
          type="number" 
          placeholder="Duration (mins)" 
          value={workout.duration} 
          onChange={e => setWorkout({ ...workout, duration: e.target.value })} 
          required
        />
        <input 
          type="date" 
          value={workout.date} 
          onChange={e => setWorkout({ ...workout, date: e.target.value })} 
          required
        />
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
}

export default AddWorkout;
