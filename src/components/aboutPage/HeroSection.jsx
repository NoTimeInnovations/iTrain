import React from "react";
import Section from "../common/Section";
import Header from "../common/Header";
import Image from "next/image";
import Title from "../common/Title";

const HeroSection = () => {
  const HeroSectionParagraphs = [
    `Imagine a World where your skills are your wings, carrying you to
              heights you never thought possible. While You hail the creator
              energies being on the top of your career apex as a Phoenix, You
              see a World where passion meets purpose, and learning becomes an
              adventure. iTrain is built with a Vision, to make the undesirable,
              undeniable, empowering your career prowess and land on the Vacant
              Throne of the Ambition you always Desired.`,
    `We believe that everyone has the potential to be Extraordinary. We
              invest our faith to let you discover your creator energies, hidden
              talents, nurturing your passions, and equipping yourself with the
              tools to turn your dreams into reality`,
    ` We own a community of learners and creators, united by a shared
              desire to grow and excel. Our expert instructors are not just
              trainers; they're your guides on a journey of discovery.`,
    `With <span style="color: #cfbcff;">iTrain</span>, you're not just acquiring skills; you're investing in
              yourself. Our flexible courses are designed to fit seamlessly into
              your life, allowing you to learn at your own pace. And with our
              focus on practical knowledge and real-world application, you'll be
              ready to make an immediate impact`,
  ];

  return (
    <Section className={"grid grid-rows-[min-content,1fr] bg-secondary"}>
      <Header />

      {/* contents  */}
      <div className=" h-full text-textColor grid place-content-center px-5 md:px-20 py-[100px] xl:px-[200px] gap-5 md:gap-20">
        {/* title  */}
        <Title>Rise to the Top From Undesirable to Undeniable</Title>

        {/* image and descirption  */}
        <div className="grid gap-10 lg:grid-flow-col place-items-center ">
          {/* imagae  */}
          <div className="relative w-full aspect-square max-w-[600px] lg:order-2 lg:w-[400px] rounded-md overflow-hidden">
            <Image
              src={
                "/images/Rise to the Top. From Undesirable to Undeniable/phoenix.png"
              }
              alt="phoenix"
              fill
              className="object-contain w-full h-full"
            />
          </div>

          {/* description  */}
          <div className="grid gap-5 ">
            {HeroSectionParagraphs.map((p, index) => (
              <p
                className="xl:text-lg"
                key={`about_h_p_${index}`}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
