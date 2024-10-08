import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Title from "../common/Title";
import image1 from "../../../public/images/The Door Opens to Those Who Knock/1st image.jpg"
import image2 from "../../../public/images/The Door Opens to Those Who Knock/2nd image.jpg"
import image3 from "../../../public/images/The Door Opens to Those Who Knock/3rd image.jpg"
import image4 from "../../../public/images/The Door Opens to Those Who Knock/4th image.jpg"
import image5 from "../../../public/images/The Door Opens to Those Who Knock/5th image.jpg"

const DoorOpensToThoseWhoKnock = ({ id }) => {
  const cardDetails = [
    {
      image: image1,
      title: "Your Digital Classroom",
      description:
        "iTrain Technologies offers a comprehensive library of the high income skill courses in the most-demanded skills of 2024 just to keep you Super Relevant. All courses are accessible from the comfort of your home or your favorite coffee shop!",
    },
    {
      image: image2,
      title: "Expert Trainers & Real-World Experience",
      description:
        "Rome wasn’t Built is a Day, So as Experience! Our Professional faculty priorities practical knowledge over theoretical lessons, skyrocketing your learning process.",
    },
    {
      image: image3,
      title: "Flexible Learning, Affordable Rates",
      description:
        "Learning is always our first Priority! Learn at your own pace, with flexible scheduling and financing options to fit your budget.",
    },
    {
      image: image4,
      title: "Join the Room of Passion & Innovation",
      description:
        "Connect with fellow learners who are industry updated, and join the network with industry professionals, to create a support system for your tech journey.",
    },
    {
      image: image5,
      title: "Start Earning After Certification",
      description:
        "Learning is always our first Priority! Learn at your own pace, with flexible scheduling and financing options to fit your budget.",
    },
  ];

  return (
    <Section
      id={id}
      className={
        "bg-[#101417] px-5 md:px-20 py-[50px] md:py-[100px] xl:pt-[120px] xl:px-[200px] text-textColor"
      }
    >
      {/* title  */}
      <Title> The Door Opens to Those Who Knock! </Title>

      {/* cards  */}
      <div className="mt-10 grid gap-10 place-items-center lg:mt-20">
        {cardDetails.map((card, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={`Door_opens_card_${index}`}
              className="bg-primary rounded-full overflow-hidden grid gap-5 max-w-[345px] lg:max-w-full lg:grid-flow-col lg:place-items-center xl:max-w-[80%] xl:gap-10"
            >
              {/* card image  */}
              <div className="relative w-full lg:w-[330px] aspect-square rounded-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  loading="lazy"
                  quality={10}
                  placeholder="blur"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* card details  */}
              <div
                className={`px-5 pb-24 grid gap-3 lg:items-center lg:px-20 lg:pb-0 ${
                  !isEven && "lg:-order-1"
                }`}
              >
                {/* card title  */}
                <p className="text-lg md:text-xl font-medium">{card.title}</p>

                {/* card description  */}
                <p className="">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default DoorOpensToThoseWhoKnock;
