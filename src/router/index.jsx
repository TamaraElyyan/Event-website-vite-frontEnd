import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import IndexPage from "../views/IndexPage";

import Dashboard from "../views/Dashboard";
import Events from "../views/Events";
import Home from "../views/Home";
// import NotFound from "../views/NotFound";
import About from "../views/About";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<IndexPage/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Fallback Route for 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
