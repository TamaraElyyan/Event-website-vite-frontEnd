import GetStartedButton from "./GetStartedButton";
import Illustration from "../assets/PNG/OBJECT1Home.png";
import Object1 from "../assets/PNG/Group1.png";
import Object2 from "../assets/PNG/Group2.png";
import Object3 from "../assets/PNG/Group3.png";
import Object4 from "../assets/PNG/Group4.png";

const Hero = () => {
  return (
    <section className="relative pt-60 min-h-screen flex flex-col items-center justify-between px-8 overflow-hidden bg-[#FDF8F3]">
      {/* Background Objects */}
      <img
        src={Object1}
        alt="Background Object 1"
        className="absolute top-10 left-16 w-16 opacity-40 rotate-12"
      />
      <img
        src={Object2}
        alt="Background Object 2"
        className="absolute top-20 right-20 w-14 opacity-50 scale-110"
      />
      <img
        src={Object3}
        alt="Background Object 3"
        className="absolute bottom-16 left-10 w-12 opacity-40 rotate-6"
      />
      <img
        src={Object4}
        alt="Background Object 4"
        className="absolute bottom-6 right-14 w-20 opacity-50"
      />
      <img
        src={Object1}
        alt="Background Object 1"
        className="absolute bottom-32 right-48 w-24 opacity-40 rotate-[-10deg]"
      />
      <img
        src={Object2}
        alt="Background Object 2"
        className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 opacity-40 scale-125"
      />
      <img
        src={Object3}
        alt="Background Object 3"
        className="absolute top-28 right-32 w-14 opacity-40"
      />
      <img
        src={Object4}
        alt="Background Object 4"
        className="absolute bottom-10 left-40 w-16 opacity-40"
      />

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-12">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left p-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-orange-500">Smart</span>{" "}
            <div>
              {" "}
              Choice For <span className="text-orange-500">Future</span>{" "}
            </div>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Yalla Shabab is a platform that brings together students,
            instructors, and companies to host and participate in training
            courses and events.
          </p>
          <div>
            <GetStartedButton />
          </div>
        </div>

        {/* Right Column - Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Illustration}
            alt="Illustration"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
