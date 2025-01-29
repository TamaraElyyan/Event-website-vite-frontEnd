import { useEffect, useState } from "react";
import axiosInstance from "../API/axios/axiosInstance";
import Table from "../components/Table";
import AddButton from "../components/AddButton";

const EventsList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get("training/eventList");
        if (Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (err) {
        console.error("Fetch error:", err.response || err.message);
        setError("Failed to fetch Courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Handle edit action
  const handleEdit = (course) => {
    console.log("Edit course:", course);
    // Add logic to handle edit, e.g., open a modal with the Course's details
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      console.log("Deleting course with ID:", id);
      await axiosInstance.delete(`trainig/delete/${id}`); // Replace with your API endpoint for deleting a Course
      setCourses(courses.filter((course) => course.id !== id));
    } catch (err) {
      console.error("Delete error:", err.response || err.message);
      setError("Failed to delete course. Please try again later.");
    }
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "trainingName" },
    {
      header: "NumberOfStudentsEnrolled",
      accessor: "numberOfStudentsEnrolled",
    },
    { header: "maxNumberOfStudents", accessor: "maxNumberOfStudents" },
    { header: "endRegistration", accessor: "endRegistration" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (left side) */}
      <div className="w-1/6 h-full"></div>

      {/* Main Content (right side) */}
      <div className="flex-1 flex flex-col ml-0 lg:ml-1 overflow-y-auto pr-4 lg:pl-8 lg:pr-11 relative mt-16">
        {/* Add Button */}
        <div className="flex justify-end mt-8">
          <AddButton label="Event" path="/AddEvent" />
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Events List</h2>

        <Table
          columns={columns}
          data={courses}
          onEdit={handleEdit} // Pass handleEdit function
          onDelete={handleDelete} // Pass handleDelete function
        />
      </div>
    </div>
  );
};

export default EventsList;
