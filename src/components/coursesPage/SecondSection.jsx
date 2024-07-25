import React from "react";
import Section from "../common/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";

const SecondSection = () => {
  const contents = [
    {
      mainTitle: "Art or Math? Creativity or Development?",
      mainSubTitle:
        "Some People Prefer Coffee over Tea, spilling Creativity on Designs",
      image: "/images/Art or Math Creativity or Development/1.jpeg",
      title: "Graphic Designing",
      subTitle: "Learn the Art and Science of Design",
      descriptions: [
        "From blank canvas to breathtaking masterpieces, we make sure you just don’t learn a software itself. At iTrain Technologies you will acquaint a transformative journey into the world of visual storytelling, where your passion redeems the love for colours and each of it’s stories. You'll learn to think critically, solve problems creatively, and communicate effectively through designs.",
        "Our HueSmiths will guide you through the intricacies of color theory, typography, and composition, where you’ll master industry-leading software such as Adobe Photoshop and Illustrator, thereby developing a keen eye for aesthetics and functionality.",
        "More than just a course, it's a launchpad. Yes, Believe that! Get ready to redefine your creator energies by joining our vibrant community of designers and collaborate on exciting projects. Whether you're a budding artist or someone looking to switch careers, our course empowers you to turn your passion into a profitable profession.",
      ],
    },
  ];

  return (
    <Section className={`bg-primary min-h-screen`}>
      {/* swiper card  */}
      <div className="w-full min-h-screen text-textColor px-5 md:px-20 py-[100px] xl:px-[200px]">
        {/* titile and subtitle  */}
        <div className="place-items-center text-center grid gap-5 ">
          {/* title  */}
          <Title>{contents[0].mainTitle}</Title>
          {/* subtitle  */}
          <SubTitle className={`max-w-[400px]`}>{contents[0].mainSubTitle}</SubTitle>
        </div>

        {/* contents  */}
        <main className="grid place-items-center mt-10 gap-5 md:gap-10 lg:grid-flow-col lg:mt-20 ">
          {/* image  */}
          <div className="relative w-[80%] aspect-square rounded-full overflow-hidden lg:w-[300px] xl:w-[500px]">
            <Image
              src={contents[0].image}
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
              <p className="text-lg font-medium md:text-2xl">{contents[0].title}</p>
              {/* subtitle  */}
              <p className="text-sm md:text-lg ">{contents[0].subTitle}</p>
            </div>

            {/* descriptions  */}
            <div className="grid gap-5 xl:text-[17px]" >
              {contents[0].descriptions.map((dec, index) => (
                <p>{dec}</p>
              ))}
            </div>
          </div>
        </main>
      </div>
    </Section>
  );
};

export default SecondSection;
