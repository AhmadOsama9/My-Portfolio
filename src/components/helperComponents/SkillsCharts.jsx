import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SkillsChart = () => {
  const data = {
    labels: ["React", "Node.js", "TypeScript", "Docker", "Python", "PostgreSQL"],
    datasets: [
      {
        label: "Proficiency (%)",
        data: [90, 85, 80, 75, 70, 65], // Skill levels
        backgroundColor: [
          "#61DBFB", // React
          "#339933", // Node.js
          "#007ACC", // TypeScript
          "#0db7ed", // Docker
          "#FFD43B", // Python
          "#336791", // PostgreSQL
        ],
        borderColor: [
          "#61DBFB",
          "#339933",
          "#007ACC",
          "#0db7ed",
          "#FFD43B",
          "#336791",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}% Proficient`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="bg-n-7 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl text-gray-200 font-bold mb-4">Skill Proficiency</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SkillsChart;
