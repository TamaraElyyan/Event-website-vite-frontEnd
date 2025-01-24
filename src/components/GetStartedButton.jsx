import { useNavigate } from "react-router-dom";

const GetStartedButton = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/Register");
  };
  return (
    <div>
      <button
        onClick={handleRegister}
        className="px-8 py-4 bg-[#927ad4] font-medium text-[18px] text-white rounded-full hover:bg-purple-400 "
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStartedButton;
