import { useNavigate } from "react-router-dom";

const GetStartedButton = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };
  return (
    <div>
      <button
        onClick={handleRegister}
        className="px-8 py-4 bg-[#4D2C5E] font-medium text-[18px] text-white rounded-full hover:bg-[#8d64a3] "
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStartedButton;
