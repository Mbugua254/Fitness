import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/exercises') // Use a public fitness API
      .then(res => setExercises(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Exercise List</h1>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <Link to={`/exercise/${exercise.id}`}>{exercise.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
