import TestimonialImage from "../assets/PNG/user-default.png";

const Testimonials = () => {
  return (
    <div>
      {" "}
      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#927ad4] mb-6">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={TestimonialImage}
                alt="Student"
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-800 text-lg italic mb-4">
                "The courses are incredibly well-structured and insightful.
                They’ve truly transformed my career!"
              </p>
              <h3 className="text-gray-800 font-semibold">John Doe</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src={TestimonialImage}
                alt="Student"
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-800 text-lg italic mb-4">
                "Fantastic instructors and a great learning platform. Highly
                recommended!"
              </p>
              <h3 className="text-gray-800 font-semibold">Jane Smith</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
