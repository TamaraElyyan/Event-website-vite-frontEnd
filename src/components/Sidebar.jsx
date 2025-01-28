import { useState, useEffect } from "react";
import { MdOutlineDashboard, MdSettings } from "react-icons/md";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaRegBuilding,
  FaLock,
} from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = () => {
  const [isLockUp, setLockUp] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // For toggling sidebar visibility
  const navigate = useNavigate();

  // Function to handle window resizing
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false); // Close the sidebar on small screens
    } else {
      setIsSidebarOpen(true); // Open the sidebar on larger screens
    }
  };

  useEffect(() => {
    // Initialize the sidebar state based on window size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        isSidebarOpen ? "w-60" : "w-16"
      } h-full bg-white fixed shadow-lg border-r border-gray-200 transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300">
        <h1
          className={`text-lg font-semibold text-[#8d64a3] ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <Logo className="text-[#4D2C5E] font-bold" />
        </h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-xl text-[#8d64a3]"
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <ul className="space-y-3">
          {/* Dashboard */}
          <li>
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
            >
              <MdOutlineDashboard className="text-xl" />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                Dashboard
              </span>
            </button>
          </li>

          {/* Training Section */}
          <li>
            <div
              className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg cursor-pointer"
              onClick={() => setIsTrainingOpen(!isTrainingOpen)}
            >
              <BsBook className="text-xl" />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                Trainings
              </span>
              <FiChevronDown
                className={`ml-auto transition-transform ${
                  isTrainingOpen ? "rotate-180" : ""
                } ${isSidebarOpen ? "block" : "hidden"}`}
              />
            </div>
            {isTrainingOpen && isSidebarOpen && (
              <ul className="pl-6 space-y-2">
                <li>
                  <button
                    onClick={() => navigate("/CoursesList")}
                    className="block px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
                  >
                    Courses List
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/EventsList")}
                    className="block px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
                  >
                    Events List
                  </button>
                </li>
              </ul>
            )}
          </li>

          {/* Students */}
          <li>
            <button
              onClick={() => navigate("/StudentsList")}
              className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
            >
              <FaUserGraduate className="text-xl" />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                Students
              </span>
            </button>
          </li>

          {/* Teachers */}
          <li>
            <button
              onClick={() => navigate("/InstructorsList")}
              className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
            >
              <FaChalkboardTeacher className="text-xl" />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                Instructors
              </span>
            </button>
          </li>

          {/* Organization */}
          <li>
            <button
              onClick={() => navigate("/OrganizationsList")}
              className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
            >
              <FaRegBuilding className="text-xl" />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                Organizations
              </span>
            </button>
          </li>

          {/* Documents */}
          <li>
            <button
              onClick={() => navigate("/documents")}
              className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
            >
              <HiOutlineDocumentText className="text-xl" />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                Documents
              </span>
            </button>
          </li>

          {/* Settings */}
          <li>
            <button
              onClick={() => navigate("/settings")}
              className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
            >
              <MdSettings className="text-xl" />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                Settings
              </span>
            </button>
          </li>

          {/* LockUp Section */}
          <li>
            <div
              className="flex items-center px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg cursor-pointer"
              onClick={() => setLockUp(!isLockUp)}
            >
              <FaLock className="text-xl" />
              <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>
                Lockup
              </span>
              <FiChevronDown
                className={`ml-auto transition-transform ${
                  isLockUp ? "rotate-180" : ""
                } ${isSidebarOpen ? "block" : "hidden"}`}
              />
            </div>
            {isLockUp && isSidebarOpen && (
              <ul className="pl-6 space-y-2">
                <li>
                  <button
                    onClick={() => navigate("/language")}
                    className="block px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
                  >
                    Language
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/country")}
                    className="block px-4 py-2 hover:bg-gradient-to-r from-[#8d64a3] to-[#aa85e3] hover:text-white rounded-lg"
                  >
                    Country
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
