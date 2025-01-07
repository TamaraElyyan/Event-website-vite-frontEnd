import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate function from react-router-dom

  const handleLogin = () => {
    navigate("/login"); // Navigate to the Login page
  };

  const handleRegister = () => {
    navigate("/signup"); // Navigate to the SignUp page
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold ml-10">Yalla Shabab</div>
        <nav className="space-x-8">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
        </nav>
        <div className="space-x-4 mr-10">
          {/* Login Button with navigation */}
          <button
            onClick={handleLogin} // Handle navigation when clicked
            className="px-4 py-2 bg-white text-black rounded hover:bg-gray-100"
          >
            Login
          </button>

          {/* Register Button with navigation */}
          <button
            onClick={handleRegister} // Handle navigation when clicked
            className="px-4 py-2 bg-purple-500 rounded hover:bg-purple-700"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
