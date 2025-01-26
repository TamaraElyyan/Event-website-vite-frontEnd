// src/API/endpoint/Student.js
import axiosInstance from "../axios/axiosInstance";

// Fetch students
export const fetchStudents = async () => {
  const response = await axiosInstance.get("student/studentList");
  return response.data;
};

// Delete a student
export const deleteStudent = async (id) => {
  await axiosInstance.delete(`student/delete/${id}`);
};
