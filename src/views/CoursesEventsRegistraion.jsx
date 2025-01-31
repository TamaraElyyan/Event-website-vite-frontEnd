import { useState } from "react";
import axiosInstance from "../API/axios/axiosInstance";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ auth, item, setIsRegistered }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!auth?.token) {
      setMessage("You must be logged in to register.");
      // Redirect to login page if not logged in
      navigate("/login");
      return;
    }

    try {
      setLoading(true);
      setMessage(""); // Clear previous messages

      // Create the registration payload
      const registrationData = {
        studentId: auth?.user?.id, // Assuming user ID is stored in the auth object
        trainingId: item?.id, // Assuming item has the ID of the event or course
        enrolled: false,
        notes: "Student is registered for the event, pending approval.",
      };

      // Send POST request to create registration
      const response = await axiosInstance.post(
        "http://localhost:8080/api/v1/registration/createRegistration",
        registrationData,
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`, // Pass the token in headers for authentication
          },
        }
      );

      if (response.data.success) {
        setMessage("Registration successful. Pending approval.");
        setIsRegistered(true); // Set the user as registered
      } else {
        setMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {message && <p className="text-xs text-green-500 mt-2">{message}</p>}
      <button
        onClick={handleRegister}
        disabled={loading}
        className={`mt-3 px-4 py-2 rounded transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#4D2C5E] text-white hover:bg-[#8d64a3]"
        }`}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </div>
  );
};

export default RegistrationForm;
