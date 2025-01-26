import axiosInstance from "../axios/axiosInstance";

// Define all organization-related API calls in one place
const Organization = {
  getOrganizations: () => axiosInstance.get("organization/organizationList"),
};

export default Organization;
