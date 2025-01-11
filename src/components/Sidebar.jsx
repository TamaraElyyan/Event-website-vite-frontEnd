import { useState } from "react";
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
import Logo from "./Logo";

const Sidebar = () => {
  const [isLockUp, setLockUp] = useState(false); // Toggle LockUp Section
  const [isTrainingOpen, setIsTrainingOpen] = useState(false); // Toggle Training Section

  return (
    <div className="h-screen w-64 text-[#aa85e3] fixed overflow-auto shadow-lg border-2 border-gradient-to-r from-[#925fe2] to-[#aa85e3] bg-white">
      {/* Logo */}
      <div className="border-[#aa85e3] border-b-2 px-6 py-4 bg-white">
        <Logo className="text-[#aa85e3]" />
      </div>
      {/* Navigation */}
      <nav className="mt-6 mb-4">
        <ul className="space-y-3">
          {/* Dashboard */}
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-3 hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-xl transition duration-300"
            >
              <MdOutlineDashboard className="text-xl" />
              <span className="ml-4">Dashboard</span>
            </a>
          </li>

          {/* Training Section */}
          <li>
            <div
              className="flex items-center px-5 py-3 hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-xl cursor-pointer transition duration-300"
              onClick={() => setIsTrainingOpen(!isTrainingOpen)}
            >
              <BsBook className="text-xl" />
              <span className="ml-4">Training</span>
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
                    className="block px-4 py-2 bg-white hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-lg transition duration-300"
                  >
                    Courses List
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 bg-white hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-lg transition duration-300"
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
              className="flex items-center px-5 py-3 hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-xl transition duration-300"
            >
              <FaUserGraduate className="text-xl" />
              <span className="ml-4">Students</span>
            </a>
          </li>

          {/* Teachers */}
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-3 hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-xl transition duration-300"
            >
              <FaChalkboardTeacher className="text-xl" />
              <span className="ml-4">Teachers</span>
            </a>
          </li>

          {/* Organization */}
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-3 hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-xl transition duration-300"
            >
              <FaRegBuilding className="text-xl" />
              <span className="ml-4">Organization</span>
            </a>
          </li>

          {/* Documents */}
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-3 hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-xl transition duration-300"
            >
              <HiOutlineDocumentText className="text-xl" />
              <span className="ml-4">Documents</span>
            </a>
          </li>

          {/* Settings */}
          <li>
            <a
              href="#"
              className="flex items-center px-5 py-3 hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-xl transition duration-300"
            >
              <MdSettings className="text-xl" />
              <span className="ml-4">Settings</span>
            </a>
          </li>

          {/* LockUp Section */}
          <li>
            <div
              className="flex items-center px-5 py-3 hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-xl cursor-pointer transition duration-300"
              onClick={() => setLockUp(!isLockUp)}
            >
              <FaLock className="text-xl" />
              <span className="ml-4">Lockup</span>
              <FiChevronDown
                className={`ml-auto transform transition-transform ${
                  isLockUp ? "rotate-180" : ""
                }`}
              />
            </div>
            {isLockUp && (
              <ul className="pl-10 mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 bg-white hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-lg transition duration-300"
                  >
                    Language
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 bg-white hover:bg-gradient-to-r from-[#925fe2] to-[#aa85e3] hover:text-white rounded-lg transition duration-300"
                  >
                    Country
                  </a>
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
