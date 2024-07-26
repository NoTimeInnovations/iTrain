import React from "react";
import Section from "../common/Section";
import Header from "../common/Header";
import Title from "../common/Title";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const contacts = [
    {
      title: "phone",
      icon: "/images/icons/phone.svg",
      value: "+91 9073681744",
    },

    {
      title: "email",
      icon: "/images/icons/email.svg",
      value: "itrainremotely@gmail.com",
    },
  ];

  const socialLinks = [
    {
      title: "whatsapp",
      icon: "/images/icons/whatsapp.svg",
      link: "https://wa.me/919037681744",
    },
    {
      title: "facebook",
      icon: "/images/icons/facebook.svg",
      link: "https://www.facebook.com/profile.php?id=61560484353385",
    },
    {
      title: "instagram",
      icon: "/images/icons/instagram.svg",
      link: "https://www.instagram.com/itraintechnologiesremotely/",
    },
    {
      title: "linkedin",
      icon: "/images/icons/linkedin.svg",
      link: "https://www.linkedin.com/company/itrain-technologies4malayalees/",
    },
  ];

  return (
    <Section className={"bg-secondary grid grid-rows-[min-content,1fr] "}>
      <Header />

      {/* main contents  */}
      <div className="text-textColor p-5 md:px-20 lg:px-40 xl:px-[200px] grid place-content-center gap-5 md:gap-10 xl:gap-20">
        {/* title  */}
        <Title>Book an Demo</Title>

        <div className="grid gap-10 h-full lg:grid-flow-col">
          {/* image  */}
          <div className="relative w-full min-w-[80vw] md:min-w-[60vw] lg:min-w-[50vw] xl:min-w-[40vw] aspect-video overflow-hidden rounded">
            <Image
              src={"/images/ContactUs/hero-section.jpeg"}
              alt="contact-us"
              fill
              className="object-cover w-full h-full"
            />
          </div>

          {/* details  */}
          <div className="grid gap-10 h-fit">
            {/* contacts */}
            <div className="grid gap-3 place-items-center text-center lg:text-start lg:place-items-start grid-rows-[min-content,1fr]">
              {/* title */}
              <p className="font-semibold lg:text-lg h-fit xl:text-xl">Call / Email</p>

              {/* values  */}
              <div className="grid gap-1 w-full lg:min-w-[280px] xl:gap-5">
                {contacts.map((c, index) => (
                  <div
                    key={`contact_${c.title}`}
                    className="flex items-center gap-2 justify-center text-center lg:justify-start lg:text-start lg:text-lg"
                  >
                    {/* Image  */}
                    <Image src={c.icon} alt={c.title} width={20} height={20} />

                    {/* value  */}
                    <Link
                      href={
                        c.title === "phone"
                          ? `tel:${c.value}`
                          : `mailto:${c.value}`
                      }
                    >
                      {c.value}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* drop a messaage  */}
            <div className="grid gap-4 place-items-center lg:place-items-start grid-rows-[min-content,1fr] h-fit">
              {/* title  */}
              <p className="font-semibold lg:text-lg xl:text-xl" >Drop a message</p>

              {/* links  */}
              <div className="grid grid-flow-col place-items-center gap-10 lg:place-items-start lg:gap-3 xl:gap-5">
                {
                  socialLinks.map((sl,index)=>(
                    <Link key={`social_link_${sl.title}`} href={sl.link}>
                      <Image
                        src={sl.icon}
                        alt={sl.title}
                        width={25}
                        height={25}
                        className="brightness-200 contrast-200 saturate-0 lg:w-[30px] lg:h-[30px]"
                      />
                    </Link>
                  ))
                }
              </div>
            </div>

            {/* meet in person  */}
            <Link href={'https://maps.app.goo.gl/r4KHXvWw7U2Gj9d98'} className="flex items-center justify-center gap-2 font-medium lg:justify-start lg:text-lg xl:text-xl">
                {/* icon  */}
                <Image
                  src="/images/icons/location.svg"
                  alt="location"
                  width={20}
                  height={20}
                  className="xl:w-[30px] xl:h-[30px]"
                />

                {/* value  */}
                <p>Meet In Person</p>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
