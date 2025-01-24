import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GetStartedButton from "./GetStartedButton";
import HeroImage1 from "../assets/PNG/hero2.jpeg"; // Replace with your actual paths
import HeroImage2 from "../assets/PNG/hero3.png";
import HeroImage3 from "../assets/PNG/hero4.png.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden">
      {/* Swiper Background */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              src={HeroImage1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={HeroImage2}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={HeroImage3}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center h-full px-6 lg:px-12 bg-black bg-opacity-50">
        <div className="flex flex-col lg:flex-row items-center lg:items-center w-full">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Learn New Skills, Achieve Your Goals: Courses for Every Learner
            </h1>
            <p className="text-white text-lg mb-8">
              Please register to be a part of the event.
            </p>
            <GetStartedButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
