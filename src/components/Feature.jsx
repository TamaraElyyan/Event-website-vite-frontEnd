import CreativeIdeas from "../assets/PNG/Creative Ideas.png";

const Feature = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 px-6 md:px-16 lg:px-24 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl">
        {/* Left Section: Image */}
        <div className="flex justify-center">
          <img
            src={CreativeIdeas}
            alt="Creative Ideas"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="text-left">
          <h2 className="text-[#925fe2] text-xl font-semibold mb-2">
            Features
          </h2>
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Bringing professors, students, and companies together for events and
            training.
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            Yalla Shabab connects experts and learners through events, fostering
            skill development and collaboration.
          </p>
          <button className="bg-[#925fe2] text-white text-lg font-medium py-3 px-6 rounded-lg hover:bg-[#aa85e3] transition duration-300 flex items-center gap-2">
            Learn More <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
