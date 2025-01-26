import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axiosInstance from "../API/axios/axiosInstance";
import { AuthContext } from "../Context/AuthContext";
import types from "../constants/types";

const AddEvent = () => {
  const { auth } = useContext(AuthContext);
  const [organizations, setOrganizations] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    trainingName: "",
    trainingDescription: "",
    maxNumberOfStudents: 0,
    endRegistration: "",
    type: "EVENT", // Default value
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
    const fetchInstructors = async () => {
      try {
        const response = await axiosInstance.get("/instructor/instructorList", {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setInstructors(response.data);
      } catch (err) {
        console.error("Failed to fetch Instructor.", err);
      }
    };

    fetchInstructors();
  }, [auth.token]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axiosInstance.get("/organization/organizationList", {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setOrganizations(response.data);
      } catch (err) {
        console.error("Failed to fetch Organizations.", err);
      }
    };

    fetchOrganizations();
  }, [auth.token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      training: {
        trainingName: formData.trainingName,
        trainingDescription: formData.trainingDescription,
        maxNumberOfStudents: parseInt(formData.maxNumberOfStudents, 10),
        endRegistration: formData.endRegistration,
        type: formData.type,
      },
      organizationIds: formData.organizationIds.split(",").map(Number),
      instructorIds: formData.instructorIds.split(",").map(Number),
    };

    try {
      await axiosInstance.post("/training/addingNew", requestBody, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      navigate("/EventsList"); // Redirect on success
    } catch (err) {
      console.error("Failed to add event:", err);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/6 h-full"></div>

      <div className="flex-1 flex flex-col ml-0 lg:ml-1 overflow-y-auto pr-4 lg:pl-8 lg:pr-11 relative mt-16">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Add a New event</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Event Name</label>
              <input
                type="text"
                name="trainingName"
                value={formData.trainingName}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
                placeholder="Enter event name"
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
                placeholder="Enter event description"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Max Number of Students</label>
              <input
                type="number"
                name="maxNumberOfStudents"
                value={formData.maxNumberOfStudents}
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
              {/* <label className="block text-sm font-medium mb-1">Type</label>
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
              </select> */}
            </div>
            <div>
              <label htmlFor="organization">Organization</label>
              <select
                id="organizationIds"
                name="organizationIds"
                value={formData.organizationIds}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select an Organization</option>
                {organizations.map((organization) => (
                  <option key={organization.id} value={organization.id}>
                    {organization.organizationName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="instructor">Instructor</label>
              <select
                id="instructorIds"
                name="instructorIds"
                value={formData.instructorIds}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select an Instructor</option>
                {instructors.map((instructor) => (
                  <option key={instructor.id} value={instructor.id}>
                    {instructor.name}
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

export default AddEvent;
