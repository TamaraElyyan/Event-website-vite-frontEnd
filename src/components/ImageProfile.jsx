import { useState, useEffect } from "react";
import axios from "axios";
import userDefault from "../assets/PNG/user-default.png"; // Default image path

const ImageProfile = ({token, imageFilename, altText = "User" }) => {
  const [profileImage, setProfileImage] = useState(userDefault);

  useEffect(() => {
    console.log(imageFilename)
    // imageFilename='e0a5fb4f-cace-404e-b994-1d112a7111dd.png'
    // console.log(imageFilename)
    const imageName = imageFilename.split('/').pop();
    console.log(imageName)

    const fetchImage = async () => {
    //   const token = localStorage.getItem('token'); // Retrieve token from localStorage
      const imageUrl = `http://localhost:8080/api/v1/user/files/${imageName}`;
      console.log(token)
      console.log(imageUrl)

      try {
        const response = await axios.get(imageUrl, {
          headers: {
            'Authorization': `Bearer ${token}`, // Pass the Bearer token
          },
          responseType: 'blob', // Fetch the image as a Blob
        });

        // Create an object URL for the image
        const imageObjectURL = URL.createObjectURL(response.data);
        
        // Set the profile image to the fetched image URL
        setProfileImage(imageObjectURL);
      } catch (error) {
        console.error("Error fetching image:", error);
        setProfileImage(userDefault); // Set to default if image fetch fails
      }
    };

    // Fetch image if filename is provided
    if (imageFilename) {
      fetchImage();
    } else {
      setProfileImage(userDefault); // Use default image if no filename
    }
  }, [imageFilename]);

  return <img src={profileImage} alt={altText} className="w-10 h-10 rounded-full" />;
};

export default ImageProfile;
