// import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import SalesOverview from "../components/UsersOverview";
import TrainingDistribution from "../components/TrainingDistribution";
import ReferralSources from "../components/ReferralSources";

const Dashboard = () => {
  return (
    <div className="bg-[#e5d5fd] flex h-screen overflow-hidden">
      <div className="w-1/6 h-full  ">{/* <Sidebar /> */}</div>

      {/* Main Content  */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-1 overflow-y-auto pl-4 pr-4 lg:pl-16 lg:pr-8 relative">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-16">
          <StatsCard title="Total Trainings" value="12,345" />
          <StatsCard title="Total Users" value="1,234" />
          <StatsCard title="Total Instructor" value="567" />
          <StatsCard title="Total Organization" value="12.5%" />
        </div>

        {/* Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <SalesOverview />
          <TrainingDistribution />
          <div className="col-span-1 lg:col-span-2">
            <ReferralSources />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
