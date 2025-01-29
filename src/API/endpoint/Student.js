// src/API/endpoint/Student.js
import axiosInstance from "../axios/axiosInstance";

// Fetch students
export const fetchStudents = async () => {
  const response = await axiosInstance.get("student/studentList");
  return response.data;
};

// Accept a student
export const acceptStudent = async (id) => {
  try {
    await axiosInstance.put(`student/accept/${id}`);
  } catch (err) {
    throw new Error("Failed to accept student.");
  }
};

// Decline a student
export const declineStudent = async (id) => {
  try {
    await axiosInstance.put(`student/decline/${id}`);
  } catch (err) {
    throw new Error("Failed to decline student.");
  }
};
