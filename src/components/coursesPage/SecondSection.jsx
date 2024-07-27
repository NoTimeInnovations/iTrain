import React from "react";
import Section from "../common/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCard from "./SwiperCard";
import "swiper/css";
import image1 from "../../../public/images/Art or Math Creativity or Development/1.jpeg"
import image2 from "../../../public/images/Art or Math Creativity or Development/2.jpeg"
import image3 from "../../../public/images/Art or Math Creativity or Development/3.jpeg"


const SecondSection = () => {
  const contents = [
    {
      mainTitle: "Art or Math? Creativity or Development?",
      mainSubTitle:
        "Some People Prefer Coffee over Tea, spilling Creativity on Designs",
      image: image1,
      title: "Graphic Designing",
      subTitle: "Learn the Art and Science of Design",
      descriptions: [
        "From blank canvas to breathtaking masterpieces, we make sure you just don’t learn a software itself. At iTrain Technologies you will acquaint a transformative journey into the world of visual storytelling, where your passion redeems the love for colours and each of it’s stories. You'll learn to think critically, solve problems creatively, and communicate effectively through designs.",
        "Our HueSmiths will guide you through the intricacies of color theory, typography, and composition, where you’ll master industry-leading software such as Adobe Photoshop and Illustrator, thereby developing a keen eye for aesthetics and functionality.",
        "More than just a course, it's a launchpad. Yes, Believe that! Get ready to redefine your creator energies by joining our vibrant community of designers and collaborate on exciting projects. Whether you're a budding artist or someone looking to switch careers, our course empowers you to turn your passion into a profitable profession.",
      ],
    },
    {
      mainTitle: "Development courses, not everyone’s cup of tea  ",
      mainSubTitle:
        "Not tea? Then definitely Coffee; coz Coffee boosts Creativity.So does our Design Courses",
      image: image2,
      title: "UI/UX Designing Basic",
      subTitle: "See the World Through Your User's Eyes!",
      descriptions: [
        "Picture yourself as a wizard, crafting digital worlds of Businesses, where you magnetize the user’s eyes for an impressive visit. Our UI/UX Designing Basic  course is your first spellbook where you learn to read people's minds, understanding what makes them tick, what frustrates them, and what makes them smile. From sketching out the land to filling it with wonder, you'll discover the secret language of design.",
        "Master the essential tools of the trade such as Adobe Photoshop, Adobe Illustrator and Figma to bring your magical ideas to transform and get a life. From creating wireframes that outline the user journey to crafting high-fidelity mockups that breathe life into your designs, you'll gain the practical skills needed to bring your ideas to life.",
      ],
    },
    {
      mainTitle: "Development courses, not everyone’s cup of tea  ",
      mainSubTitle:
        "Not tea? Then definitely Coffee; coz Coffee boosts Creativity.So does our Design Courses",
      image: image3,
      title: "UI/UX Designing Advanced",
      subTitle: "The Art of User Enchantment",
      descriptions: [
        " Our  UI/UX  Designing Advanced course is for those who seek to weave digital tapestries that captivate souls. You'll journey deep into the human heart, learning the language of emotions, desires, and the unspoken needs that shape experiences. This isn't just about creating interfaces, it's about crafting digital symphonies that leave an mark on the user’s experience.",
        "With Figma as your brush guided by the design systems of Google and Apple,  you'll paint with animations, micro-interactions, and prototypes for Web and Mobile platforms. You'll become a detective, uncovering user insights through rigorous testing, and an alchemist, transforming those insights into gold.",
      ],
    },
  ];

  return (
    <Section className={`bg-primary min-h-screen relative`}>
      {/* swiper  */}
      <Swiper
        pagination={{
          el: ".swiper-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
          clickable : true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {contents?.map((c, index) => (
          <SwiperSlide key={`courses_swiper_card_${index}`}>
            <SwiperCard content={c} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* pagination container  */}
      <div className="swiper-pagination z-[20] flex items-center justify-center absolute bottom-20 md:bottom-10 xl:bottom-32 left-1/2 -translate-x-1/2 gap-2"></div>
    </Section>
  );
};

export default SecondSection;
