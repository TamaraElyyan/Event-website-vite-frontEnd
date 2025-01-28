import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { login as loginEndpoint } from "../API/endpoint/Auth";
import LOGIN from "../assets/PNG/Login.png";
import vector1 from "../assets/PNG/Vector1.png";
import vector3 from "../assets/PNG/Vector3.png";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await loginEndpoint(
        { username, password },
        { useAuth: false }
      );

      if (response.status === 200 && response.data) {
        const token = response.data;

        try {
          const userResponse = await loginEndpoint.get(`user/${username}`);
          const userDetails = userResponse.data;
          const role = userDetails.role;

          localStorage.setItem("token", token);
          localStorage.setItem("username", username);
          localStorage.setItem("rememberMe", rememberMe);
          localStorage.setItem("role", role);

          login(token, username, rememberMe, role);
          window.location.href = "/dashboard";
        } catch (userError) {
          console.error("Error fetching user details:", userError);
          setError("Failed to fetch user details. Please try again later.");
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred. Try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1C1D21] overflow-hidden">
      <div className="flex w-3/4 max-w-screen-xl mx-auto h-full p-6 md:p-4">
        {/* Login Form */}
        <div className="w-full md:w-1/2 bg-[#1C1D21] p-6 md:p-10 rounded-lg shadow-lg flex items-center justify-center relative z-10">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-center text-white mb-6">
              Login
            </h2>
            <p className="text-center text-white opacity-70 mb-4">
              Glad to have you back!
            </p>

            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <div className="flex items-center justify-between">
                <label className="flex items-center text-white">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  Remember me
                </label>
                <a href="#" className="text-sm text-indigo-300 hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#925FE2] text-white rounded-md hover:bg-purple-600 transition disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="my-6 flex items-center justify-center space-x-4">
              <span className="w-1/4 h-0.5 bg-gray-400"></span>
              <p className="text-gray-400">Or</p>
              <span className="w-1/4 h-0.5 bg-gray-400"></span>
            </div>

            <div className="flex justify-center space-x-4">
              <button className="text-white hover:text-red-500 transition">
                <i className="fab fa-google text-xl"></i>
              </button>
              <button className="text-white hover:text-blue-500 transition">
                <i className="fab fa-facebook text-xl"></i>
              </button>
              <button className="text-white hover:text-gray-400 transition">
                <i className="fab fa-github text-xl"></i>
              </button>
            </div>

            <p className="text-center text-white mt-6">
              {"Don't have an account?"}
              <a
                href="/Register"
                className="text-indigo-300 ml-2 hover:underline"
              >
                Register
              </a>
            </p>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="hidden md:flex w-1/2 flex-col justify-center items-center bg-[#925FE2] text-white relative">
          <img
            src={vector1}
            alt="vector1"
            className="absolute top-0 left-0 z-0"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Welcome to Student Portal
          </h1>
          <p className="text-lg text-center mt-4">
            Access your account and explore your resources!
          </p>
          <img
            src={LOGIN}
            alt="Student Portal Illustration"
            className="w-3/4 mt-6"
          />
          <img
            src={vector3}
            alt="vector3"
            className="absolute bottom-0 left-0 z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
