import React from "react";
import Section from "../common/Section";
import Header from "../common/Header";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import Button from "../common/Button";
import Link from "next/link";

const HeroSection = () => {
  const contents = [
    {
      image: "/images/iTrain your Left Brain/flutter.png",
      title: "Flutter",
      subTitle: "Build Mobile Apps that Dominate",
      points: [
        ` Flutter is revolutionizing app development, and our course is your
              ticket to ride this wave. Learn to create stunning, natively
              compiled applications for Android  and iOS from a single codebase.`,
        ` Dive into the world of Dart programming, mastering its syntax and
              object-oriented capabilities. From crafting captivating user
              interfaces to optimizing app performance, you'll gain the skills
              to build exceptional mobile experiences.`,
        ` Whether you're a developer looking to expand your toolkit or a
              designer eager to bring your creations to life, Flutter offers
              endless possibilities`,
      ],
      btnLink: "#",
    },
    {
      image: "/images/iTrain your Left Brain/ui ux development.png",
      title: "UI/UX Development",
      subTitle: "When Designing Meets REALISM",
      points: [
        `You've sketched the blueprint, now it's time to build the house. 
        Our UI/UX Development course transforms your designs into tangible, interactive 
        experiences, where you learn the language of developers, bri
        dging the gap between the conceptual and the functional. We’ll sh
        ow you how to breathe life into your wireframes, turning static sk
        etches into dynamic prototypes that users can interact with. It's w
        here pixel-perfect aesthetics meet the robustness of functionality.`,

        `With tools like Adobe Photoshop, Illustrato
        r and Figma, and languages of the Web, you'll lear
        n how to give life to designs and delight users wi
        th every click and scroll.`,
      ],
      btnLink: "#",
    },
  ];

  return (
    <Section className={"bg-secondary grid grid-rows-[min-content,1fr]"}>
      <Header />

      {/* contents  */}
      <div className="h-full text-textColor px-5 md:px-20 py-[100px] xl:px-[200px] gap-5 grid lg:gap-20">
        {/* title and subtitle  */}
        <div className="grid gap-5 text-center lg:gap-10">
          {/* title  */}
          <Title>
            <span className="text-textHoverColor">iTrain</span> The Left Brain
          </Title>
          {/* sub title  */}
          <SubTitle>
            Works Well, with the Brain’s Left Hemisphere. Art the Mastery of Web
            Development & Innovative Mobile Apps by Boarding the iTrain. Your
            next destination is your next designation.
          </SubTitle>
        </div>

        {/*sub  contetns  */}
        <div className="grid gap-20 lg:gap-32">
          {contents.map((c, index) => (
            <div
              key={`sub_content_${c.title}`}
              className="grid gap-5 lg:grid-flow-col"
            >
              {/* image  */}
              <div className={`relative aspect-[6/4] w-full ${index == 0 && 'lg:order-2'} lg:max-w-[600px] rounded-md overflow-hidden`}>
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="grid gap-5 ">
                {/* title and sub title  */}
                <div>
                  <p className="font-medium text-lg lg:text-2xl">{c.title}</p>
                  <p className="text-sm lg:text-lg">{c.subTitle}</p>
                </div>

                {/* points  */}
                <div className="grid gap-5 lg:max-w-[700px] xl:gap-3 xl:text-[17px]">
                  {c.points.map((p, index) => (
                    <p key={`sub_points_${c.title}_${index}`}>{p}</p>
                  ))}
                </div>

                {/* start learning button  */}
                <div>
                  <Link href={c.btnLink}>
                    <Button color={"text-textHoverColor "} bgInvert={true}>
                      Start Learning
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
