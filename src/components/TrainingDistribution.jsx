import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement, // For pie chart arcs
  Tooltip, // For tooltips
  Legend // For legends
);

const TrainingDistribution = () => {
  const categoryData = {
    labels: ["Events", "Courses"],
    datasets: [
      {
        label: "Training Distribution",
        data: [31, 22],
        backgroundColor: ["#FFCD56", "#36A2EB"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows control over width and height
  };

  return (
    <div className="bg-white text-gray-800 p-6 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Training Distribution</h3>
      <div className="relative w-80 h-80 mx-auto">
        {/* حاوية بحجم مخصص */}
        <Pie data={categoryData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TrainingDistribution;
