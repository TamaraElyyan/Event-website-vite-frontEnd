import { useEffect, useState } from "react";
import axiosInstance from "../API/axios/axiosInstance";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";
import AddButton from "../components/AddButton"; // Assuming AddButton is a reusable component

const OrganizationsList = () => {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To navigate to add organization page

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axiosInstance.get(
          "/organization/organizationList"
        );
        if (Array.isArray(response.data)) {
          setOrganizations(response.data);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (err) {
        console.error("Fetch error:", err.response || err.message);
        setError("Failed to fetch Organizations. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizations();
  }, []);

  // Handle edit action
  const handleEdit = (organization) => {
    console.log("Edit organization:", organization);
    // Add logic to handle edit, e.g., open a modal with the organization's details
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      console.log("Deleting organization with ID:", id);
      await axiosInstance.delete(`organization/delete/${id}`);
      setOrganizations(
        organizations.filter((organization) => organization.id !== id)
      );
    } catch (err) {
      console.error("Delete error:", err.response || err.message);
      setError("Failed to delete organization. Please try again later.");
    }
  };

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "organizationName" },
    { header: "Email", accessor: "contactEmail" },
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
        {/* Add Organization Button */}
        <div className="flex justify-end mt-8">
          <AddButton label="Organization" path="/addOrganization" />
        </div>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Organizations List</h2>

        <Table
          columns={columns}
          data={organizations}
          onEdit={handleEdit} // Pass handleEdit function
          onDelete={handleDelete} // Pass handleDelete function
        />
      </div>
    </div>
  );
};

export default OrganizationsList;
