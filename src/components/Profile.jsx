import { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import ImageProfile from "./ImageProfile";

const Profile = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to toggle the modal
  const [user, setUser] = useState({
    name: "",
    profileImage: "",
    username: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { auth, logout } = useContext(AuthContext);

  const baseUrl = useMemo(() => import.meta.env.VITE_API_BASE_URL, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.token || !auth.username) {
        console.error("Token or username missing in AuthContext");
        setLoading(false);
        setError("Token or username is missing.");
        return;
      }

      try {
        const response = await axios.get(`${baseUrl}/user/${auth.username}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        const profileImageUrl = response.data.profilePictureUrl
          ? `http://localhost:8080/api/v1/user/profilePicture/${response.data.profilePictureUrl}`
          : "";

        setUser({
          name: response.data.name,
          profileImage: profileImageUrl,
          username: response.data.username,
        });
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [auth.token, auth.username, baseUrl]);

  // Handle image change action
  const handleChangeImage = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const response = await axios.post(
        `${baseUrl}/user/uploadProfileImage`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Update profile image URL
      const newProfileImageUrl = `http://localhost:8080/api/v1/user/profilePicture/${response.data.newImageFilename}`;
      setUser((prevState) => ({
        ...prevState,
        profileImage: newProfileImageUrl,
      }));

      console.log("Profile image updated successfully!");
      setShowModal(false); // Close the modal
    } catch (err) {
      console.error("Error uploading profile image:", err);
    }
  };

  // Handle image remove action
  const handleRemoveImage = async () => {
    try {
      await axios.delete(`${baseUrl}/user/deleteProfileImage`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      setUser((prevState) => ({
        ...prevState,
        profileImage: "",
      }));

      console.log("Profile image removed successfully!");
      setShowModal(false); // Close the modal
    } catch (err) {
      console.error("Error removing profile image:", err);
    }
  };

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} // Toggle profile menu
      >
        {/* Profile image with edit icon */}
        <div className="relative" onClick={() => setShowModal(true)}>
          <ImageProfile
            token={auth.token}
            imageFilename={user.profileImage} // Pass the image filename
            altText={user.username || "User"}
          />
          {/* Edit icon overlay */}
          <div className="absolute bottom-0 right-0 bg-gray-700 text-white p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L3 14.172V17h2.828l11.586-11.586a2 2 0 000-2.828zM5 15v-1.414l9.586-9.586 1.414 1.414L6.414 15H5z" />
            </svg>
          </div>
        </div>
        {/* Display the username */}
        <span className="p-2 text-black font-medium hidden sm:block">
          {user.username || "User"}
        </span>
      </div>

      {/* Profile Menu */}
      {isProfileMenuOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
          <li
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={logout} // Call the logout function from AuthContext
          >
            Logout
          </li>
        </ul>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Profile picture</h2>
            <p className="text-sm text-gray-600 mb-4">
              A picture helps people recognize you and lets you know when you’re
              signed in to your account.
            </p>
            <div className="flex justify-center mb-4">
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            {/* Hidden file input */}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleChangeImage}
            />
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-2 hover:bg-blue-600"
            >
              Change
            </button>
            <button
              onClick={handleRemoveImage}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-2 bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
