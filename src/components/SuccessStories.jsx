import TestimonialImage from "../assets/PNG/user-default.png";
import Ellipse from "../assets/PNG/Ellipse27.png";

const SuccessStories = () => {
  return (
    <div className="relative">
      <section className="bg-white py-12 relative overflow-hidden w-full">
        {/* Ellipse Background */}
        <img
          src={Ellipse}
          alt="Ellipse Background"
          className="absolute top-0 left-0 w-96 pointer-events-none transform -translate-x-1/4 -translate-y-1/4"
        />

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto text-center relative z-10 px-6 md:px-12 lg:px-16">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#4d2c5e] mb-6">
            Success Stories from Our Students
          </h2>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={TestimonialImage}
                alt="Student"
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-800 text-lg italic mb-4">
                "Thanks to the courses I completed, I landed my dream job in
                tech! The lessons were practical and easy to follow."
              </p>
              <h3 className="text-gray-800 font-semibold">John Doe</h3>
              <p className="text-gray-600 text-sm">Software Engineer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={TestimonialImage}
                alt="Student"
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-800 text-lg italic mb-4">
                "This platform gave me the skills I needed to switch careers and
                build a successful career in digital marketing!"
              </p>
              <h3 className="text-gray-800 font-semibold">Jane Smith</h3>
              <p className="text-gray-600 text-sm">Digital Marketer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
