import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

const WrapperWithSidebarAndNavbar = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};
// Prop validation for children
WrapperWithSidebarAndNavbar.propTypes = {
  children: PropTypes.node.isRequired, // Use `.isRequired` if children should always be passed
};

export default WrapperWithSidebarAndNavbar;
