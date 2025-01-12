import Table from "./Table";
import { DataProvider } from "./DataProvider";

const StudentList = () => {
  const columns = ["id", "name", "phoneNumber", "jobtitle", "specialization"];
  const apiUrl = "http://localhost:8080/api/v1/event/eventList"; // Corrected API URL

  return (
    <DataProvider apiUrl={apiUrl}>
      <Table columns={columns} />
    </DataProvider>
  );
};

export default StudentList;
