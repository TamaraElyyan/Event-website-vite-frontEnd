import { useState } from "react";
import axiosInstance from "../API/axios/axiosInstance"; // Importing the axiosInstance
import CourseImage from "./ImageProfile";
import { useNavigate } from "react-router-dom";

const Card = ({ item, type, auth }) => {
  const [isRegistered, setIsRegistered] = useState(
    item.registrationStudents?.some(
      (student) => student.student.email === auth?.user?.email
    )
  );
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleRegister = async () => {
    if (!auth?.token) {
      setMessage("You must be logged in to register.");
      // Redirect to login page if not logged in
      navigate("/login");
      return;
    }

    // Set loading state to true
    setLoading(true);

    try {
      // Make API call to create a registration
      const response = await axiosInstance.post(
        "/registration/createRegistration",
        {
          studentId: auth.user.id,
          trainingId: item.id,
          enrolled: true,
          notes: "Student is registered for the event, pending approval.",
        }
      );

      // Check if registration was successful
      if (response.status === 200) {
        setIsRegistered(true);
        setMessage("Registration successful! Please wait for approval.");
      } else {
        setMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred during registration.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getItemDescription = () => {
    if (type === "course") {
      return item.trainingDescription || "No description available.";
    }
    if (type === "event") {
      return item.eventDescription || "No description available.";
    }
    if (type === "partner") {
      return item.partnerDescription || "No description available.";
    }
    return "";
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <CourseImage
        token={auth?.token}
        imageFilename={item.image || "/images/default-item.png"}
        altText={item.name}
        size={80}
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
      {message && <p className="text-xs text-green-500 mt-2">{message}</p>}
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
