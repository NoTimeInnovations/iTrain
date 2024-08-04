import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Title from "../common/Title";
import image1 from "../../../public/images/The Three Step Process/1st image.jpg"
import image2 from "../../../public/images/The Three Step Process/2nd image.jpg"
import image3 from "../../../public/images/The Three Step Process/3rd image.jpg"


const Card = ({ image, title }) => {
  return (
    <div className="grid gap-5 place-items-center md:gap-10 h-fit">
      {/* card image  */}
      <div className="w-[200px] md:w-[300px] lg:w-[250px] xl:w-[350px] aspect-square rounded-full overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          quality={10}
          placeholder="blur"
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
      image: image1,
      title: "Start Browsing",
    },
    {
      image: image2,
      title: "Schedule a Free Consultation",
    },
    {
      image: image3,
      title: "Enroll and Start Learning",
    },
  ];

  return (
    <Section
      id={id}
      className={
        "bg-secondary text-textColor px-5 py-[50px] md:py-[100px] xl:pt-[120px] grid grid-rows-[min-content,1fr] place-items-center"
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
