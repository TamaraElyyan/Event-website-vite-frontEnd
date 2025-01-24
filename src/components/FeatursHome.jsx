const FeatursHome = () => {
  return (
    <div>
      {" "}
      {/* Features Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#927ad4] mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide top-notch courses that empower you to achieve your
            dreams.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Expert Instructors
              </h3>
              <p className="text-gray-600">
                Learn from industry leaders and subject matter experts who guide
                you every step of the way.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Flexible Learning
              </h3>
              <p className="text-gray-600">
                Study at your own pace with our self-paced learning modules and
                live sessions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Certification
              </h3>
              <p className="text-gray-600">
                Earn industry-recognized certifications that enhance your career
                prospects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatursHome;
