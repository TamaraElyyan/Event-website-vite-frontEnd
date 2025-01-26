import { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import ImageProfile from "./ImageProfile";

const Profile = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [auth.token, auth.username, baseUrl]);

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

      const newProfileImageUrl = `http://localhost:8080/api/v1/user/profilePicture/${response.data.newImageFilename}`;
      setUser((prevState) => ({
        ...prevState,
        profileImage: newProfileImageUrl,
      }));

      setShowModal(false);
    } catch (err) {
      console.error("Error uploading profile image:", err);
    }
  };

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

      setShowModal(false);
    } catch (err) {
      console.error("Error removing profile image:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="relative">
      <div className="relative flex items-center cursor-pointer">
        {/* Profile Image */}
        <div
          className="relative"
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        >
          <ImageProfile
            token={auth.token}
            imageFilename={user.profileImage}
            altText={user.username || "User"}
          />
          {/* Edit Icon Overlay */}
          <div
            className="absolute bottom-0 right-0 bg-gray-700 text-white p-2 rounded-full cursor-pointer hover:bg-gray-600"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the parent click
              setIsProfileMenuOpen(!isProfileMenuOpen);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-2 w-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L3 14.172V17h2.828l11.586-11.586a2 2 0 000-2.828zM5 15v-1.414l9.586-9.586 1.414 1.414L6.414 15H5z" />
            </svg>
          </div>
        </div>

        {/* Username */}
        <span className="p-2 text-black font-medium hidden sm:block">
          {user.username || "User"}
        </span>
      </div>

      {/* Profile Menu */}
      {isProfileMenuOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
          <li
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Update Profile Picture
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={logout}
          >
            Sign out
          </li>
        </ul>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Profile Picture</h2>
            <div className="flex justify-center mb-4">
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleChangeImage}
            />
            <button
              onClick={() => document.getElementById("fileInput").click()}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-2"
            >
              Change
            </button>
            <button
              onClick={handleRemoveImage}
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Remove
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-2 bg-gray-300 text-black py-2 px-4 rounded-md"
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
