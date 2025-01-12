import Table from "./Table";
import { DataProvider } from "./DataProvider";

const StudentList = () => {
  const columns = ["ID", "Name", "phone", "Email"];
  const apiUrl = "https://api.example.com/students"; // رابط API للـ Students

  return (
    <DataProvider>
      <Table columns={columns} apiUrl={apiUrl} />
    </DataProvider>
  );
};

export default StudentList;
