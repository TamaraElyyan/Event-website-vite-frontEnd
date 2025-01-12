import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";

const useAxiosInstance = () => {
  const { auth } = useContext(AuthContext); // الوصول إلى التوكن من الـ Context

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      if (auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`; // استخدام التوكن من الـ Context
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        window.location.href = "/login"; // إعادة التوجيه إلى صفحة تسجيل الدخول إذا كانت حالة الاستجابة 401
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosInstance;
