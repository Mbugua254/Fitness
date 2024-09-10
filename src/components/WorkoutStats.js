import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function WorkoutStats() {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    // Fetch workout data from the API
    axios.get('https://api.example.com/my-workouts', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      setWorkoutData(res.data);
    })
    .catch((err) => console.error(err));
  }, []);

  // Process data for the chart
  const processChartData = () => {
    const labels = [];
    const data = [];

    // Group workout data by date and sum up durations
    const groupedData = workoutData.reduce((acc, workout) => {
      const date = workout.date;
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date] += workout.duration;
      return acc;
    }, {});

    // Prepare labels and data for the chart
    for (const [date, totalDuration] of Object.entries(groupedData)) {
      labels.push(date);
      data.push(totalDuration);
    }

    return {
      labels,
      datasets: [
        {
          label: 'Total Workout Duration (mins)',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.6)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data,
        },
      ],
    };
  };

  return (
    <div>
      <h1>Workout Stats</h1>
      <div style={{ width: '600px', height: '400px' }}>
        {workoutData.length ? (
          <Bar
            data={processChartData()}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        ) : (
          <p>Loading workout data...</p>
        )}
      </div>
    </div>
  );
}

export default WorkoutStats;
