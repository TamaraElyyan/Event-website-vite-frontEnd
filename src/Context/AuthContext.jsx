import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || null,
    username: localStorage.getItem("username") || null,
    rememberMe: localStorage.getItem("rememberMe") === "true",
  });

  useEffect(() => {
    if (auth.rememberMe) {
      localStorage.setItem("token", auth.token);
      localStorage.setItem("username", auth.username);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("rememberMe");
    }
  }, [auth]);

  const login = (token, username, rememberMe) => {
    setAuth({ token, username, rememberMe });
  };

  const logout = () => {
    setAuth({ token: null, username: null, rememberMe: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
