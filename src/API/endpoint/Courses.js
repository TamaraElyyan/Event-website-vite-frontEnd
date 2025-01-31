import axiosInstance from "../axios/axiosInstance";

// Define all Courses-related API calls in one place
const Courses = {
  getCourses: () =>
    axiosInstance.get("training/courseList", { useAuth: false }),
};

export default Courses;

// import axiosInstance from "../axios/axiosInstance";

// const CoursesAPI = {
//   // Fetch all courses
//   getCourses: async () => {
//     try {
//       const response = await axiosInstance.get("training/courseList", { useAuth: false });
//       return response.data; // Return only the data
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//       throw error; // Allow handling in the component
//     }
//   },

//   // Fetch a single course by ID
//   getCourseById: async (courseId) => {
//     try {
//       const response = await axiosInstance.get(`training/course/${courseId}`, { useAuth: false });
//       return response.data;
//     } catch (error) {
//       console.error(`Error fetching course ${courseId}:`, error);
//       throw error;
//     }
//   },

//   // Create a new course (Requires Authentication)
//   createCourse: async (courseData, token) => {
//     try {
//       const response = await axiosInstance.post("training/course", courseData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error creating course:", error);
//       throw error;
//     }
//   },

//   // Update an existing course (Requires Authentication)
//   updateCourse: async (courseId, courseData, token) => {
//     try {
//       const response = await axiosInstance.put(`training/course/${courseId}`, courseData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     } catch (error) {
//       console.error(`Error updating course ${courseId}:`, error);
//       throw error;
//     }
//   },

//   // Delete a course (Requires Authentication)
//   deleteCourse: async (courseId, token) => {
//     try {
//       const response = await axiosInstance.delete(`training/course/${courseId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data;
//     } catch (error) {
//       console.error(`Error deleting course ${courseId}:`, error);
//       throw error;
//     }
//   },
// };

// export default CoursesAPI;
