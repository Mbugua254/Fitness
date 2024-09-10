import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/auth';

function Navbar() {
  const handleLogout = () => {
    logout();
    window.location.href = '/'; // Redirect after logout
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/exercises">Exercises</Link>
      {isAuthenticated() ? (
        <>
          <Link to="/add-workout">Add Workout</Link>
          <Link to="/my-workouts">My Workouts</Link>
          <Link to="/stats">Workout Stats</Link>
          <Link to="/goal-tracker">Goal Tracker</Link>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
