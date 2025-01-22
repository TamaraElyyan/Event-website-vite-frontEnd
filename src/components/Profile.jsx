import { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext"; // Assuming AuthContext is in the same folder
import ImageProfile from "./ImageProfile"; // Import the ImageProfile component

const Profile = () => {
  // State variables
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    profileImage: "",
    username: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Access AuthContext
  const { auth, logout } = useContext(AuthContext);

  // Memoizing the base URL to prevent unnecessary recalculations
  const baseUrl = useMemo(() => import.meta.env.VITE_API_BASE_URL, []);

  // Fetch user data when the component mounts or when the token or username changes
  useEffect(() => {
    const fetchUserData = async () => {
      console.log(auth.username);
      console.log(auth.token);

      // Check if token and username are available in AuthContext
      if (!auth.token || !auth.username) {
        console.error("Token or username missing in AuthContext");
        setLoading(false);
        setError("Token or username is missing.");
        return;
      }

      try {
        // Fetch user data from the API
        const response = await axios.get(`${baseUrl}/user/${auth.username}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        // If the response contains the profile image filename, set the user data
        const profileImageUrl = response.data.profilePictureUrl
          ? response.data.profilePictureUrl
          : ""; // Set empty string for the image filename

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

  if (loading) return <div>Loading...</div>; // Loading state
  if (error) return <div>{error}</div>; // Error state

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} // Toggle profile menu
      >
        {/* Use the ImageProfile component */}
        <ImageProfile
          token={auth.token}
          imageFilename={user.profileImage} // Pass the image filename
          altText={user.username || "User"}
        />
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
    </div>
  );
};

export default Profile;
