import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Check if the request should use the Bearer token
//     const token = localStorage.getItem("token");
//     if (token && config.useAuth !== false) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login"; // Redirect to login if token expired or unauthorized
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;