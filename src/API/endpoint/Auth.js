import axiosInstance from "../axios/axiosInstance";

export const login = async (credentials) => {
  return axiosInstance.post("auth/login", credentials);
};

export const getUserDetails = async (username) => {
  return axiosInstance.get(`user/${username}`);
};

export const logout = async () => {
  return axiosInstance.post("auth/logout");
};

export const addAdmin = async (adminData) => {
  return axiosInstance.post("auth/add-admin", adminData);
};

export const studentSignUp = async (studentData) => {
  return axiosInstance.post("auth/signup", studentData);
};

export const addTeacher = async (teacherData) => {
  return axiosInstance.post("auth/signup", teacherData);
};

export const addOrganization = async (organizationData) => {
  return axiosInstance.post("auth/signup", organizationData);
};
