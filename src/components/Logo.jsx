import { useNavigate } from "react-router-dom";
import logo from "../assets/PNG/logo.png";

const Logo = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div
      className="flex items-center justify-start p-2 border-gray-300 cursor-pointer"
      onClick={handleLogoClick}
    >
      <img src={logo} alt="logo" className="w-10 h-10" />
      <h1 className={`text-xl font-bold ml-2 ${className}`}>Yalla Shabab</h1>
    </div>
  );
};

export default Logo;
