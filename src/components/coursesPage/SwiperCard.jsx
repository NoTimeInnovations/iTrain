import React from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";

const SwiperCard = ({ content }) => {
  return (
    <div className="w-full min-h-screen text-textColor px-5 md:px-20 py-[100px] xl:px-[200px]">
      {/* titile and subtitle  */}
      <div className="place-items-center text-center grid gap-5 ">
        {/* title  */}
        <Title className={`max-w-[80%] lg:max-w-[70%]`} >{content.mainTitle}</Title>
        {/* subtitle  */}
        <SubTitle className={`max-w-[400px] lg:max-w-[70%]`}>
          {content.mainSubTitle}
        </SubTitle>
      </div>

      {/* contents  */}
      <main className="grid place-items-center mt-10 gap-5 md:gap-10 lg:grid-flow-col lg:mt-20 ">
        {/* image  */}
        <div className="relative w-[80%] aspect-square rounded-full overflow-hidden lg:w-[300px] xl:w-[500px]">
          <Image
            src={content.image}
            fill
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* title and descriptions  */}
        <div className="grid gap-8 xl:max-w-[800px]">
          {/* title and subtitle  */}
          <div className="grid place-items-center">
            {/* title  */}
            <p className="text-lg font-medium md:text-2xl">
              {content.title}
            </p>
            {/* subtitle  */}
            <p className="text-sm md:text-lg ">{content.subTitle}</p>
          </div>

          {/* descriptions  */}
          <div className="grid gap-5 xl:text-[17px]">
            {content.descriptions.map((dec, index) => (
              <p key={`${content.title}_description_${index}`}>{dec}</p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SwiperCard;
