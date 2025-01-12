import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import userDefault from "../assets/PNG/user-default.png";

const Profile = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    profileImage: "",
    username: "",
  });
  const [loading, setLoading] = useState(true);

  const { auth, logout } = useContext(AuthContext);

  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      if (!auth.token || !auth.username) {
        console.error("Token or username missing in AuthContext");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${baseUrl}/user/${auth.username}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setUser({
          name: response.data.name,
          profileImage: response.data.profileImage || userDefault,
          username: response.data.username,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [auth.token, auth.username, baseUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
      >
        <img
          src={user.profileImage || userDefault}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="p-2 text-black font-medium">
          {user.username || "User"}
        </span>
      </div>

      {isProfileMenuOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
          <li
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            onClick={logout}
          >
            Logout
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
