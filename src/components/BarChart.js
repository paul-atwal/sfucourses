import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  // selected data
  const checkedRows = props.checkedRows;

  // attributes that we want to calculate averages of
  const attributes = [
    "instructor_rating",
    "instructor_difficulty",
    "course_difficulty",
    "workload",
  ];

  // function to calculate average
  const getAverage = (attribute, dataArray) => {
    let sum = 0;
    // track how many valid numbers we've encountered
    let count = 0;
    for (let i = 0; i < dataArray.length; i++) {
      const value = parseFloat(dataArray[i][attribute]);

      // if value isn't null, we'll use it for average
      if (!isNaN(value)) {
        sum += value;
        count++;
      }

      // if we have at least one valid number, return the average.
      // otherwise return 0
      return count > 0 ? sum / count : 0;
    }
  };

  const dataset = [];

  // loop over the attributes we want to get averages of,
  // get the average, and then save it to dataset
  for (let i = 0; i < attributes.length; i++) {
    dataset[i] = getAverage(attributes[i], checkedRows);
  }

  const data = {
    labels: ["Prof Rating", "Prof Difficulty", "Course Difficulty", "Workload"],
    datasets: [
      {
        data: dataset,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // define options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
