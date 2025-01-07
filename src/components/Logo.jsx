import logo from "../assets/PNG/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center justify-start p-6  border-gray-300">
      <img src={logo} alt="logo" className="w-10 h-10" />
      {/* Replace with any icon you prefer */}
      <h1 className="text-xl font-bold ml-2 text-[#843E71]">Yalla Shabab</h1>
    </div>
  );
};

export default Logo;
