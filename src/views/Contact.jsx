import { useState } from "react";
import emailjs from "emailjs-com";
import axiosInstance from "../API/axios/axiosInstance"; // Adjust the import path as needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to save message to the database
  const saveMessageToDatabase = async (messageData) => {
    try {
      const response = await axiosInstance.post(
        "contact/addContact",
        messageData
      );

      if (response.status !== 200) {
        throw new Error("Failed to save message to the database.");
      }
    } catch (error) {
      console.error("Error saving message to the database:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, phone, message } = formData;

    const templateParams = {
      name,
      email,
      phone,
      message,
    };

    try {
      // Send the form data to EmailJS
      await emailjs.send(
        "service_0liunlh",
        "template_4wt5vqq",
        templateParams,
        "jkiSQDrux__x0-OR1"
      );
      setResponseMessage("Your message has been sent successfully!");

      // Save the message to the database
      await saveMessageToDatabase(templateParams);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 py-[110px] px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#4d2c5e] text-xl md:text-2xl font-semibold mb-2">
            CONTACT US
          </h2>
          <h3 className="text-black text-3xl md:text-4xl font-bold mb-4">
            Leave us a message
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg pb-2">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="text-gray-700 text-lg font-medium mb-2 block"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8d64a3]"
                  placeholder="First_Name Last_Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-gray-700 text-lg font-medium mb-2 block"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8d64a3]"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="text-gray-700 text-lg font-medium mb-2 block"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8d64a3]"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-gray-700 text-lg font-medium mb-2 block"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8d64a3]"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#4d2c5e] text-white text-lg font-medium py-3 px-6 rounded-lg hover:bg-[#8d64a3] transition duration-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>

            {responseMessage && (
              <div className="mt-4 text-center text-lg text-green-600">
                {responseMessage}
              </div>
            )}
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between pb-2">
            <div>
              <p className="text-gray-700 text-lg mb-4">
                <strong>Yalla shabab</strong>
              </p>
              <p className="text-gray-600 text-lg">
                Ramallah, City Center,
                <br />
                Near Al-Manara Square,
                <br />
                Palestine
              </p>
              <p className="text-gray-600 text-lg mt-4">
                <strong>Phone:</strong> +970 562 667 777
              </p>
              <p className="text-gray-600 text-lg">
                <strong>Email:</strong> yallashabab96@gmail.com
              </p>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.5074187416326!2d35.19916341507131!3d31.902494981246188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cbe6f5a6e5405%3A0x6f85d5fd9824311f!2sAl-Manara%20Square%2C%20Ramallah!5e0!3m2!1sen!2sps!4v1616482454811!5m2!1sen!2sps"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
