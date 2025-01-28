import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa";
import Ellipse from "../assets/PNG/Ellipse 1.png";

const FeatursHome = () => {
  return (
    <section className="relative bg-white py-12 px-6 md:px-16 lg:px-24 w-full">
      {/* Background Ellipse */}
      <img
        src={Ellipse}
        alt="Ellipse Background"
        className="absolute top-0 right-0 w-40 pointer-events-none transform translate-x-1/4 -translate-y-1/4"
      />

      {/* Content Container */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4D2C5E]">
          Why Choose Us?
        </h2>
        <p className="text-lg mb-8 text-gray-800">
          We provide top-notch courses that empower you to achieve your dreams.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#4D2C5E] p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaChalkboardTeacher className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Expert Instructors
            </h3>
            <p className="text-sm text-gray-200">
              Learn from industry leaders and subject matter experts who guide
              you every step of the way.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#4D2C5E] p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaLaptopCode className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Flexible Learning
            </h3>
            <p className="text-sm text-gray-200">
              Study at your own pace with our self-paced learning modules and
              live sessions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#4D2C5E] p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <FaCertificate className="text-4xl text-white mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Certification
            </h3>
            <p className="text-sm text-gray-200">
              Earn industry-recognized certifications that enhance your career
              prospects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatursHome;
