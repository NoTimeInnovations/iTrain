import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Title from "../common/Title";

const Card = ({ image, title }) => {
  return (
    <div className="grid gap-5 place-items-center md:gap-10 h-fit">
      {/* card image  */}
      <div className="w-[200px] md:w-[300px] lg:w-[250px] xl:w-[350px] aspect-square rounded-full overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* title  */}
      <p className="font-medium md:text-xl text-center">{title}</p>
    </div>
  );
};

const TheThreeStepProcess = ({ id }) => {
  const cardDetails = [
    {
      image: "/images/The Three Step Process/1st image.jpg",
      title: "Start Browsing",
    },
    {
      image: "/images/The Three Step Process/2nd image.jpg",
      title: "Schedule a Free Consultation",
    },
    {
      image: "/images/The Three Step Process/3rd image.jpg",
      title: "Enroll and Start Learning",
    },
  ];

  return (
    <Section
      id={id}
      className={
        "bg-secondary text-textColor px-5 py-[100px] xl:pt-[120px] grid grid-rows-[min-content,1fr] place-items-center"
      }
    >
      {/* title  */}
      <Title>The Three Step Process</Title>

      {/* cards container  */}
      <div className="grid gap-10 md:gap-20 mt-10 lg:grid-flow-col lg:gap-10 xl:gap-24">
        {cardDetails.map((card, index) => (
          <Card
            key={`the_three_step_process_card_${index}`}
            image={card.image}
            title={card.title}
          />
        ))}
      </div>
    </Section>
  );
};

export default TheThreeStepProcess;
