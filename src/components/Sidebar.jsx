import { useState } from "react";
import {
  MdOutlineDashboard,
  MdOutlineAdminPanelSettings,
  MdSettings,
} from "react-icons/md";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaRegBuilding,
} from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import Logo from "./Logo";

const Sidebar = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false); // Toggle Admin Section
  const [isTrainingOpen, setIsTrainingOpen] = useState(false); // Toggle Training Section

  return (
    <div className="h-screen w-64 bg-purple-500 text-white fixed overflow-auto  shadow-lg border-y-2 border-white rounded-3xl">
      {/* Logo */}
      <div className=" border-white border-b-2 px-6 py-2 rounded-t-3xl bg-purple-500">
        <Logo className="text-white" />
      </div>

      {/* Navigation */}
      <nav className="mt-2">
        <ul className="space-y-2">
          {/* Dashboard */}
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 hover:bg-purple-600 rounded-xl transition"
            >
              <MdOutlineDashboard className="text-xl" />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>

          {/* Admin Section */}
          <li>
            <div
              className="flex items-center px-4 py-3 hover:bg-purple-600 rounded-xl cursor-pointer transition"
              onClick={() => setIsAdminOpen(!isAdminOpen)}
            >
              <MdOutlineAdminPanelSettings className="text-xl" />
              <span className="ml-3">Admin Section</span>
              <FiChevronDown
                className={`ml-auto transform transition-transform ${
                  isAdminOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isAdminOpen && (
              <ul className="pl-10 mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
                  >
                    Admin Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
                  >
                    Student Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
                  >
                    Teacher Dashboard
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Training Section */}
          <li>
            <div
              className="flex items-center px-4 py-3 hover:bg-purple-600 rounded-xl cursor-pointer transition"
              onClick={() => setIsTrainingOpen(!isTrainingOpen)}
            >
              <BsBook className="text-xl" />
              <span className="ml-3">Training</span>
              <FiChevronDown
                className={`ml-auto transform transition-transform ${
                  isTrainingOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isTrainingOpen && (
              <ul className="pl-10 mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
                  >
                    Courses List
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 bg-purple-600 rounded-lg hover:bg-purple-500 transition"
                  >
                    Events List
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Students */}
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 hover:bg-purple-600 rounded-xl transition"
            >
              <FaUserGraduate className="text-xl" />
              <span className="ml-3">Students</span>
            </a>
          </li>

          {/* Teachers */}
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 hover:bg-purple-600 rounded-xl transition"
            >
              <FaChalkboardTeacher className="text-xl" />
              <span className="ml-3">Teachers</span>
            </a>
          </li>

          {/* Organization */}
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 hover:bg-purple-600 rounded-xl transition"
            >
              <FaRegBuilding className="text-xl" />
              <span className="ml-3">Organization</span>
            </a>
          </li>

          {/* Documents */}
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 hover:bg-purple-600 rounded-xl transition"
            >
              <HiOutlineDocumentText className="text-xl" />
              <span className="ml-3">Documents</span>
            </a>
          </li>

          {/* Settings */}
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-3 mt-1 hover:bg-purple-600 rounded-xl transition"
            >
              <MdSettings className="text-xl" />
              <span className="ml-3">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
