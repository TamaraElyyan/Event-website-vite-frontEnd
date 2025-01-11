import React from 'react';
import "../main.css";
import HEREOIMG from "../assets/GPJ/hero.jpg";
import ABOUTIMG from "../assets/GPJ/about.jpg"
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
            We are team of talented designers making websites with Bootstrap
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
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="why-box">
                <h3>Why Choose Our Products?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia
                  eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                </p>
                <div className="text-center">
                  <a href="#" className="more-btn">
                    <span>Learn More</span> <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">
                {[
                  {
                    icon: 'bi-clipboard-data',
                    title: 'Corporis voluptates officia eiusmod',
                    description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
                  },
                  {
                    icon: 'bi-gem',
                    title: 'Ullamco laboris ladore pan',
                    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
                  },
                  {
                    icon: 'bi-inboxes',
                    title: 'Labore consequatur incidid dolore',
                    description: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
                  },
                ].map((item, index) => (
                  <div className="col-xl-4" key={index}>
                    <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                      <i className={`bi ${item.icon}`}></i>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
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
