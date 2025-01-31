import Hero from "../components/Hero";
import SuccessStories from "../components/SuccessStories";
import bg from "../assets/PNG/BackGroundHome.png";
import FeatursHome from "../components/FeatursHome";

const Home = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      {/* Header and Hero Section with Background Image */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          minHeight: "100vh",
        }}
      >
        {/* Hero Section */}
        <Hero />
      </div>
      <div className="w-full pt-16 bg-white">
        <FeatursHome />
      </div>

      {/* SuccessStories Section */}
      <SuccessStories />
    </div>
  );
};

export default Home;
