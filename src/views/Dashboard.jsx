import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import SalesOverview from "../components/UsersOverview";
import TrainingDistribution from "../components/TrainingDistribution";
import ReferralSources from "../components/ReferralSources";

const Dashboard = () => {
  return (
    <div className="bg-[#e5d5fd] flex h-screen overflow-hidden">
      {/* Sidebar (on the left) */}
      <div className="w-1/6 h-screen fixed  bg-[#e5d5fd]">
        <Sidebar />
      </div>

      {/* Main Dashboard Content (on the right) */}
      <div className="w-5/6 ml-auto overflow-y-auto p-2 relative">
        {/* Navbar (full width and fixed at top) */}
        <Navbar className="w-full fixed top-0 left-0 z-10 bg-gray-100 shadow-md" />

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mt-16">
          <StatsCard title="Total Trainings" value="$12,345" />
          <StatsCard title="Total Users" value="1,234" />
          <StatsCard title="Total Instructor" value="567" />
          <StatsCard title="Total Organization" value="12.5%" />
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="col-span-1">
            <SalesOverview />
          </div>
          <div className="col-span-1">
            <TrainingDistribution />
          </div>
          <div className="bg-gray-100 col-span-2">
            <ReferralSources />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
