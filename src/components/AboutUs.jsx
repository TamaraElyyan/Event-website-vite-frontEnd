import GetStartedButton from "../components/GetStartedButton";
import OfficeSpace from "../assets/PNG/office space.jpg";
import TeamCollaboration from "../assets/PNG/Team Collaboration.png";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-50 px-6 md:px-16 lg:px-24 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl">
          {/* Left Section: Text Content */}
          <div className="text-left">
            <h1 className="text-orange-500 text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
              Welcome to <span className="text-orange-500">Yalla Shabab</span>,
              Connecting Educators, Students, and Companies Globally.
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              Yalla Shabab is your go-to platform for organizing impactful
              events and courses, bringing together professors, students, and
              companies from around the world. Since its inception in 2023, our
              mission has been to bridge the gap between education and industry
              by offering exceptional opportunities for skill development,
              collaboration, and innovation.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              Through Yalla Shabab, you can join hands with leading experts,
              access exclusive learning resources, and participate in
              transformative events that shape your future. Whether you are a
              student looking to grow, a professor sharing expertise, or a
              company seeking talent, we have something for you.
            </p>
            <GetStartedButton />
          </div>

          {/* Right Section: Photos */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex justify-end">
              <img
                src={OfficeSpace}
                alt="Office Space"
                className="w-3/4 h-64 object-cover rounded-lg shadow-lg border-2 border-gray-200"
              />
            </div>

            <div className="flex justify-start">
              <img
                src={TeamCollaboration}
                alt="Team Collaboration"
                className="w-3/4 h-64 object-cover rounded-lg shadow-lg border-2 border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
