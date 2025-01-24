const Contact = () => {
  return (
    <div className="bg-gray-50 py-[110px]  px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#925fe2] text-2xl md:text-3xl font-bold mb-4">
          Get in Touch
        </h2>
        <h3 className="text-black text-3xl md:text-4xl font-semibold mb-6">
          We Would Love to Hear from You
        </h3>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
          Whether you’re a instructor, student, or a organization looking to
          collaborate, reach out to us and let's create something impactful
          together.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <form action="#" method="POST">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-gray-700 text-lg font-semibold mb-2 block"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#925fe2]"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-gray-700 text-lg font-semibold mb-2 block"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#925fe2]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-gray-700 text-lg font-semibold mb-2 block"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#925fe2]"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#925fe2] text-white text-lg font-medium py-3 px-6 rounded-lg hover:bg-[#aa85e3] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
