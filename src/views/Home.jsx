import Header from "../components/Header";
import HeroSection from "../components/Hero";

const Home = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
};

export default Home;
