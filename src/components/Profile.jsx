import { useState, useEffect, useContext, useMemo } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import userDefault from "../assets/PNG/user-default.png";

const Profile = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    profileImage: userDefault,
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

        setUser({
          name: response.data.name,
          profileImage: response.data.profileImage || userDefault,
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
      >
        <img
          src={user.profileImage || userDefault}
          alt="Profile"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
        />
        <span className="hidden sm:block p-2 text-black font-medium">
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
