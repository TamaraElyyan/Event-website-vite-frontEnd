// components/AppRouter.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// Import all views directly
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";
import About from "../views/About";
import Partners from "../views/Partners";
import Contact from "../views/Contact";
import Dashboard from "../views/Dashboard";
import StudentProfile from "../views/StudentProfile";
import InstructorProfile from "../views/InstructorProfile";
import NotFound from "../views/NotFound";
import StudentsList from "../views/StudentsList";
import EventsList from "../views/EventsList";

// Layout Component with Sidebar and Navbar
const LayoutWithSidebarAndNavbar = ({ children }) => {
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

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <LayoutWithSidebarAndNavbar>
                <Dashboard />
              </LayoutWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/StudentsList"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <LayoutWithSidebarAndNavbar>
                <StudentsList />
              </LayoutWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/EventsList"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <LayoutWithSidebarAndNavbar>
                <EventsList />
              </LayoutWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/student-profile"
          element={
            <ProtectedRoute allowedRoles={["STUDENT"]}>
              <StudentProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/instructor-profile"
          element={
            <ProtectedRoute allowedRoles={["INSTRUCTOR"]}>
              <InstructorProfile />
            </ProtectedRoute>
          }
        />

        {/* Default Route for Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
