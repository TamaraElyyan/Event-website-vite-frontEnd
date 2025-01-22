import { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../API/axios/axiosInstance";
import { AuthContext } from "../Context/AuthContext"; // Assuming AuthContext is in the same folder



const StudentUpdateProfile = () => {
  const { auth, logout } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contactNumber: "",
    city: "",
    state: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const username = auth.username;

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("xxxxxxxxxxxxxxxxxxx"+auth.username)
      setLoading(true);

      try {
        const response = await axiosInstance.get(`user/${auth.username}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        console.log(response)
         setFormData(response.data);
      } catch (err) {
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.put(
        `student/${auth.username}/updateStudentProfile`,
        
      );
      setSuccess(true);
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Last Name */}
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Address */}
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Contact Number */}
        <div>
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* City */}
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* State */}
        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Password */}
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="col-span-2 flex justify-end space-x-4">
          <button onClick={handleCancel} className="bg-gray-200 px-4 py-2">
            Cancel
          </button>
          <button type="submit" className="bg-orange-500 px-4 py-2 text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentUpdateProfile;
