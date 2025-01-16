import { useContext } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../Context/AuthContext";
import { Roles } from "../constants/roles";
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { auth } = useContext(AuthContext);
  // auth.role = "ADMIN";
  console.log("cc" + auth.role);

  const getRedirectPath = () => {
    if (!auth.token) return "/login";
  
    switch (auth.role) {
      case Roles.STUDENT:
        return "/StudentUpdateProfile";
      case Roles.INSTRUCTOR:
        return "/InstructorUpdateProfile";
      case Roles.ADMIN:
        return "/dashboard";
      default:
        return "/"; // Default redirect path if the user has no access rights
    }
  };

  if (!auth.token) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(auth.role)) {
    return <Navigate to={getRedirectPath()} replace />;
  }

  return children;
};

// PropTypes for ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProtectedRoute;
