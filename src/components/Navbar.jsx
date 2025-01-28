import Search from "./Search";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="h-16 p-2 md:px-8 lg:px-10 fixed top-0 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:right-14 w-full lg:w-[76%] text-black bg-white rounded shadow-md z-50">
      <div className="flex items-center justify-between">
        <Search />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
