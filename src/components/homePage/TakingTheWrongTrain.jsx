import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import image1 from "../../../public/images/Taking the Wrong Train to the Right Destination/1st image.jpg";
import image2 from "../../../public/images/Taking the Wrong Train to the Right Destination/2nd image.jpg";
import image3 from "../../../public/images/Taking the Wrong Train to the Right Destination/3rd image.jpg";

const TakingTheWrongTrain = ({ id }) => {
  const cardDetails = [
    {
      image: image1,
      title: "The Never-Ending 9-6 Loop",
      description:
        "How long will this over-stressed, low-paid,  lay-off threatening job keep marking your attendance? You were skilled, but its relevance is in the past tense as of 2024! Yes, it can be relevant once you learned, But Now Your Next Action should be to Pull the trigger before it inch close to the dead-end.",
    },
    {
      image: image2,
      title: "A Generation of the Generators",
      description:
        "An Upcoming News Headline of Creating an AI-Generated Human Clone is Days Near! AI isn't taking over, it's creating new opportunities for those who can move together with the Digital World. Just as Copywriters became Prompt Engineers, the Right Skills will Fill Up Your Pockets! ",
    },
    {
      image: image3,
      title: "The World is Online",
      description:
        "From the Dawn to Dusk, Even your First and the Last Daily Routines are Digital or Online “Empowered”. It’s all powered by Digital Screens. Tech industry is Booming as all aspirants strive to upgrade everyday, just as any of your Mobile Application avoiding to get Uninstalled.",
    },
  ];

  return (
    <Section
      id={id}
      className={
        "bg-primary px-5 md:px-20 lg:px-12 py-[100px] xl:pt-[120px] xl:px-[200px] grid place-items-center "
      }
    >
      {/* title and subtitle  */}
      <div className="text-textColor text-center grid gap-5 ">
        {/* title  */}
        <Title>
          Taking the Wrong Train to the <br className="md:hidden" /> Right&nbsp;Destination?
        </Title>
        {/* subtitle  */}
        <SubTitle>
          {" "}
          Let’s Analyse Where the Wrong <br className="md:hidden" /> Career is
          Taking You
        </SubTitle>
      </div>

      {/* cards  */}
      <div className="grid place-items-center mt-10 gap-10 lg:grid-flow-col lg:place-items-start lg:gap-5 lg:mt-20 xl:mt-32 ">
        {cardDetails.map((card, index) => (
          <div
            key={`Taking_the_wrong_way_card_${index}`}
            className="w-full max-w-[350px] h-[450px] md:max-w-[400px] grid grid-rows-[1fr,min-content] overflow-hidden rounded-xl border-[1px] border-[#ffffff5d]"
          >
            {/* card image  */}
            <div className="relative w-full aspect-[3/2] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                placeholder="blur"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* card details  */}
            <div className="bg-secondary text-textColor p-3 z-10 h-[320px] mL:h-[250px] lg:h-[330px]  xl:h-[340px] xxl:h-[270px]">
              {/* title and desc  */}
              <div className="grid gap-3 relative">
                {/* card title  */}
                <p className="text-lg md:text-xl font-medium">{card.title}</p>

                {/* card description  */}
                <p className="text-[15px] lg:text-[16px]">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TakingTheWrongTrain;
