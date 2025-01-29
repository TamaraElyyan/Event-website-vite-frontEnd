import { useEffect, useState } from "react";
import {
  fetchStudents,
  acceptStudent,
  declineStudent,
} from "../API/endpoint/Student";
import Table from "../components/Table";

const PendingStudents = () => {
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

  // Handle accept action
  const handleAccept = async (id) => {
    try {
      console.log("Accepting student with ID:", id);
      await acceptStudent(id);
      setStudents(students.filter((student) => student.id !== id)); // Remove accepted student from list
    } catch (err) {
      console.error("Accept error:", err.response || err.message);
      setError("Failed to accept student. Please try again later.");
    }
  };

  // Handle decline action
  const handleDecline = async (id) => {
    try {
      console.log("Declining student with ID:", id);
      await declineStudent(id);
      setStudents(students.filter((student) => student.id !== id)); // Remove declined student from list
    } catch (err) {
      console.error("Decline error:", err.response || err.message);
      setError("Failed to decline student. Please try again later.");
    }
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Actions", accessor: "actions", custom: true }, // Add a new column for actions
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
        <h2 className="text-2xl font-semibold mb-4 mt-6">Pending Students</h2>
        <Table
          columns={columns}
          data={students}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      </div>
    </div>
  );
};

export default PendingStudents;
