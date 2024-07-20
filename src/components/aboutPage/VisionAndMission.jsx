import React from "react";
import Section from "../common/Section";
import Title from "../common/Title";

const VisionAndMission = () => {
  const contents = [
    {
      title: "Vision",
      desc: "A World where Learning knows no bounds, and every Individual is Skilled to Thrive with the Renaissance of Knowledge.",
    },
    {
      title: "Mission",
      desc: "To Revolutionize Learning by Creating a Universe of Innovative Educational Opportunities Digitally, that Empower Individuals to Shape a Better Tomorrow",
    },
  ];

  return (
    <Section
      style={{
        backgroundImage: `url('/images/Mission and Vision/Mission and Vision.png')`,
      }}
      className={`bg-cover bg-center min-h-auto`}
    >
      {/* contents  */}
      <div className="min-h-screen bg-secondary bg-opacity-50 text-textColor px-5 md:px-20 py-[100px] xl:px-[200px] grid grid-rows-[min-content,1fr]">
        {/* title  */}
        <Title> Vision and Mission</Title>

        {/* points  */}
        <div className="grid place-items-center gap-10">
          {contents.map((c, index) => (
            <div
              key={`about_page_${index == 0 ? "vision" : "mission"}`}
              className="grid place-items-center gap-5 text-center max-w-[700px] "
            >
              <p className="font-medium md:text-xl lg:text-4xl">{c.title}</p>
              <p className="md:text-lg lg:text-xl">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default VisionAndMission;
