import Search from "./Search";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div className="flex items-center h-16 bg-purple- justify-between  fixed gap-[985px] text-black rounded">
      <Search />
      <Profile />
    </div>
  );
};

export default Navbar;
