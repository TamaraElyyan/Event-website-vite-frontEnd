import { useEffect, useState, useContext } from "react";
import OrganizationAPI from "../API/endpoint/Organization"; // Import organization API module
import PartnerImage from "../components/ImageProfile"; // Fixed typo
import { AuthContext } from "../Context/AuthContext"; // Ensure correct path
import PartnerDefault from "../assets/PNG/DefaultPartners.png";

const Partners = () => {
  const { auth } = useContext(AuthContext); // Access auth context

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
    <div className="max-w-full mx-auto p-8 pt-[100px]">
      <h1 className="text-4xl text-orange-500 font-bold text-center mb-2">
        Our Partners
      </h1>
      <h2 className="text-xl text-gray-600 text-center mb-2">
        Meet Our Trusted Partners
      </h2>
      <div className="w-16 h-1 bg-[#4d2c5e] mx-auto mb-6"></div>

      {partners.length === 0 ? (
        <p className="text-center text-gray-500">No partners found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} auth={auth} />
          ))}
        </div>
      )}
    </div>
  );
};

const PartnerCard = ({ partner, auth }) => {
  // Default to PartnerDefault image if partner.descriptionPicture is not provided
  const imageSource = partner.descriptionPicture
    ? partner.descriptionPicture
    : PartnerDefault;

  return (
    <div className="bg-gray-50 shadow-md rounded-lg p-4 flex flex-col items-center space-y-4">
      <PartnerImage
        token={auth?.token}
        imageFilename={imageSource}
        altText={partner.organizationName || "organizationName"}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {partner.organizationName}
      </h3>
      <p className="text-sm text-gray-600 text-center">
        {partner.description || "No description available."}
      </p>
    </div>
  );
};

export default Partners;
