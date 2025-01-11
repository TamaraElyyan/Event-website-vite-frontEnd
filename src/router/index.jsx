import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import axiosInstance from "../API/axios/axiosInstance";

// Components for public views
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";
import About from "../views/About";

// Lazy-loaded components for large sections
const Dashboard = React.lazy(() => import("../views/Dashboard"));
const StudentProfile = React.lazy(() => import("../views/StudentProfile"));
const InstructorProfile = React.lazy(() =>
  import("../views/InstructorProfile")
);
const NotFound = React.lazy(() => import("../views/NotFound"));

const AppRouter = () => {
  const [user, setUser] = useState({
    isAuthenticated: false, // Default: Not authenticated
    role: "", // Default: No role
    loading: true, // Default: Loading state
  });

  // Fetch user authentication and role
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get("/user/Admin"); // Adjust API endpoint for user info
        console.log(response);
        setUser({
          isAuthenticated: true,
          role: response.data.role, // e.g., "SUPER_ADMIN", "STUDENT", "INSTRUCTOR"
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser({
          isAuthenticated: false,
          role: "",
          loading: false,
        });
      }
    };
    fetchUser();
  }, []);

  // Redirect path based on user role
  const getRedirectPath = () => {
    // if (!user.isAuthenticated) return "/login";
    switch (user.role) {
      case "SUPER_ADMIN":
        return "/dashboard";
      case "STUDENT":
        return "/student-profile";
      case "INSTRUCTOR":
        return "/instructor-profile";
      default:
        return "/login";
    }
  };

  if (user.loading) {
    return <div>Loading user data...</div>; // Loading indicator
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Role-Based Routes */}
          <Route
            path="/dashboard"
            element={
              user.isAuthenticated && user.role === "SUPER_ADMIN" ? (
                <Dashboard />
              ) : (
                <Navigate to={getRedirectPath()} replace />
              )
            }
          />
          <Route
            path="/student-profile"
            element={
              user.isAuthenticated && user.role === "STUDENT" ? (
                <StudentProfile />
              ) : (
                <Navigate to={getRedirectPath()} replace />
              )
            }
          />
          <Route
            path="/instructor-profile"
            element={
              user.isAuthenticated && user.role === "INSTRUCTOR" ? (
                <InstructorProfile />
              ) : (
                <Navigate to={getRedirectPath()} replace />
              )
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
