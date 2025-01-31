import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { fetchCourses, deleteCourse } from "../API/endpoint/Training";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/addCourse"); // Navigate to the Add Course page
  };

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses();
        if (Array.isArray(data)) {
          setCourses(data);
          console.log(data)
          console.log(data[0].trainingOrganizations)

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

    getCourses();
  }, []);

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      console.log("Deleting course with ID:", id);
      await deleteCourse(id); // Call API to delete course
      setCourses(courses.filter((course) => course.id !== id));
    } catch (err) {
      console.error("Delete error:", err.response || err.message);
      setError("Failed to delete course. Please try again later.");
    }
  };

  const columns = [
    { header: "ID", accessor: "id" },
    {
      header: "Name",
      accessor: "trainingName",
      render: (value, course) => (
        <span
          className="text-blue-500 hover:underline cursor-pointer"
          onClick={() => navigate(`/course/${course.id}`)}
        >
          {value}
        </span>
      ),
    },
    { header: "NumberOfStudentsEnrolled", accessor: "numberOfStudentsEnrolled" },
    { header: "Max Number Of Students", accessor: "maxNumberOfStudents" },
    { header: "End Registration", accessor: "endRegistration" },
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
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
            onClick={handleAdd}
          >
            + Add Course
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-3">Courses List</h2>
        <Table
          columns={columns}
          data={courses}
          onEdit={(course) => console.log("Edit course:", course)} // Handle edit
          onDelete={handleDelete} // Handle delete
        />
      </div>
    </div>
  );
};

export default CoursesList;
