const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white text-gray-800 p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  );
};

export default StatsCard;
