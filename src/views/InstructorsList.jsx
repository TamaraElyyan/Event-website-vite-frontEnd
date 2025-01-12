import Table from "./Table";
import { DataProvider } from "./DataProvider";

const InstructorsList = () => {
  const columns = ["ID", "Name", "Department", "Email"];
  const apiUrl = "https://api.example.com/instructors";

  return (
    <DataProvider>
      <Table columns={columns} apiUrl={apiUrl} />
    </DataProvider>
  );
};

export default InstructorsList;
