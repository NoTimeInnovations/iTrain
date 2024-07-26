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
      value: "+91-9073681744",
    },

    {
      title: "email",
      icon: "/images/icons/email.svg",
      value: "itrainremotely@gmail.com",
    },
  ];

  return (
    <Section className={"bg-secondary grid grid-rows-[min-content,1fr]"}>
      <Header />

      {/* main contents  */}
      <div className="text-textColor p-5 md:px-20 lg:px-40 xl:px-[200px] ">
        {/* title  */}
        <Title>Book an Demo</Title>

        <div className="grid gap-5 mt-5">
          {/* image  */}
          <div className="relative w-full aspect-video">
            <Image
              src={"/images/ContactUs/hero-section.jpeg"}
              alt="contact-us"
              fill
              className="object-cover w-full h-full"
            />
          </div>

          {/* details  */}
          <div>
            {/* contacts */}
            <div className="grid gap-3 place-items-center text-center">
              {/* title */}
              <p className="font-semibold text-lg">Call / Email</p>

              {/* values  */}
              <div className="grid gap-1">
                {contacts.map((c, index) => (
                  <div key={`contact_${c.title}`} className="flex items-center gap-2 justify-center text-center" >
                    {/* Image  */}
                    <Image src={c.icon} alt={c.title} width={20} height={20} />

                    {/* value  */}
                    <Link
                      href={
                        c.title === "phone"
                          ? `tele:${c.value}`
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
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
