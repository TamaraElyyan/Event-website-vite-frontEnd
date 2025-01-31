import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/Table";

const CoursesDetails = () => {
  const { id } = useParams(); // Get the 'id' from the URL
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // New state for success message

  // Fetch data from API when component mounts or 'id' changes
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/training/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }
        const data = await response.json();
        setCourseData(data); // Set course data including registrationStudents
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [id]); // Re-fetch if 'id' changes

  // Display loading, error, or course details
  if (loading) return <div>Loading...</div>;

  // Define columns for the Table based on registrationStudents data
  const columns = [
    {
      header: "Student Name",
      accessor: "studentName", // The path to student name
    },
    {
      header: "Enrolled",
      accessor: "enrolled", // The path to enrolled status
      render: (enrolled) => (enrolled === true ? "Yes" : "No"), // Correct boolean check
    },
    {
      header: "Notes",
      accessor: "notes", // The path to notes field
    },
    {
      header: "Deleted",
      accessor: "deleted", // The path to deleted status
      render: (deleted) => (deleted === true ? "Yes" : "No"), // Correct boolean check
    },
    {
      header: "Actions", // Additional header for actions
      accessor: "actions", // Placeholder for actions column
      render: (value, courseData) => {
        if (courseData.enrolled === false) {
          return (
            <button
              onClick={() => acceptStudent(courseData.id)}
              className="bg-green-500 text-white text-xs px-2 py-1 rounded-md"
            >
              Accept
            </button>
          );
        } else {
          return (
            <button
              onClick={() => rejectStudent(courseData.id)}
              className="bg-red-500 text-white text-xs px-2 py-1 rounded-md"
            >
              Reject
            </button>
          );
        }
      },
    },
  ];

  // Make sure registrationStudents exists
  const registrationStudentsData = courseData?.registrationStudents?.map((studentRegistration) => {
    if (!studentRegistration) return null;  // Return null for invalid student data

    return {
      key: studentRegistration.id || Math.random(),
      studentName: studentRegistration.student ? studentRegistration.student.name : "N/A",
      enrolled: studentRegistration.enrolled ?? false,
      notes: studentRegistration.notes || "N/A",
      deleted: studentRegistration.deleted ?? false,
      id: studentRegistration.id,
    };
  }).filter(Boolean);  // Filter out invalid/null students

  // Handle the API call to accept a student
  const acceptStudent = async (registrationId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/registration/accept/${registrationId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error accepting student:", errorResponse);
        throw new Error(errorResponse.message || "Failed to accept student");
      }
  else{
// Only set success message if request is successful
setSuccess("Student successfully accepted for the training");
setTimeout(() => setSuccess(null), 5000);
  }
      
  
      // Update UI after success
      setCourseData((prevCourseData) => ({
        ...prevCourseData,
        registrationStudents: prevCourseData.registrationStudents.map(student =>
          student.id === registrationId ? { ...student, enrolled: true } : student
        ),
      }));
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 5000);
      console.error("Error accepting student:", error);
    }
  };
  
  // Handle the API call to reject a student
  const rejectStudent = async (registrationId) => {
    // Optimistic UI Update: Assume the action will succeed
    setSuccess("Student successfully rejected from the training");
    setTimeout(() => setSuccess(null), 5000); // Remove success after 5 seconds

    try {
      const response = await fetch(`http://localhost:8080/api/v1/registration/reject/${registrationId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Error rejecting student:", errorResponse);
        throw new Error(errorResponse.message || "Failed to reject student");
      }

      // On success, update the course data
      setCourseData((prevCourseData) => ({
        ...prevCourseData,
        registrationStudents: prevCourseData.registrationStudents.map(student =>
          student.id === registrationId ? { ...student, enrolled: false } : student
        ),
      }));
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 5000); // Remove error after 5 seconds
      console.error("Error rejecting student:", error);
    }
  };

  // Handle edit action
  const handleEdit = (id) => {
    console.log(`Edit student with ID: ${id}`);
    // Implement the logic for editing the student here
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/registration/deleteTraining/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }

      // Optionally, remove the student from the UI after deletion
      const updatedCourseData = { ...courseData };
      updatedCourseData.registrationStudents = updatedCourseData.registrationStudents.filter(
        student => student.id !== id
      );
      setCourseData(updatedCourseData); // Trigger re-render with updated data

      console.log(`Student with registration ID ${id} deleted`);
    } catch (error) {
      setError(error.message);
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/6 h-full"></div>

      <div className="flex-1 flex flex-col ml-0 lg:ml-1 overflow-y-auto pr-4 lg:pl-8 lg:pr-11 relative mt-16">
        <div>
          {/* Success Message */}
          {success && (
            <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
              {success}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
              {error}
            </div>
          )}

          <h2 className="text-2xl font-semibold mb-4 mt-6">Student Registrations For {courseData.trainingName}</h2>

          {/* Render the table here */}
          {registrationStudentsData.length > 0 ? (
            <Table
              columns={columns}
              data={registrationStudentsData}
              onEdit={handleEdit} // Handle edit
              onDelete={handleDelete} // Handle delete
            />
          ) : (
            <div>No  students found for this course</div> // Handle the case where no students are available
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
