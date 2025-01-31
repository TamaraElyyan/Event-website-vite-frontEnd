import { useEffect, useState, useContext } from "react";
import CoursesAPI from "../API/endpoint/Courses";
import { AuthContext } from "../Context/AuthContext";
import CourseCard from "../components/Card";

const Courses = () => {
  const { auth } = useContext(AuthContext);

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await CoursesAPI.getCourses();
        setCourses(response.data || []);
      } catch (err) {
        setError("Failed to fetch courses.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="spinner">Loading...</div>;

  if (error)
    return <div className="bg-red-100 text-red-700 p-4 rounded">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-8 pt-[150px]">
      <h1 className="text-4xl text-orange-500 font-bold text-center mb-2">
        Available Courses
      </h1>
      <h2 className="text-xl text-gray-600 text-center mb-2">
        Explore Our Learning Opportunities
      </h2>
      <div className="w-16 h-1 bg-[#4d2c5e] mx-auto mb-6"></div>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500">No courses available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              item={course}
              type="course"
              auth={auth}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
