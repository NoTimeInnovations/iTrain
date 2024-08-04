import React from "react";
import Section from "../common/Section";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";
import image1 from "../../../public/images/World is Digital .Traditional Marketing/1st image.png";

const WorldisDigitalTM = () => {
  const content = {
    image: image1,
    title: {
        part1 : `World is Digital`,
        part2 : `Traditional Marketing`
    },
    SubTitle: {
      part1: `Digital Marketing`,
      part2: " Learn the Art and Science of Design",
    },
    points: [
      `In a world overflowing with noise, Digital Marketing is the Gamechanger!!! It's the art of capturing hearts and minds, of building brands, and driving conversions. Our Digital Marketing course is your backstage pass to this thrilling world.`,
      `Learn to navigate the digital landscape, understand consumer behavior, craft compelling narratives, and harness the power of data. From SEO that makes your website irresistible to social media magic that builds communities, you'll discover the strategies to skyrocket your brand.`,
      `Whether you're a budding entrepreneur or a seasoned marketer looking to sharpen your skills, our course will equip you with the tools to succeed in the digital age.`,
    ],
    btnLink: "https://wa.me/919037681744",
  };

  return (
    <Section
      className={`bg-secondary text-textColor px-5 md:px-20 py-[50px] md:py-[100px] xl:px-[200px] grid gap-5 lg:gap-20 grid-rows-[min-content,1fr] `}
    >
      {/* title and subtitle  */}
      <div
        className="text-center grid gap-5 lg:gap-20"
      >
        {/* title  */}
        <Title>{content.title.part1} <strike>{content.title.part2}</strike></Title>

        {/* subtitle  */}
        <SubTitle>
          {content.SubTitle.part1}
          <br />
          <span className="text-[80%]">{content.SubTitle.part2}</span>
        </SubTitle>
      </div>

      {/* contents  */}
      <div className="grid gap-5 lg:grid-flow-col lg:grid-cols-[fit-content,1fr]  ">
        {/* image  */}
        <div
          className={`relative aspect-[6/4] w-full max-w-[600px] rounded-md overflow-hidden lg:min-w-[300px]`}
        >
          <Image
            src={content.image}
            alt={content.title}
            fill
            placeholder="blur"
            loading="lazy"
            quality={10}
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        <div className="grid gap-5 h-fit">
          {/* points  */}
          <div className="grid gap-5 lg:max-w-[700px]  xl:text-lg">
            {content.points.map((p, index) => (
              <p key={`sub_points_${content.title}_${index}`}>{p}</p>
            ))}
          </div>

          {/* start learning button  */}
          <div>
            <Link href={content.btnLink}>
              <Button color={"text-textHoverColor "} bgInvert={true}>
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorldisDigitalTM;
