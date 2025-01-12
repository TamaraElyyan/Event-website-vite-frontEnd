import Table from "./Table";
import { DataProvider } from "./DataProvider";

const CoursesList = () => {
  const columns = ["ID", "Course Name", "Instructor", "Credits"];
  const apiUrl = "https://api.example.com/courses"; // رابط API للـ Courses

  return (
    <DataProvider>
      <Table columns={columns} apiUrl={apiUrl} />
    </DataProvider>
  );
};

export default CoursesList;
