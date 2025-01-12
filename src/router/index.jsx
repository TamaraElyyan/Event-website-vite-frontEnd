import React, { useContext, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import PropTypes from "prop-types";

// General Components
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";
import About from "../views/About";
import Partners from "../views/Partners";
import Contact from "../views/Contact";
import Header from "../components/Header";

// Lazy-loaded Components
const Dashboard = React.lazy(() => import("../views/Dashboard"));
const StudentProfile = React.lazy(() => import("../views/StudentProfile"));
const InstructorProfile = React.lazy(() =>
  import("../views/InstructorProfile")
);
const NotFound = React.lazy(() => import("../views/NotFound"));

// ProtectedRoute Component for Guarding Routes
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { auth } = useContext(AuthContext);

  const getRedirectPath = () => {
    if (!auth.token) return "/login";
    return "/"; // Default redirect path if user has no access rights
  };

  if (!auth.token) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(auth.role)) {
    return <Navigate to={getRedirectPath()} replace />;
  }
  return children;
};

// PropTypes for ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // React Node validation for children
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of allowed roles
};

const AppRouter = () => {
  return (
    <Router>
      {/* Include Header outside Routes to make it accessible on all pages except dashboard */}
      <Header />

      <Suspense
        fallback={<div className="text-center">Loading... Please wait...</div>}
      >
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <Dashboard />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/student-profile"
            element={
              <ProtectedRoute allowedRoles={["STUDENT"]}>
                <StudentProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/instructor-profile"
            element={
              <ProtectedRoute allowedRoles={["INSTRUCTOR"]}>
                <InstructorProfile />
              </ProtectedRoute>
            }
          />
          {/* Default Route for Not Found */}
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for unmatched paths */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
