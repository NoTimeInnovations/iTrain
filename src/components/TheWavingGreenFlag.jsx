import React from "react";
import Section from "./Section";
import Image from "next/image";

const TheWavingGreenFlag = ({ id }) => {
  return (
    <Section
      id={id}
      style={{ backgroundImage: `url('/images/Green Flag/bg-image.png')` }}
      className={`bg-cover bg-center relative `}
    >
      {/* contents  */}
      <div className="min-h-screen backdrop-brightness-[20%] px-5 md:px-20 py-[100px] xl:pt-[120px] xl:px-[200px] grid place-items-center">
        {/* title and subtitle  */}
        <div className="text-textColor text-center grid gap-5 ">
          {/* title  */}
          <p className="text-lg font-medium md:text-4xl xl:text-[32px] xl:leading-[40px]">
            Taking the Wrong Train to the Right Destination?
          </p>

          {/* subtitle  */}
          <p className="md:text-xl xl:text-[22px] xl:leading-[28px]">
            Let’s Analyse Where the Wrong Career is Taking You
          </p>
        </div>

        {/* chart container  */}
        <div className="relative w-full aspect-square mt-20 max-w-[600px] xl:max-w-[800px]">
          <Image
            src={'/images/Green Flag/center-image.svg'}
            alt="green flag"
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default TheWavingGreenFlag;
