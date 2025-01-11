import React from "react";
import "../headerIndex.css";

const HeaderIndexPage = () => {
  return (
    <header id="header" className="header sticky top-0">
      <div class="w-full header-menu container relative flex items-center max-w-screen-xl mx-auto">

        <a href="index.html" className="logo flex items-center me-auto">
        <h1 className="font-bold text-[#aa85e3] text-[30px] m-0 tracking-[1px] uppercase">
        Yalla Shabab!
</h1>

          {/* <h1 className="text-[#aa85e3] font-bold  m-0 tracking-wide uppercase">Yalla Shabab!</h1> */}
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
            <a
  href="index.html"
  className="text-gray-500 hover:text-[#aa85e3] font-medium"
  aria-current="page"
>
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

        <a 
  className="text-[var(--contrast-color)]  bg-[#925FE2] text-sm py-2 px-6 ml-8 rounded-full transition-all duration-300"
  href="courses.html"
>
  Get Started
</a>
      </div>
    </header>
  );
};

export default HeaderIndexPage;
