const Benefits = () => {
  const benefits = [
    {
      number: "01",
      title: "Global Collaboration",
      description:
        "Our platform fosters collaboration between professors, students, and organizations, bridging knowledge and opportunity.",
    },
    {
      number: "02",
      title: "Cost-Effective Learning",
      description:
        "Reduce costs by leveraging online courses and events that require minimal resources, while ensuring impactful learning.",
    },
    {
      number: "03",
      title: "Customized Training",
      description:
        "Our platform offers tailored training and events to meet the diverse needs of students and professionals.",
    },
    {
      number: "04",
      title: "Affordable Access",
      description:
        "We provide affordable solutions for both learning and event management, ensuring that quality education is accessible to all.",
    },
    {
      number: "05",
      title: "High Satisfaction",
      description:
        "Our focus is on delivering a satisfying learning experience that meets the goals of both students and instructors.",
    },
    {
      number: "06",
      title: "Interactive Materials",
      description:
        "We provide multimedia resources to create engaging and interactive training experiences for better learning retention.",
    },
  ];

  return (
    <div className="bg-gray-50 px-6 md:px-16 lg:px-24 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-orange-500 text-4xl  md:text-3xl font-bold mb-4">
          Our Benefits
        </h2>
        <h3 className="text-black text-3xl md:text-4xl font-semibold mb-6">
          By Joining Our Platform, <br /> You Can Avail a Lot of Benefits.
        </h3>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
          Join us to experience a unique platform that connects instructors,
          students, and organizations to enhance learning and career growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg text-center"
          >
            <div className="text-[#4d2c5e] text-4xl font-bold mb-2">
              {benefit.number}
            </div>
            <h4 className="text-black text-xl font-semibold mb-3">
              {benefit.title}
            </h4>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
