import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ReferralSources = () => {
  const data = {
    labels: ["Facebook", "Instagram", "Telegram", "Friends"],
    datasets: [
      {
        label: "Users Referred",
        data: [4500, 3700, 2500, 3100],
        backgroundColor: ["#3b5998", "#E4405F", "#0088cc", "#34b7f1"], // Adjusted colors to be closer to the platform's theme
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#4A4A4A",
        },
      },
      title: {
        display: true,
        text: "Users Referred by Source",
        color: "#4A4A4A",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#4A4A4A",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        ticks: {
          color: "#4A4A4A",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="bg-white text-gray-800 p-4 rounded shadow-sm ">
      {/* Reduced padding and height */}
      <h3 className="text-lg font-semibold mb-4 ">Users Referred by Source</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ReferralSources;
