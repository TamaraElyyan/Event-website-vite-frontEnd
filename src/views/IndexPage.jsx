import React, { useEffect } from "react";
// import HeaderIndexPage from "../components/HeaderIndexPage";
// import Main from "../components/Main";
// import Footer from "./Footer";
// import "../indexPage.css";

const IndexPage = () => {
  useEffect(() => {
    // Logic for handling Preloader
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none"; // Hide preloader after 2 seconds
    }, 2000);
  }, []);

  return (
    <div>
      <body className="index-page">
        {/* Header */}
        <HeaderIndexPage />

        {/* Main Content */}
        <Main />

        {/* Footer */}
        {/* <Footer /> */}

        {/* Scroll Top Button */}
        <a
          href="#"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* Preloader */}
        <div id="preloader"></div>

        {/* Vendor JS Files */}
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

        {/* Main JS File */}
        <script src="assets/js/main.js"></script>
      </body>
    </div>
  );
};

export default IndexPage;
