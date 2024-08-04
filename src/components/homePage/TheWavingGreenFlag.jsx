import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

const TheWavingGreenFlag = ({ id }) => {
  return (
    <Section
      id={id}
      style={{ backgroundImage: `url('/images/Green Flag/bg-image.png')` }}
      className={`bg-cover green-bg-pos relative min-h-full`}
    >
      {/* contents  */}
      <div className="min-h-screen backdrop-brightness-[20%] px-5 md:px-20 py-[50px] md:py-[100px] xl:pt-[120px] xl:px-[200px] grid grid-rows-[min-content,1fr]">
        {/* title and subtitle  */}
        <div className="text-textColor text-center grid gap-5 h-fit">
          {/* title  */}
          <Title>
            Taking the Wrong Train to the <br className="md:hidden" /> Right
            Destination?
          </Title>

          {/* subtitle  */}
          <SubTitle>
            Let’s Analyse Where the Wrong <br className="md:hidden" /> Career is
            Taking You
          </SubTitle>
        </div>

        {/* chart container  */}
        <div className="relative w-full aspect-square mt-20 max-w-[600px] xl:max-w-[800px] place-self-center ">
          <Image
            src={"/images/Green Flag/center-image.svg"}
            alt="green flag"
            fill
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default TheWavingGreenFlag;
