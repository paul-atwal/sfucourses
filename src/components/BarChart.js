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
    for (let i = 0; i < dataArray.length; i++) {
      sum = sum + parseFloat(dataArray[i][attribute]);
    }
    return sum / dataArray.length;
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
