import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function from react-router-dom

  const handleLogin = () => {
    navigate("/login"); // Navigate to the Login page
  };

  const handleRegister = () => {
    navigate("/signup"); // Navigate to the SignUp page
  };

  return (
    <header className="fixed left-0 right-0 z-50 bg-gray-800 text-white px-6">
      <div className="flex justify-between pl-4 items-center">
        {/* Logo */}
        <Logo className="text-white" />

        <div className="space-x-4 mr-10">
          {/* Login Button with navigation */}
          <button
            onClick={handleLogin} // Handle navigation when clicked
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100"
          >
            Login
          </button>

          {/* Register Button with navigation - Hidden on small screens */}
          <button
            onClick={handleRegister} // Handle navigation when clicked
            className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-700 hidden md:inline-block"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
