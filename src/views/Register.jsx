import { useState } from "react";
import axiosInstance from "../API/axios/axiosInstance";
import vector1 from "../assets/PNG/Vector1.png";
import vector2 from "../assets/PNG/Vector2.png";
import vector3 from "../assets/PNG/Vector3.png";
import LOGIN from "../assets/PNG/Login.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post("/auth/StudentSignUp", {
        username,
        email,
        password,
      });

      console.log("Signup successful:", response.data);
      alert("Signup successful! Please login.");
      window.location.href = "/login"; // Redirect to login page
    } catch (err) {
      console.error("Error during signup:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#1C1D21] overflow-hidden">
      <div className="flex w-full max-w-screen-xl mx-auto h-full p-6 md:p-10">
        {/* Right Section with Form */}
        <div className="w-full md:w-1/2 bg-[#1C1D21] p-6 md:p-10 rounded-lg shadow-lg flex items-center justify-center relative z-10 h-full">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-center text-white mb-6">
              Register
            </h2>
            <p className="text-center text-white opacity-70 mb-4">
              Create an account to get started!
            </p>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}

            {/* Registration Form */}
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
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#925FE2] text-white rounded-md hover:bg-purple-600 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Register"}
              </button>
            </form>

            <p className="text-center text-white mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-indigo-300 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>

        {/* Left Section */}
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
            Join us and start exploring your resources!
          </p>
          {/* Image "LOGIN" placed above vector3 */}
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

export default Register;
