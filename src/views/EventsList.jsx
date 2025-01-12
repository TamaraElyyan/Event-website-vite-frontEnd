import Table from "./Table";
import { DataProvider } from "./DataProvider";

const EventsList = () => {
  const columns = ["ID", "Event Name", "Date", "Location"];
  const apiUrl = "https://api.example.com/events"; // رابط API للـ Events

  return (
    <DataProvider>
      <Table columns={columns} apiUrl={apiUrl} />
    </DataProvider>
  );
};

export default EventsList;
