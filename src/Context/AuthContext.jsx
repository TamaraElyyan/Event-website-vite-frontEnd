import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || null,
    username: localStorage.getItem("username") || null,
    rememberMe: localStorage.getItem("rememberMe") === "true",
    role: localStorage.getItem("role") || null, // Add role
  });

  useEffect(() => {
    if (auth.rememberMe) {
      localStorage.setItem("token", auth.token || "");
      localStorage.setItem("username", auth.username || "");
      localStorage.setItem("rememberMe", "true");
      localStorage.setItem("role", auth.role || ""); // Persist role
    } else {
      // localStorage.removeItem("token");
      // localStorage.removeItem("username");
      // localStorage.removeItem("rememberMe");
      // localStorage.removeItem("role");
    }
  }, [auth]);

  const login = (token, username, rememberMe, role) => {
    setAuth({ token, username, rememberMe, role });
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove stored token
    localStorage.removeItem("user");  // Remove user info if stored
    setAuth({ token: null, username: null, rememberMe: false, role: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
