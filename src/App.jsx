import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/index";
import { AuthProvider } from "./Context/AuthContext";
// import { DataProvider } from "./Context/DataContext"; // Import DataProvider

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    {/*<DataProvider>*/}
      {" "}
      {/* Wrap AppRouter with DataProvider as well */}
      <AppRouter />
      {/* <Header /> */}
    {/*</DataProvider>*/}
  </AuthProvider>
);
