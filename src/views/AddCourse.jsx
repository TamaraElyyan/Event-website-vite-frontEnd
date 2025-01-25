import {useEffect, useState,useContext } from "react";
import axios from "axios";
import types from "../constants/types";
import { AuthContext } from "../Context/AuthContext";
import axiosInstance from "../API/axios/axiosInstance";


const AddCourse = () => {
    const { auth } = useContext(AuthContext);
    const [organizations, setOrganizations] = useState([]);
    const [instructors, setInstructors] = useState([]);


  const [formData, setFormData] = useState({
    trainingName: "",
    trainingDescription: "",
    numberOfStudentsEnrolled: 0,
    endRegistration: "",
    type: "TRAINING_COURSE", // Default value
    organizationIds: "",
    instructorIds: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchInstructors= async () => {
      try {
        const response = await axiosInstance.get("/instrcutor/instructorList", {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        console.log("Instructor API Response:", response.data); // Debugging
        setOrganizations(response.data);
      } catch (err) {
        console.error("Failed to fetch Instructor.", err);
      }
    };

    fetchInstructors();
  }, [auth.token]);
  useEffect(() => {
    const fetchOrganizations= async () => {
      try {
        const response = await axiosInstance.get("/organization/organizationList", {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        console.log("Organizations API Response:", response.data); // Debugging
        setOrganizations(response.data);
      } catch (err) {
        console.error("Failed to fetch Organizations.", err);
      }
    };

    fetchOrganizations();
  }, [auth.token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare data for the API request
    const requestBody = {
      training: {
        trainingName: formData.trainingName,
        trainingDescription: formData.trainingDescription,
        numberOfStudentsEnrolled: parseInt(formData.numberOfStudentsEnrolled, 10),
        endRegistration: formData.endRegistration,
        type: formData.type,
      },
      organizationIds: formData.organizationIds.split(",").map(Number), // Convert to array of numbers
      instructorIds: formData.instructorIds.split(",").map(Number), // Convert to array of numbers
    };

    try {
      const response = await axios.post("/api/endpoint", requestBody); // Replace with your API endpoint
      console.log("Course added successfully:", response.data);
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
    <div className="w-1/6 h-full"></div>
  
  <div className="flex-1 flex flex-col ml-0 lg:ml-1 overflow-y-auto pr-4 lg:pl-8 lg:pr-11 relative mt-16">
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Add a New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Course Name</label>
          <input
            type="text"
            name="trainingName"
            value={formData.trainingName}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter course name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="trainingDescription"
            value={formData.trainingDescription}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter course description"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Number of Students Enrolled</label>
          <input
            type="number"
            name="numberOfStudentsEnrolled"
            value={formData.numberOfStudentsEnrolled}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            placeholder="Enter number of students"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Registration</label>
          <input
            type="date"
            name="endRegistration"
            value={formData.endRegistration}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
            required
          >
            {Object.keys(types).map((key) => (
              <option key={key} value={types[key]}>
                {types[key]}
              </option>
            ))}
          </select>
        </div>
        <div>
        <div>
          <label htmlFor="organization">Organization</label>
          <select
            id="organization"
            name="organization"
            value={formData.organization || ""} // Ensure value is never null
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a Organization</option>
            {organizations.map((organization) => (
              <option key={organization.id} value={organization.id}>
                {organization.organizationName}
              </option>
            ))}
          </select>
        </div>
        </div>
        <div>
        <label htmlFor="instructor">Instructor</label>
          <select
            id="instructor"
            name="instructor"
            value={formData.instructor || ""} // Ensure value is never null
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a Instructor</option>
            {instructors.map((instrcutor) => (
              <option key={instrcutor.id} value={instrcutor.id}>
                {instrcutor.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default AddCourse;
