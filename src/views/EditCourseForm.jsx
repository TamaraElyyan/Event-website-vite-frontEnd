import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCourseById, updateCourse } from "../API/endpoint/Training";

const EditCourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    trainingName: "",
    numberOfStudentsEnrolled: "",
    maxNumberOfStudents: "",
    endRegistration: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const data = await fetchCourseById(id);
        setFormData({
          trainingName: data.trainingName,
          numberOfStudentsEnrolled: data.numberOfStudentsEnrolled,
          maxNumberOfStudents: data.maxNumberOfStudents,
          endRegistration: data.endRegistration,
        });
      } catch (err) {
        console.error("Error fetching course:", err);
        setError("Failed to load course data.");
      } finally {
        setLoading(false);
      }
    };

    getCourse();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCourse(id, formData);
      navigate("/courses"); // Redirect back to courses list
    } catch (err) {
      console.error("Error updating course:", err);
      setError("Failed to update course.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Course Name
          </label>
          <input
            type="text"
            name="trainingName"
            value={formData.trainingName}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Number of Students Enrolled
          </label>
          <input
            type="number"
            name="numberOfStudentsEnrolled"
            value={formData.numberOfStudentsEnrolled}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Max Number of Students
          </label>
          <input
            type="number"
            name="maxNumberOfStudents"
            value={formData.maxNumberOfStudents}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            End Registration Date
          </label>
          <input
            type="date"
            name="endRegistration"
            value={formData.endRegistration}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => navigate("/courses")}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCourseForm;
