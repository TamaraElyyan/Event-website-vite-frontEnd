import { useEffect, useState } from "react";
import axiosInstance from "../API/axios/axiosInstance";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axiosInstance.get("student/studentList");
        setStudents(response.data);
      } catch (error) {
        console.error("Failed to fetch students", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Students List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse shadow-md bg-white rounded-lg">
          <thead>
            <tr className="bg-indigo-100">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">
                  {student.id}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {student.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {student.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsList;