import { useState, useEffect } from "react";
import axios from "axios";

// Use the uploaded image as the default profile image
const userDefault = "/mnt/data/image.png";

const ImageProfile = ({ token, imageFilename, altText = "User" }) => {
  const [profileImage, setProfileImage] = useState(userDefault);

  useEffect(() => {
    const imageName = imageFilename?.split("/").pop();

    const fetchImage = async () => {
      if (!imageName) return;

      const imageUrl = `http://localhost:8080/api/v1/user/files/${imageName}`;

      try {
        const response = await axios.get(imageUrl, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the Bearer token
          },
          responseType: "blob", // Fetch the image as a Blob
        });

        // Create an object URL for the image
        const imageObjectURL = URL.createObjectURL(response.data);

        // Set the profile image to the fetched image URL
        setProfileImage(imageObjectURL);
      } catch (error) {
        console.error("Error fetching image:", error);
        setProfileImage(userDefault); // Revert to default image on failure
      }
    };

    // Fetch image if filename is provided
    if (imageFilename) {
      fetchImage();
    }
  }, [imageFilename]);

  return (
    <img src={profileImage} alt={altText} className="w-10 h-10 rounded-full" />
  );
};

export default ImageProfile;
