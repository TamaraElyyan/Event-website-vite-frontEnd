import { useEffect, useState } from "react";
import OrganizationAPI from "../API/endpoint/Organization"; // Import organization API module

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await OrganizationAPI.getOrganizations();
        setPartners(response.data);
      } catch (err) {
        setError("Failed to fetch partners.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) return <div className="spinner">Loading...</div>;

  if (error)
    return <div className="bg-red-100 text-red-700 p-4 rounded">{error}</div>;

  return (
    <div className="max-w-full mx-auto p-8 pt-[100px] bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-2">Our Partners</h1>
      <h2 className="text-xl text-gray-600 text-center mb-2">
        Meet Our Trusted Partners
      </h2>
      <div className="w-16 h-1 bg-[#927ad4] mx-auto mb-6"></div>

      {partners.length === 0 ? (
        <p className="text-center text-gray-500">No partners found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      )}
    </div>
  );
};

const PartnerCard = ({ partner }) => (
  <div className="bg-gray-50 shadow-md rounded-lg p-4 flex flex-col items-center">
    <img
      src={partner.logoUrl || "/default-logo.png"}
      alt={partner.organizationName}
      className="w-20 h-20 mb-4 object-contain"
    />
    <h3 className="text-lg font-semibold text-gray-800">
      {partner.organizationName}
    </h3>
    <p className="text-sm text-gray-600 mt-2 text-center">
      {partner.description || "No description available."}
    </p>
  </div>
);

export default Partners;
