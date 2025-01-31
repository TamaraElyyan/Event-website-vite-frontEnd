import AboutUs from "../components/AboutUs";
import Feature from "../components/Feature";
import Benefits from "../components/Benefits";

const About = () => {
  return (
    <>
      <div className="bg-gray-50 px-6 md:px-16 lg:px-24 py-12 space-y-12">
        <AboutUs />
        <Feature />
        <Benefits />
      </div>
    </>
  );
};

export default About;
