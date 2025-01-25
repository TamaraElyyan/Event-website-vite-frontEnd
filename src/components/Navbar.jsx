import Search from "./Search";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex items-center h-16 justify-between px-4 md:px-8 lg:px-12 fixed top-0 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-12 w-full lg:w-[76%] text-black bg-white rounded shadow-md z-50">
      {/* Responsive flex setup for smaller screens */}
      <div className="flex-1 flex justify-between items-center space-x-4">
        <Search />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
