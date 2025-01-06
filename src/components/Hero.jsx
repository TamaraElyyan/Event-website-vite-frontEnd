import { useState } from "react";
import { Link } from "react-router-dom"; // لإضافة التنقل بين الصفحات
import Togther from "../assets/PNG/Hero.jpg";
import icon1 from "../assets/PNG/courseIcon1.jpg";
import icon2 from "../assets/PNG/courseIcon2.jpg";
import icon3 from "../assets/PNG/courseIcon3.jpg";
import icon4 from "../assets/PNG/courseIcon4.jpg";

const Hero = () => {
  const [buttonText, setButtonText] = useState("Register Now");

  // التبديل بين النصوص في الزر بناءً على حاجة المستخدم
  const toggleButtonText = () => {
    setButtonText((prevText) =>
      prevText === "Register Now" ? "Login" : "Register Now"
    );
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center mx-16 justify-center px-4">
      {/* التخطيط الرئيسي */}
      <div className="container mx-auto px-6 lg:px-12 flex flex-col justify-center items-center h-full">
        {/* تخطيط عمودين */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center">
          {/* العمود الأيسر - النصوص */}
          <div className="lg:w-1/2 text-center lg:text-left p-6">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Learn New Skills, Achieve Your Goals: Courses for Every Learner
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Please register to be a part of the event.
            </p>
            {/* زر التسجيل أو الدخول */}
            <Link to={buttonText === "Register Now" ? "/signup" : "/login"}>
              <button
                className="px-8 py-4 bg-[#843E71] text-white text-lg rounded hover:bg-[#ca8eba]"
                onClick={toggleButtonText}
              >
                {buttonText}
              </button>
            </Link>
          </div>

          {/* العمود الأيمن - الصور */}
          <div className="lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0">
            {/* الصورة الرئيسية */}
            <div className="relative">
              <img
                src={Togther}
                alt="Dental Professional"
                className="w-96 h-96 mx-auto rounded-full border-4 border-[#843E71]"
              />

              {/* الصور الصغيرة حول الصورة الرئيسية */}
              <div className="absolute top-[-30px] left-[-50px] w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={icon1}
                  alt="Icon"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-[-30px] right-[-50px] w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={icon2}
                  alt="Icon"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>

            {/* الصور الإضافية في الجانبين */}
            <div className="absolute top-1/4 left-[10%] transform -translate-y-1/2 w-14 h-14 bg-pink-200 rounded-full flex items-center justify-center shadow-lg">
              <img
                src={icon3}
                alt="Icon"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="absolute bottom-1/4 right-[10%] transform translate-y-1/2 w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center shadow-lg">
              <img
                src={icon4}
                alt="Icon"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
