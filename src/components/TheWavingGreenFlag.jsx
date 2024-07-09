import React from "react";
import Section from "./Section";
import Image from "next/image";

const ChartBox = ({
  title,
  description,
  rotate,
  boxTop,
  boxLeft,
  boxTranslate,
}) => {
  return (
    <div
      className={`absolute text-[10px] max-w-[150px] ${boxTop || "top-0"} ${
        boxLeft || "left-1/2"
      } ${boxTranslate || "-translate-x-1/2"} grid gap-2`}
    >
      {/* title  */}
      <p className="text-center">{title}</p>

      {/* description  */}
      <p>{description}</p>

      {/* arrow image  */}
      <div className="w-[170px] aspect-square absolute -top-[30%] -left-[12%]">
        <Image
          src={"/images/Green Flag/arrow.svg"}
          alt="arrow"
          fill
          className={`object-cover w-full h-full ${rotate}`}
        />
      </div>
    </div>
  );
};

const TheWavingGreenFlag = () => {
  return (
    <Section
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
        <div className="relative aspect-square w-full mt-24 lg:max-w-[800px] text-textColor">
          {/* top box  */}
          <ChartBox
            title={"What"}
            description={
              "Tailoring a Customized Course with Industry Relevancy, and Making a Solution in the Form of Learning"
            }
            rotate={""}
          />

          {/* leftBox  */}
          <ChartBox
            title={"Why"}
            description={
              "Learning is always personal as we Prioritize Individual Learning to the Knowledge fulfillment"
            }
            boxTop={'top-1/2'}
            boxLeft={''}
            boxTranslate={'-translate-y-[10%]'}
            rotate={'rotate-[117deg]'}
          />
        </div>
      </div>
    </Section>
  );
};

export default TheWavingGreenFlag;
