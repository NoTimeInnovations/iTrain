import React from "react";
import Header from "./Header";
import Section from "./Section";
import Button from "./Button";

const HeroSection = () => {
  return (
    <Section
      className={`grid grid-rows-[min-content,1fr] bg-[url('/images/HeroSection/image.png')] bg-cover`}
    >
      <Header />

      {/* main contents  */}
      <div className="backdrop-brightness-[40%] px-[200px] pt-[275px] flex flex-col gap-5">
        {/* center text  */}
        <p className="text-[57px] leading-[64px] tracking-[-0.25%] text-textColor">
          For those in the Wrong <br /> Career Track, We are Here... <br />
          Until You reach the <br /> Right Destination…! 
        </p>

        {/* button  */}
        <Button
          bg={"bg-white"}
          color={"text-black"}
          hoverColor={"hover:text-white"}
          borderColor={`border-white`}
        >
          To the right track
        </Button>
      </div>
    </Section>
  );
};

export default HeroSection;
