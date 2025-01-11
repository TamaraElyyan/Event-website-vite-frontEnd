import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale, // For X-axis (category scale)
  LinearScale, // For Y-axis (linear scale)
  PointElement, // For points on the line chart
  LineElement, // For line rendering
  Title, // For chart titles
  Tooltip, // For tooltips
  Legend // For legends
);

const UsersOverview = () => {
  const usersData = {
    labels: [
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],
    datasets: [
      {
        label: "Users",
        data: [
          4000, 3000, 5000, 6000, 7000, 8000, 7500, 7200, 7400, 7600, 7700,
          8000,
        ],
        backgroundColor: "rgba(146,95,226)",
        borderColor: "rgba(146,95,226,1)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "146,95,226,1",
      },
    ],
  };

  return (
    <div className="bg-white text-gray-800 p-8 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Users Overview</h3>
      <Line data={usersData} />
    </div>
  );
};

export default UsersOverview;
