import axiosInstance from "../axios/axiosInstance";

// Fetch courses
export const fetchCourses = async () => {
  const response = await axiosInstance.get("training/courseList");
  return response.data;
};

// Fetch course by ID
export const fetchCourseById = async (id) => {
  const response = await axiosInstance.get(`training/course/${id}`);
  return response.data;
};

// Update a course
export const updateCourse = async (id, updatedData) => {
  const response = await axiosInstance.put(
    `training/update/${id}`,
    updatedData
  );
  return response.data;
};

// Delete a course
export const deleteCourse = async (id) => {
  await axiosInstance.delete(`training/delete/${id}`);
};
