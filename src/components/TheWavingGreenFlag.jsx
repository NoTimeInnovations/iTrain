import React from "react";
import Section from "./Section";
import Image from "next/image";

const TheWavingGreenFlag = () => {
  return (
    <Section
      style={{ backgroundImage: `url('/images/Green Flag/bg-image.png')` }}
      className={`bg-cover bg-center relative`}
    >

      {/* contents  */}
      <div className="absolute top-0 left-0 w-ful h-full">


      </div>


    </Section>
  );
};

export default TheWavingGreenFlag;
