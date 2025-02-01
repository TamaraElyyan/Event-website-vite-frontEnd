import { useState, useEffect } from "react";
import axios from "axios";

const ImageProfile = ({
  token,
  imageFilename,
  altText = "Image",
  defaultImage = "/src/assets/PNG/OBJECT1Home.png",
  size = 40,
}) => {
  const [imageSrc, setImageSrc] = useState(defaultImage);

  useEffect(() => {
    const fetchImage = async () => {
      if (!imageFilename) return;

      const imageName = imageFilename?.split("/").pop();
      const imageUrl = `http://localhost:8080/api/v1/user/files/${imageName}`;

      try {
        const response = await axios.get(imageUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        });

        const imageObjectURL = URL.createObjectURL(response.data);
        setImageSrc(imageObjectURL);
      } catch (error) {
        // console.error("Error fetching image:", error);
        setImageSrc(defaultImage);
        console.log(imageSrc)
      }
    };

    fetchImage();
  }, [imageFilename]);

  return (
    <img
      src={imageSrc || Ellipse}
      alt={altText}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
};

export default ImageProfile;
