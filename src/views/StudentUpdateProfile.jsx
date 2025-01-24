import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/axios/axiosInstance";
import { AuthContext } from "../Context/AuthContext";

const StudentUpdateProfile = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: "",
    city: "",
    state: "",
  });

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const username = auth.username;

  // Fetch user profile
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/user/${username}`, {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        setFormData(response.data); // Populate the form with fetched data
      } catch (err) {
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username, auth.token]);

  // Fetch city list for dropdown
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axiosInstance.get("/city/cityList", {
          headers: { Authorization: `Bearer ${auth.token}` },
        });
        console.log("Cities API Response:", response.data); // Debugging
        setCities(response.data);
      } catch (err) {
        console.error("Failed to fetch cities.", err);
      }
    };

    fetchCities();
  }, [auth.token]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "address",
      "contactNumber",
      "city",
      "state",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setError(`Please fill out the ${field} field.`);
        return false;
      }
    }

    if (!formData.email.includes("@")) {
      setError("Invalid email address.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    setLoading(true);
    setError(null); // Clear previous errors

    try {
      await axiosInstance.put(`/user/${username}`, formData, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      setSuccess(true);
      setTimeout(() => navigate("/student-profile"), 2000); // Redirect to student profile after 2 seconds
    } catch (err) {
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  // Cancel button handler
  const handleCancel = () => {
    navigate("/");
  };

  if (loading) return <div className="spinner">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto mt-[90px] p-8 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-8">Edit Profile</h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>
      )}
      {success && (
        <div className="bg-green-100 text-green-700 p-2 mb-4 rounded">
          Profile updated successfully! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            id="contactNumber"
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city">City</label>
          <select
            id="city"
            name="city"
            value={formData.city || ""} // Ensure value is never null
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.nameEn}>
                {city.nameEn}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        <div>
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="col-span-2 flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="bg-gray-200 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#aa85e3] px-4 py-2 text-white rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default StudentUpdateProfile;
