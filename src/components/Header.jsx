import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GetStartedButton from "./GetStartedButton";
import Logo from "./Logo";
import Profile from "./Profile";
import axios from "axios";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrainingDropdownOpen, setIsTrainingDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user authentication
  const [user, setUser] = useState(null); // State for storing user information
  const navigate = useNavigate();
  const location = useLocation();

  // Function to fetch user data
  const fetchUserData = async (token) => {
    try {
      const response = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // Replace with your actual token storage method
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    setIsTrainingDropdownOpen(false);
    navigate(path);
  };

  const handleTrainingDropdownToggle = () => {
    setIsTrainingDropdownOpen(!isTrainingDropdownOpen);
  };

  return (
    <header className="fixed left-0 right-0 z-50 text-gray-800 p-4 bg-white px-6">
      <div className="flex justify-between items-center pl-4">
        <Logo className="text-[#4D2C5E]" />
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className={`lg:flex hidden space-x-4 text-[20px]`}>
          <a
            onClick={() => handleNavigate("/")}
            className={`cursor-pointer hover:text-[#8d64a3] ${
              location.pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </a>
          <a
            onClick={() => handleNavigate("/about")}
            className={`cursor-pointer hover:text-[#8d64a3] ${
              location.pathname === "/about" ? "underline" : ""
            }`}
          >
            About
          </a>
          <a
            onClick={() => handleNavigate("/partners")}
            className={`cursor-pointer hover:text-[#8d64a3] ${
              location.pathname === "/partners" ? "underline" : ""
            }`}
          >
            Partners
          </a>
          <div className="relative">
            <a
              href="#"
              onClick={handleTrainingDropdownToggle}
              className={`cursor-pointer hover:text-[#8d64a3] ${
                location.pathname === "/training" ||
                location.pathname === "/courses" ||
                location.pathname === "/events"
                  ? "underline"
                  : ""
              }`}
            >
              Training
            </a>
            {isTrainingDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white p-2 rounded-md shadow-md z-10">
                <a
                  onClick={() => handleNavigate("/courses")}
                  className={`block py-2 px-4 cursor-pointer hover:bg-[#8d64a3] ${
                    location.pathname === "/courses" ? "underline" : ""
                  }`}
                >
                  Courses
                </a>
                <a
                  onClick={() => handleNavigate("/events")}
                  className={`block py-2 px-4 cursor-pointer hover:bg-[#8d64a3] ${
                    location.pathname === "/events" ? "underline" : ""
                  }`}
                >
                  Events
                </a>
              </div>
            )}
          </div>
          <a
            onClick={() => handleNavigate("/contact")}
            className={`cursor-pointer hover:text-[#8d64a3] ${
              location.pathname === "/contact" ? "underline" : ""
            }`}
          >
            Contact
          </a>
        </nav>
        <div className="space-x-4 lg:ml-10 hidden lg:block">
          {isLoggedIn && user ? (
            <Profile name={user.name} avatar={user.avatar} /> // Pass user information to Profile component
          ) : (
            <GetStartedButton />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white p-4 mt-4">
          <a
            onClick={() => handleNavigate("/")}
            className={`block py-2 cursor-pointer hover:bg-[#8d64a3] ${
              location.pathname === "/" ? "underline" : ""
            }`}
          >
            Home
          </a>
          <a
            onClick={() => handleNavigate("/about")}
            className={`block py-2 cursor-pointer hover:bg-[#8d64a3] ${
              location.pathname === "/about" ? "underline" : ""
            }`}
          >
            About
          </a>
          <a
            onClick={() => handleNavigate("/partners")}
            className={`block py-2 cursor-pointer hover:bg-[#8d64a3] ${
              location.pathname === "/partners" ? "underline" : ""
            }`}
          >
            Partners
          </a>
          <div>
            <a
              onClick={handleTrainingDropdownToggle}
              className={`block py-2 cursor-pointer hover:bg-[#8d64a3] ${
                location.pathname === "/training" ||
                location.pathname === "/courses" ||
                location.pathname === "/events"
                  ? "underline"
                  : ""
              }`}
            >
              Training
            </a>
            {isTrainingDropdownOpen && (
              <div className="ml-4">
                <a
                  onClick={() => handleNavigate("/courses")}
                  className={`block py-2 cursor-pointer hover:bg-[#8d64a3] ${
                    location.pathname === "/courses" ? "underline" : ""
                  }`}
                >
                  Courses
                </a>
                <a
                  onClick={() => handleNavigate("/events")}
                  className={`block py-2 cursor-pointer hover:bg-[#8d64a3] ${
                    location.pathname === "/events" ? "underline" : ""
                  }`}
                >
                  Events
                </a>
              </div>
            )}
          </div>
          <a
            onClick={() => handleNavigate("/contact")}
            className={`block py-2 cursor-pointer hover:bg-[#8d64a3] ${
              location.pathname === "/contact" ? "underline" : ""
            }`}
          >
            Contact
          </a>
          {isLoggedIn && user ? (
            <div className="mt-4">
              <Profile name={user.name} avatar={user.avatar} />
            </div>
          ) : (
            <div className="mt-4">
              <GetStartedButton />
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
