import React from "react";
import Header from "../common/Header";
import Section from "../common/Section";
import Button from "../common/Button";
import Link from "next/link";
import bgImage from "../../../public/images/HeroSection/image_edit.png";
import Image from "next/image";

const HeroSection = ({ id }) => {
  return (
    <Section id={id} className={`grid grid-rows-[min-content,1fr]`}>
      <Header />

      {/* main contents  */}
      <div className="relative overflow-hidden">
        {/* background image  */}
        <Image
          src={bgImage}
          alt="bg"
          fill
          placeholder="blur"
          loading="lazy"
          className="object-cover home-bg-pos"
        />

        {/* contents  */}
        <div className="backdrop-brightness-[40%] p-5 md:px-20 lg:px-40 xl:px-[200px] flex flex-col justify-center gap-5 h-full w-full">
          {/* center text  */}
          <p className="text-[27px] md:text-[40px] xl:text-[57px] xl:leading-[64px] tracking-[-0.25%] text-textColor xl:mt-32">
            For those in the Wrong <br className="hidden md:block" /> Career
            Track, <span className="text-textHoverColor">We&nbsp;are here Together... </span>
            <br />
            Until You reach the <br />{" "}
            <span className="text-textHoverColor">Right Destination…!</span> 
          </p>

          {/* button  */}
          <Link href={"https://www.youtube.com/watch?v=SM7Pdhir1D4"}>
            <Button
              bg={"bg-white"}
              color={"text-black"}
              hoverColor={"hover:text-white"}
              borderColor={`border-white`}
            >
              To the right track
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};
export default HeroSection;
