import { useState } from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaRegBuilding,
  FaChevronRight,
  FaReact,
  FaGlobeAmericas,
} from "react-icons/fa";
import {
  MdSettings,
  MdOutlineDashboard,
  // MdAdminPanelSettings,
} from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi"; // Icon for Lookup Tables
import Logo from "./Logo";

const Sidebar = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false); // State for toggling Admin section
  const [isTrainingOpen, setIsTrainingOpen] = useState(false); // State for toggling Training Course section
  const [isAuthOpen, setIsAuthOpen] = useState(false); // State for toggling Authentication section

  return (
    <div className="h-screen w-64 bg-gray-100 fixed left-0 top-0 shadow-md overflow-y-auto">
      <Logo />
      {/* Menu */}
      <nav>
        <ul>
          {/* Dashboard */}
          {/* <li>
            <a
              href="#"
              className="flex items-center px-3 py-3 text-gray-700 hover:bg-gray-200"
            >
              <MdOutlineDashboard className="text-xl" />
              <span className="ml-3">Dashboard</span>
            </a>
          </li> */}

          {/* Admin Section */}
          <li>
            <div
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 cursor-pointer"
              onClick={() => setIsAdminOpen(!isAdminOpen)}
            >
              <MdOutlineDashboard className="text-xl" />
              <span className="ml-3">Dashboard</span>
              <FaChevronRight
                className={`ml-auto transform transition-transform ${
                  isAdminOpen ? "rotate-90" : ""
                }`}
              />
            </div>
            {isAdminOpen && (
              <ul className="pl-10 text-gray-700">
                <li>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                    Admin Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                    Student Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                    Teacher Dashboard
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Components Section */}
          <li className="mt-2">
            <div className="flex items-center px-4 py-3 text-sm font-bold text-gray-600">
              <div className="flex-grow border-t border-gray-300 mr-2"></div>
              Components
              <div className="flex-grow border-t border-gray-300 ml-2"></div>
            </div>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200"
                >
                  <FaUserGraduate className="text-xl" />
                  <span className="ml-3">Students</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200"
                >
                  <FaChalkboardTeacher className="text-xl" />
                  <span className="ml-3">Teachers</span>
                </a>
              </li>
              {/* Training Course Section */}
              <li>
                <div
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setIsTrainingOpen(!isTrainingOpen)}
                >
                  <BsBook className="text-xl" />
                  <span className="ml-3">Training Course</span>
                  <FaChevronRight
                    className={`ml-auto transform transition-transform ${
                      isTrainingOpen ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {isTrainingOpen && (
                  <ul className="pl-10 text-gray-700">
                    <li>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                        Courses List
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                        Events List
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200"
                >
                  <FaRegBuilding className="text-xl" />
                  <span className="ml-3">Organization</span>
                </a>
              </li>
            </ul>
          </li>

          {/* Supports & Settings */}
          <li className="mt-2">
            <div className="flex items-center px-4 py-3 text-sm font-bold text-gray-600">
              <div className="flex-grow border-t border-gray-300 mr-2"></div>
              Supports & Settings
              <div className="flex-grow border-t border-gray-300 ml-2"></div>
            </div>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200"
                >
                  <MdSettings className="text-xl" />
                  <span className="ml-3">Account Settings</span>
                </a>
              </li>
              {/* Authentication Section */}
              <li>
                <div
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 cursor-pointer"
                  onClick={() => setIsAuthOpen(!isAuthOpen)}
                >
                  <BsBook className="text-xl" />
                  <span className="ml-3">Authentication</span>
                  <FaChevronRight
                    className={`ml-auto transform transition-transform ${
                      isAuthOpen ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {isAuthOpen && (
                  <ul className="pl-10 text-gray-700">
                    <li>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                        Register
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        <span className="w-2 h-2 bg-gray-700 rounded-full mr-2"></span>
                        Forget Password
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </li>

          {/* Lookup Tables */}
          <li className="mt-2">
            <div className="flex items-center px-4  text-sm font-bold text-gray-600">
              <div className="flex-grow border-t border-gray-300 mr-2"></div>
              Lookup Tables
              <div className="flex-grow border-t border-gray-300 ml-2"></div>
            </div>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200"
                >
                  <FaGlobeAmericas className="text-xl" />
                  <span className="ml-3">City</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200"
                >
                  <HiOutlineDocumentText className="text-xl" />
                  <span className="ml-3">Language</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
