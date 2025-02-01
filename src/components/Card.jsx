import { useState } from "react";
import axiosInstance from "../API/axios/axiosInstance"; // Importing axiosInstance
import { useNavigate } from "react-router-dom";
import defaultImage from "../assets/PNG/courseIcon1.jpg";

const Card = ({ item, type, auth, onRegister }) => {
  const [isRegistered, setIsRegistered] = useState(
    item.registrationStudents?.some(
      (student) => student.student.email === auth?.user?.email
    )
  );
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // To store the type of message (success or error)
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleRegister = async () => {
    if (!auth?.token) {
      setMessage("You must be logged in to register.");
      setMessageType("error"); // Set message type to error
      navigate("/login");
      return;
    }

    if (!item || !item.id) {
      setMessage("Invalid event or course. Please try again.");
      setMessageType("error"); // Set message type to error
      console.error("Error: item is undefined or missing an ID.", item);
      return;
    }

    setLoading(true);
    setMessage(""); // Clear previous messages
    setMessageType(""); // Clear previous message type

    try {
      // Fetch the student ID using username
      const studentResponse = await axiosInstance.get(
        `/student/findByUsername/${auth?.username}`
      );

      if (!studentResponse.data?.id) {
        throw new Error("Student ID not found.");
      }

      const studentId = studentResponse.data.id;

      // Proceed with registration
      const registrationResponse = await axiosInstance.post(
        "/registration/createRegistration",
        {
          studentId: studentId,
          trainingId: item.id,
          enrolled: true,
          notes: "Student is registered for the event, pending approval.",
        }
      );

      // Check for successful registration using status code 201
      if (registrationResponse.status === 201) {
        setIsRegistered(true);
        setMessage("✅ Registration successful! Please wait for approval.");
        setMessageType("success"); // Set message type to success
        onRegister(item.id); // Trigger the onRegister function passed from Courses.js
      } else {
        setMessage("❌ Registration failed. Please try again.");
        setMessageType("error"); // Set message type to error
      }
    } catch (error) {
      console.error("Registration Error:", error);
      // Display error message from the response if available, otherwise use a generic error
      setMessage(`❌ ${error.response?.data?.message || error.message}`);
      setMessageType("error"); // Set message type to error
    } finally {
      setLoading(false);
    }
  };

  const getItemDescription = () => {
    if (type === "course") {
      return item.trainingDescription || "No description available.";
    }
    if (type === "event") {
      return item.trainingDescription || "No description available.";
    }
  };

  const imageUrl = item.imageUrl || defaultImage;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={imageUrl}
        alt={item.trainingName}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold text-gray-800 mt-2">
        {item.trainingName}
      </h3>
      <p className="text-sm text-gray-600 mt-2 text-center">
        {getItemDescription()}
      </p>
      {type === "course" && (
        <p className="text-xs text-gray-500 mt-1">
          {item.numberOfStudentsEnrolled}/{item.maxNumberOfStudents} students
          enrolled
        </p>
      )}
      {message && (
        <p
          className={`text-xs mt-2 ${
            messageType === "success"
              ? "text-green-500" // Success message in green
              : "text-red-500"   // Error message in red
          }`}
        >
          {message}
        </p>
      )}
      {(type === "course" || type === "event") && (
        <button
          onClick={handleRegister}
          disabled={isRegistered || loading}
          className={`mt-3 px-4 py-2 rounded transition ${
            isRegistered || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#4D2C5E] text-white hover:bg-[#8d64a3]"
          }`}
        >
          {loading
            ? "Registering..."
            : isRegistered
            ? "Registered"
            : "Register"}
        </button>
      )}
    </div>
  );
};

export default Card;
