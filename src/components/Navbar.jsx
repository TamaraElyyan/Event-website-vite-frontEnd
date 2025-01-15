import Search from "./Search";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex items-center h-16  justify-between px-4 md:px-8 lg:px-18 fixed top-0 lg:right-12 md:right-5 md:w-[80%] lg:w-[77%] text-black rounded shadow-md z-50">
      {/* Responsive flex setup for smaller screens */}
      <div className="flex-1 flex justify-between items-center space-x-4">
        <Search />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
