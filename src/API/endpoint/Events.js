import axiosInstance from "../axios/axiosInstance";

// Define all Events-related API calls in one place
const Events = {
  getEvents: () => axiosInstance.get("training/eventList", { useAuth: false }),
};

export default Events;
