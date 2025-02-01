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
    navigate("/addCourse");
  };

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses();
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch Courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  const handleEdit = (course) => {
    navigate(`/editCourse/${course.id}`); // Redirect to edit page
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this course?")) {
        await deleteCourse(id);
        setCourses(courses.filter((course) => course.id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
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
    { header: "Number of Students", accessor: "numberOfStudentsEnrolled" },
    { header: "Max Students", accessor: "maxNumberOfStudents" },
    { header: "End Registration", accessor: "endRegistration" },
  ];

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/6 h-full"></div>

      <div className="flex-1 flex flex-col ml-0 lg:ml-1 overflow-y-auto pr-4 lg:pl-8 lg:pr-11 relative mt-16">
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
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default CoursesList;
