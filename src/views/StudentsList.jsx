import { useEffect, useState } from "react";
import { fetchStudents, deleteStudent } from "../API/endpoint/Student";
import Table from "../components/Table";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const data = await fetchStudents();
        if (Array.isArray(data)) {
          setStudents(data);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (err) {
        console.error("Fetch error:", err.response || err.message);
        setError("Failed to fetch students. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getStudents();
  }, []);

  // Handle edit action
  const handleEdit = (student) => {
    console.log("Edit student:", student);
    // Add logic to handle editing a student
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      console.log("Deleting student with ID:", id);
      await deleteStudent(id);
      setStudents(students.filter((student) => student.id !== id));
    } catch (err) {
      console.error("Delete error:", err.response || err.message);
      setError("Failed to delete student. Please try again later.");
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
        <h2 className="text-2xl font-semibold mb-4 mt-6">Students List</h2>
        <Table
          columns={columns}
          data={students}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default StudentsList;
