// src/API/endpoint/Training.js
import axiosInstance from "../axios/axiosInstance";

// Fetch courses
export const fetchCourses = async () => {
  const response = await axiosInstance.get("training/courseList");
  return response.data;
};

// Delete a course
export const deleteCourse = async (id) => {
  await axiosInstance.delete(`training/delete/${id}`);
};
