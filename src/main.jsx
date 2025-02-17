import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";

import AppRouter from "./Routes/AppRouter";
import { AuthProvider } from "./Context/AuthContext";
// import DataProvider from "./Context/DataContext"; // Import DataProvider

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRouter />
    {/*<DataProvider>*/}
    {/*  */}
    {/*</DataProvider>*/}
  </AuthProvider>
);
