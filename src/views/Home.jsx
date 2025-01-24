import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeatursHome from "../components/FeatursHome";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <FeatursHome />

      {/* Testimonials Section */}

      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
