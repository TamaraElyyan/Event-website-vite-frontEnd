import { useEffect, useState } from "react";
import axiosInstance from "../API/axios/axiosInstance";
import Table from "../components/Table";

const InstructorsList = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstructors= async () => {
      try {
        const response = await axiosInstance.get("instructor/instructorList");
        if (Array.isArray(response.data)) {
          setInstructors(response.data);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (err) {
        console.error("Fetch error:", err.response || err.message);
        setError("Failed to fetch instructors. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstructors();
  }, []);

  // Handle edit action
  const handleEdit = (instructor) => {
    console.log("Edit instructor:", instructor);
    // Add logic to handle edit, e.g., open a modal with the instructor's details
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      console.log("Deleting instructor with ID:", id);
      await axiosInstance.delete(`instructor/delete/${id}`); // Replace with your API endpoint for deleting a instructor
      setInstructors(instructors.filter((instructor) => instructor.id !== id));
    } catch (err) {
      console.error("Delete error:", err.response || err.message);
      setError("Failed to delete instructor. Please try again later.");
    }
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
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
        <h2 className="text-2xl font-semibold mb-4 mt-6">Instructors List</h2>
        <Table
          columns={columns}
          data={instructors}
          onEdit={handleEdit} // Pass handleEdit function
          onDelete={handleDelete} // Pass handleDelete function
        />
      </div>
    </div>
  );
};

export default InstructorsList;
