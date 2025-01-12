import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({
  isAuthenticated = false, // Default: not authenticated
  allowedRoles = [],       // Default: no roles allowed
  userRole = "",           // Default: empty role
  children,
}) => {
  // If user is not authenticated or doesn't have an allowed role, redirect to login
  if (!isAuthenticated || (allowedRoles.length > 0 && !allowedRoles.includes(userRole))) {
    return <Navigate to="/login" replace />;
  }

  // Render children if all conditions are met
  return children;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool,          // Whether the user is authenticated
  allowedRoles: PropTypes.arrayOf(PropTypes.string), // Roles allowed to access the route
  userRole: PropTypes.string,               // Current user's role
  children: PropTypes.node.isRequired,      // Child components to render
};

export default ProtectedRoute;
