import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

const WrapperWithoutSidebar = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
// Prop validation for children
WrapperWithoutSidebar.propTypes = {
  children: PropTypes.node.isRequired, // Use `.isRequired` if children should always be passed
};

export default WrapperWithoutSidebar;
