import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import ProtectedRoute from "./ProtectedRoute";
import WrapperWithSidebarAndNavbar from "../Wrapper/WrapperWithSidebarAndNavbar";
import WrapperWithoutSidebar from "../Wrapper/WrapperWithoutSidebar";
// Importing views
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
import StudentUpdateProfile from "../views/StudentUpdateProfile";
import InstructorUpdateProfile from "../views/InstructorUpdateProfile";
import InstructorsList from "../views/InstructorsList";
import OrganizationsList from "../views/OrganizationsList";
import CoursesList from "../views/CoursesList";
import AddCourse from "../views/AddCourse";
import AddEvent from "../views/AddEvent";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Routes with Header */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />
        <Route
          path="/partners"
          element={
            <>
              <Header />
              <Partners />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
            </>
          }
        />

        {/* Routes for login and register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes with Sidebar and Navbar */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <WrapperWithSidebarAndNavbar>
                <Dashboard />
              </WrapperWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/StudentsList"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <WrapperWithSidebarAndNavbar>
                <StudentsList />
              </WrapperWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />

        <Route
          path="/OrganizationsList"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <WrapperWithSidebarAndNavbar>
                <OrganizationsList />
              </WrapperWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/InstructorsList"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <WrapperWithSidebarAndNavbar>
                <InstructorsList />
              </WrapperWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/CoursesList"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <WrapperWithSidebarAndNavbar>
                <CoursesList />
              </WrapperWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />
          <Route
          path="/AddCourse"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <WrapperWithSidebarAndNavbar>
                <AddCourse />
              </WrapperWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />

<Route
          path="/EventsList"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <WrapperWithSidebarAndNavbar>
                <EventsList />
              </WrapperWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/AddEvent"
          element={
            <ProtectedRoute allowedRoles={["SUPER_ADMIN", "ADMIN"]}>
              <WrapperWithSidebarAndNavbar>
                <AddEvent />
              </WrapperWithSidebarAndNavbar>
            </ProtectedRoute>
          }
        />
        {/* Protected Routes without Sidebar */}
        <Route
          path="/StudentProfile"
          element={
            <ProtectedRoute allowedRoles={["STUDENT"]}>
              <WrapperWithoutSidebar>
                <StudentProfile />
              </WrapperWithoutSidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/InstructorProfile"
          element={
            <ProtectedRoute allowedRoles={["INSTRUCTOR"]}>
              <WrapperWithoutSidebar>
                <InstructorProfile />
              </WrapperWithoutSidebar>
            </ProtectedRoute>
          }
        />
        <Route
          path="/StudentUpdateProfile"
          element={
            <ProtectedRoute allowedRoles={["STUDENT"]}>
              {/* <WrapperWithoutSidebar> */}
              <StudentUpdateProfile />
              {/* </WrapperWithoutSidebar> */}
            </ProtectedRoute>
          }
        />
        <Route
          path="/InstructorUpdateProfile"
          element={
            <ProtectedRoute allowedRoles={["INSTRUCTOR"]}>
              <WrapperWithoutSidebar>
                <InstructorUpdateProfile />
              </WrapperWithoutSidebar>
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
