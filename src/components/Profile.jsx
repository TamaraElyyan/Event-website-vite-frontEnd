import { useState, useEffect } from "react";
import axios from "axios";
import userDefault from "../assets/PNG/user-default.png";

const Profile = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user, setUser] = useState({ name: "", profileImage: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      const username =localStorage.getItem('username') // Replace with dynamic username if needed
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      console.log("bbbbbbbbb"+username);
      console.log("bbbbbbbbb"+token);

      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/user/${username}`,{headers}
        );
        setUser({
          name: response.data.name,
          profileImage: response.data.profileImage,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

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
          src={user.profileImage ? user.profileImage : userDefault}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="p-2 text-black font-medium">
          {user.username} {" UserName "}
        </span>
      </div>

      {isProfileMenuOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
