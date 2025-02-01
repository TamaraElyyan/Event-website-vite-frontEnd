import GetStartedButton from "./GetStartedButton";
import Illustration from "../assets/PNG/OBJECT1Home.png";
import Object1 from "../assets/PNG/Group1.png";
import Object2 from "../assets/PNG/Group2.png";
import Object3 from "../assets/PNG/Group3.png";
import Object4 from "../assets/PNG/Group4.png";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-8 py-20 bg-[#FDF8F3] overflow-hidden">
      {/* الخلفيات */}
      <img
        src={Object1}
        alt="Object 1"
        className="absolute top-10 left-8 sm:left-16 w-12 sm:w-16 opacity-40 rotate-12"
      />
      <img
        src={Object2}
        alt="Object 2"
        className="absolute top-16 right-10 sm:right-20 w-10 sm:w-14 opacity-50 scale-110"
      />
      <img
        src={Object3}
        alt="Object 3"
        className="absolute bottom-16 left-6 sm:left-10 w-10 sm:w-12 opacity-40 rotate-6"
      />
      <img
        src={Object4}
        alt="Object 4"
        className="absolute bottom-6 right-8 sm:right-14 w-16 sm:w-20 opacity-50"
      />
      <img
        src={Object1}
        alt="Object 5"
        className="absolute bottom-24 right-32 sm:right-48 w-16 sm:w-24 opacity-40 rotate-[-10deg]"
      />
      <img
        src={Object2}
        alt="Object 6"
        className="absolute top-6 left-1/2 transform -translate-x-1/2 w-14 sm:w-20 opacity-40 scale-125"
      />
      <img
        src={Object3}
        alt="Object 7"
        className="absolute top-24 right-24 sm:right-32 w-12 sm:w-14 opacity-40"
      />
      <img
        src={Object4}
        alt="Object 8"
        className="absolute bottom-12 left-32 sm:left-40 w-14 sm:w-16 opacity-40"
      />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The <span className="text-orange-500">Smart</span>
            <div>
              {" "}
              Choice For <span className="text-orange-500">Future</span>
            </div>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
            Yalla Shabab is a platform that brings together students,
            instructors, and companies to host and participate in training
            courses and events.
          </p>
          <div className="flex justify-center lg:justify-start">
            <GetStartedButton />
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Illustration}
            alt="Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
