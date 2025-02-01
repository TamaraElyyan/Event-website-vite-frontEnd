import axiosInstance from "../axios/axiosInstance";

// Define all Courses-related API calls in one place
const Courses = {
  getCourses: () =>
    axiosInstance.get("training/courseList", { useAuth: false }),
};

export default Courses;
