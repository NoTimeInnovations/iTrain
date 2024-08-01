import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Button from "../common/Button";
import Link from "next/link";
import SubTitle from "../common/SubTitle";
import Title from "../common/Title";
import image1 from "../../../public/images/Getting to the right train the iTrain/1st image.png";
import image2 from "../../../public/images/Getting to the right train the iTrain/2nd image.jpg";
import image3 from "../../../public/images/Getting to the right train the iTrain/3rd image.jpg";

const EnteringIntoTheRightTrain = ({ id }) => {
  const cardDetails = [
    {
      image: image1,
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
      image: image2,
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
      image: image3,
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
        "bg-primary text-textColor px-5 md:px-20 py-[100px] xl:pt-[120px] xl:px-[170px] grid place-items-center"
      }
    >
      {/* title and subtitle  */}
      <div className="text-textColor text-center grid gap-5 ">
        {/* title  */}
        <Title>
          Entering into the right train, the{" "}
          <span className="text-textHoverColor">iTrain</span>
        </Title>

        {/* subtitle  */}
        <SubTitle> We Provide More Value than You Spent</SubTitle>
      </div>

      {/* cards  */}
      <div className="grid place-items-center mt-10 gap-10 lg:grid-flow-col lg:place-items-start lg:gap-5 xl:mt-32 ">
        {cardDetails.map((card, index) => (
          <div
            key={`Entering_into_card_${index}`}
            className="w-full max-w-[350px] h-[580px] md:max-w-[400px] grid grid-rows-[1fr,min-content] overflow-hidden rounded-xl border-[1px] border-[#ffffff5d]"
          >
            {/* card image  */}
            <div className="relative w-full aspect-[3/2] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                loading="lazy"
                placeholder="blur"
                className="w-full h-full object-cover"
              />
            </div>

            {/* card details  */}
            <div className="bg-secondary text-textColor p-3 relative z-10 h-[452px] mL:h-[400px] md:h-[350px] lg:h-[450px] xl:h-[405px]">
              {/* contents  */}
              <div className="grid gap-3 relative">
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
          </div>
        ))}
      </div>
    </Section>
  );
};

export default EnteringIntoTheRightTrain;
