import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ExerciseList from './components/ExerciseList';
import ExerciseDetails from './components/ExerciseDetails';
import AddWorkout from './components/AddWorkout';
import MyWorkouts from './components/MyWorkouts';
import WorkoutStats from './components/WorkoutStats';
import Profile from './components/Profile';
import GoalTracker from './components/GoalTracker';
import { isAuthenticated } from './services/auth';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/exercises" component={ExerciseList} />
        <Route path="/exercise/:id" component={ExerciseDetails} />
        <PrivateRoute path="/add-workout" component={AddWorkout} />
        <PrivateRoute path="/my-workouts" component={MyWorkouts} />
        <PrivateRoute path="/stats" component={WorkoutStats} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/goal-tracker" component={GoalTracker} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

// Function to handle protected routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default App;
