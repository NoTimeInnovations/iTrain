import React from "react";
import Section from "./Section";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const EnteringIntoTheRightTrain = ({ id }) => {
  const cardDetails = [
    {
      image: "/images/Getting to the right train, the iTrain/1st image.png",
      title: "The 50% Fee Category",
      description:
        "For those who are Currently in College or Recently transitioned from Student Life, or a Person preferring Online Skill-up Courses Remotely through Live Sessions over Recorded Videos, we have got you covered.",
      feeDetail: {
        textPart1: "Learn at",
        strike: "100%",
        bold: "50%",
        textPart2: "course fee",
      },
      button: {
        text: "Book a Demo",
        link: "https://wa.me/919037681744",
      },
    },
    {
      image: "/images/Getting to the right train, the iTrain/2nd image.jpg",
      title: "Housewives and Professionals",
      description:
        "All is Well, for Those Who want to Change the Track. Are You a housewife looking to restart career in IT after a break, Or a working professional in demand of learning a new skill for better career prospects?",
      feeDetail: {
        textPart1: "Enjoy our",
        strike: "",
        bold: "50%",
        textPart2: "course fee * 2 reps offer",
      },
      button: {
        text: "Book a Demo",
        link: "https://wa.me/919037681744",
      },
    },
    {
      image: "/images/Getting to the right train, the iTrain/3rd image.jpg",
      title: "The future iTrainers",
      description:
        "Are you an Ongoing Working Professional, who is profoundly skilled up in a Discipline? Someone in notice period? Someone who is no longer into full time job but still enjoys training others? ",
      feeDetail: {
        textPart1: "Get",
        strike: "",
        bold: "2/3rd",
        textPart2: "of  course fee per student",
      },
      button: {
        text: "Join Us",
        link: "https://wa.me/919037681744",
      },
    },
  ];

  return (
    <Section
      id={id}
      className={
        "bg-primary text-textColor px-5 md:px-20 py-[100px] xl:pt-[120px] xl:px-[200px] grid place-items-center"
      }
    >
      {/* title and subtitle  */}
      <div className="text-textColor text-center grid gap-5 ">
        {/* title  */}
        <p className="text-lg font-medium md:text-4xl xl:text-[32px] xl:leading-[40px]">
          Entering into the right train, the{" "}
          <span className="text-textHoverColor">iTrain</span>
        </p>

        {/* subtitle  */}
        <p className="md:text-xl xl:text-[22px] xl:leading-[28px]">
          We Provide More Value than You Spent
        </p>
      </div>

      {/* cards  */}
      <div className="grid place-items-center mt-10 gap-10 lg:grid-flow-col lg:place-items-start lg:gap-5 xl:mt-32 ">
        {cardDetails.map((card, index) => (
          <div
            key={`Entering_into_card_${index}`}
            className="w-full max-w-[350px] min-h-[450px] md:max-w-[400px] overflow-hidden rounded-xl border-[1px] border-[#ffffff5d]"
          >
            {/* card image  */}
            <div className="relative w-full aspect-[3/2] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="w-full h-full object-cover"
              />
            </div>

            {/* card details  */}
            <div className="bg-secondary text-textColor p-3 grid gap-3">
              {/* card title  */}
              <p className="text-lg md:text-xl font-medium">{card.title}</p>

              {/* card description  */}
              <p className="">{card.description}</p>

              {/* fee detail  */}
              <p className="text-sm mt-10">
                <span>{card.feeDetail.textPart1}</span>{" "}
                <span className="text-[150%] line-through">
                  {card.feeDetail.strike}
                </span>{" "}
                <span className="text-[150%] text-textHoverColor">
                  {card.feeDetail.bold}{" "}
                </span>
                <span>{card.feeDetail.textPart2}</span>
              </p>

              {/* button  */}
              <div className="flex justify-center py-5">
                <Link href={card.button.link}>
                  <Button color={"text-textHoverColor "} bgInvert={true}>
                    {card.button.text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EnteringIntoTheRightTrain;
