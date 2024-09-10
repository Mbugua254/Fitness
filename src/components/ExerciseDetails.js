import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ExerciseDetails() {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/exercises/${id}`)
      .then(res => setExercise(res.data))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div>
      {exercise ? (
        <>
          <h1>{exercise.name}</h1>
          <p>{exercise.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ExerciseDetails;
