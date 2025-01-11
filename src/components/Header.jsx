import GetStartedButton from "./GetStartedButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 z-50 bg-gray-800 p-4 text-white px-6">
      <div className="flex justify-between pl-4 items-center">
        {/* Logo */}
        <Logo className="text-white" />

        <div className="space-x-4 mr-10">
          <GetStartedButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
