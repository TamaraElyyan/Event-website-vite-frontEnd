import Togther from "../assets/PNG/hero2.jpeg";

import GetStartedButton from "./GetStartedButton";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-8 overflow-x-hidden"
      style={{
        backgroundImage: `url(${Togther})`, // Use Togther as background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* التخطيط الرئيسي */}
      <div className="container mx-auto flex flex-col justify-center items-center h-full px-6 lg:px-12">
        {/* تخطيط عمودين */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center w-full">
          {/* العمود الأيسر - النصوص */}
          <div className="lg:w-1/2 text-center lg:text-left p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Learn New Skills, Achieve Your Goals: Courses for Every Learner
            </h1>
            <p className="text-white text-lg mb-8">
              Please register to be a part of the event.
            </p>
            <GetStartedButton />
          </div>

          {/* العمود الأيمن - الصور */}
          <div className="lg:w-1/2 relative flex justify-center items-center mt-10 lg:mt-0">
            {/* الصورة الرئيسية */}
            {/* <div className="relative rounded-full border-2 border-purple-500 bg-purple-500">
              <img
                src={Togther}
                alt="Hero Image"
                className="w-80 h-80 mx-auto rounded-full md:w-96 md:h-96"
              /> */}

            {/* الصور الصغيرة حول الصورة الرئيسية */}
            {/* <div className="absolute top-[-20px] left-[-40px] w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={icon1}
                  alt="Icon"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-[-20px] right-[-40px] w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={icon2}
                  alt="Icon"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div> */}

            {/* الصور الإضافية في الجانبين */}
            {/* <div className="absolute top-[60px] left-[-40px] transform -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <img
                src={icon3}
                alt="Icon"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="absolute bottom-[60px] right-[-40px] transform translate-y-1/2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <img
                src={icon4}
                alt="Icon"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
