import React from "react";
import "../headerIndex.css";

const HeaderIndexPage = () => {
  return (
    <header id="header" className="header sticky top-0">
      {/* <div className="container-fluid header-menu container-xl position-relative d-flex align-items-center"> */}
      <div class="w-full header-menu container relative flex items-center max-w-screen-xl mx-auto">

        <a href="index.html" className="logo flex items-center me-auto">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <h1 className="sitename">Mentor</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="index.html" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="courses.html">Courses</a>
            </li>
            <li>
              <a href="trainers.html">Instrcutor</a>
            </li>
            <li>
              <a href="events.html">Events</a>
            </li>
          
            <li className="dropdown">
              <a href="#">
                <span>Partners</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Student</a>
                </li>
                <li>
                  <a href="#">Instructors</a>
                </li>
                <li>
                  <a href="#">Admin</a>
                </li>
              
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="courses.html">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default HeaderIndexPage;
