import React from 'react';
import "../main.css";
import HEREOIMG from "../assets/GPJ/hero.jpg";
import ABOUTIMG from "../assets/GPJ/about.jpg";
import { FaChevronRight } from 'react-icons/fa'; 

const Main = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img src={HEREOIMG} alt="" data-aos="fade-in" />
        <div className="container mx-auto px-4 py-8">
        <h2 data-aos="fade-up" data-aos-delay="100">
            Learning Today,
            <br />
            Leading Tomorrow
          </h2>
          <p data-aos="fade-up" data-aos-delay="200">
            We are team of talented programer 
          </p>
          <div className="flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href="courses.html" className="btn-get-started">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
      <div className="max-w-screen-xl mx-auto px-4">
  <div className="flex flex-wrap gy-4">
    <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="100">
      <img src={ABOUTIMG} className="img-fluid" alt="" />
    </div>
    <div className="w-full lg:w-1/2 order-2 lg:order-1 content" data-aos="fade-up" data-aos-delay="200">
      <h3>Voluptatem dignissimos provident quasi corporis</h3>
      <p className="italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </p>
      <ul>
        <li>
          <i className="bi bi-check-circle"></i>{' '}
          <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </li>
        <li>
          <i className="bi bi-check-circle"></i>{' '}
          <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
        </li>
        <li>
          <i className="bi bi-check-circle"></i>{' '}
          <span>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
          </span>
        </li>
      </ul>
      <a href="#" className="read-more">
        <span>Read More</span>
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  </div>
</div>

      </section>

      {/* Counts Section */}
    <section id="counts" className="section counts light-background">
    <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
  <div className="flex  gap-4">

    {/* Stats Item 1 */}
    <div className="w-full lg:w-1/4 md:w-1/2">
      <div className="stats-item text-center w-full h-full">
        <span className="text-5xl font-bold text-blue-500">{96}</span>
        <p className="mt-2 text-lg text-gray-700">Students</p>
      </div>
    </div>

    {/* Stats Item 2 */}
    <div className="w-full lg:w-1/4 md:w-1/2">
      <div className="stats-item text-center w-full h-full">
        <span className="text-5xl font-bold text-blue-500">{10}</span>
        <p className="mt-2 text-lg text-gray-700">Courses</p>
      </div>
    </div>

    {/* Stats Item 3 */}
    <div className="w-full lg:w-1/4 md:w-1/2">
      <div className="stats-item text-center w-full h-full">
        <span className="text-5xl font-bold text-blue-500">{7}</span>
        <p className="mt-2 text-lg text-gray-700">Events</p>
      </div>
    </div>

    {/* Stats Item 4 */}
    <div className="w-full lg:w-1/4 md:w-1/2">
      <div className="stats-item text-center w-full h-full">
        <span className="text-5xl font-bold text-blue-500">{5}</span>
        <p className="mt-2 text-lg text-gray-700">Trainers</p>
      </div>
    </div>

  </div>
</div>

    </section>

      {/* Why Us Section */}
      <section id="why-us" className="section why-us">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 justify-between">

          {/* Why Box */}
          <div className="w-full sm:w-1/4 p-4" data-aos="fade-up" data-aos-delay="100">
            <div className="why-box p-6 bg-white border rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Why Choose Our Products?</h3>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
              <div className="text-center mt-4">
      <a href="#" className="more-btn text-blue-500 hover:underline flex items-center justify-center">
        <span>Learn More</span>
        <FaChevronRight className="ml-2" /> {/* Replaced the icon with React Icon */}
      </a>
    </div>
            </div>
          </div>

          {/* Icon Boxes */}
          <div className="flex w-full sm:w-3/4 gap-4 justify-between">
            <div className="icon-box flex flex-col items-center text-center p-6 bg-white border rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-clipboard-data text-4xl text-blue-500"></i>
              <h4 className="mt-4 font-semibold">Corporis voluptates officia eiusmod</h4>
              <p className="mt-2 text-gray-600">Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
            </div>

            <div className="icon-box flex flex-col items-center text-center p-6 bg-white border rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-gem text-4xl text-blue-500"></i>
              <h4 className="mt-4 font-semibold">Ullamco laboris ladore pan</h4>
              <p className="mt-2 text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
            </div>

            <div className="icon-box flex flex-col items-center text-center p-6 bg-white border rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-inboxes text-4xl text-blue-500"></i>
              <h4 className="mt-4 font-semibold">Labore consequatur incidid dolore</h4>
              <p className="mt-2 text-gray-600">Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* Features Section */}
      <section id="features" className="features section">
        <div className="container">
          <div className="row gy-4">
            {[
              { icon: 'bi-eye', color: '#ffbb2c', title: 'Lorem Ipsum' },
              { icon: 'bi-infinity', color: '#5578ff', title: 'Dolor Sitema' },
              { icon: 'bi-mortarboard', color: '#e80368', title: 'Sed perspiciatis' },
              { icon: 'bi-nut', color: '#e361ff', title: 'Magni Dolores' },
            ].map((item, index) => (
              <div className="col-lg-3 col-md-4" key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                <div className="features-item">
                  <i className={`bi ${item.icon}`} style={{ color: item.color }}></i>
                  <h3>
                    <a href="#" className="stretched-link">
                      {item.title}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
