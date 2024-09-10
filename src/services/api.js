import axios from 'axios';

// Create an Axios instance for the API
const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch all workouts
export const getWorkouts = async (token) => {
  try {
    const response = await api.get('/my-workouts', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching workouts:', error);
    throw error;
  }
};

// Function to add a workout
export const addWorkout = async (workoutData, token) => {
  try {
    const response = await api.post('/add-workout', workoutData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding workout:', error);
    throw error;
  }
};

// Function to delete a workout
export const deleteWorkout = async (workoutId, token) => {
  try {
    const response = await api.delete(`/delete-workout/${workoutId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting workout:', error);
    throw error;
  }
};

// Function to update workout data
export const updateWorkout = async (workoutId, workoutData, token) => {
  try {
    const response = await api.put(`/update-workout/${workoutId}`, workoutData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating workout:', error);
    throw error;
  }
};
