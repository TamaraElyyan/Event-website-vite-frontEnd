import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axiosInstance from "../API/axios/axiosInstance";
import LOGIN from "../assets/PNG/Login.png";
import vector1 from "../assets/PNG/Vector1.png";
import vector2 from "../assets/PNG/Vector2.png";
import vector3 from "../assets/PNG/Vector3.png";

const Login = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "AuthContext is not provided. Please wrap your components with AuthProvider."
    );
  }

  const { login } = context;
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
      const response = await axiosInstance.post("auth/login", {
        username,
        password,
      });

      if (response.status === 200 && response.data) {
        const token = response.data;
        login(token, username, rememberMe);
        window.location.href = "/dashboard";
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1C1D21] overflow-hidden">
      <div className="flex w-3/4 max-w-screen-xl mx-auto h-full p-6 md:p-4">
        <div className="w-full md:w-1/2 bg-[#1C1D21] p-6 md:p-10 rounded-lg shadow-lg flex items-center justify-center relative z-10 h-full">
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
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
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

            <p className="text-center text-white mt-6 ">
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

        <div className="w-full md:w-1/2 p-6 md:p-10 bg-[#925FE2] text-white flex flex-col justify-center relative z-0 h-full">
          <img
            src={vector1}
            alt="vector1"
            className="max-w-full h-auto absolute top-0 left-0 z-0 hidden md:block"
          />
          <img
            src={vector2}
            alt="vector2"
            className="max-w-full h-auto absolute top-4 right-10 z-0 hidden md:block"
          />
          <h1 className="text-3xl md:text-5xl font-bold pt-16 z-10 text-center">
            Welcome to
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold pb-2 relative z-10 text-center">
            Student Portal
          </h1>

          <p className="text-white mt-2 text-lg mb-8 relative z-10 text-center">
            Access your account and explore your resources!
          </p>
          <div className="mt-1 relative z-10">
            <img
              src={LOGIN}
              alt="Student Portal Illustration"
              className="max-w-full h-auto pb-4 pr-3 pl-4 ml-16 "
            />
          </div>
          <img
            src={vector3}
            alt="vector3"
            className="max-w-full h-auto absolute bottom-0 left-0 z-0 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
