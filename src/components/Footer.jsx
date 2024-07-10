import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Footer = () => {
  const webPageLinks = [
    {
      title: "Home",
      link: "#home",
    },
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Courses",
      link: "#courses",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ];

  const getInTouchLinks = [
    {
      title: "+91 9073681744",
      link: "#",
      icon: "/images/icons/phone.svg",
    },
    {
      title: "itrainremotely@gmail.com",
      link: "#",
      icon: "/images/icons/email.svg",
    },
  ];

  const visitUsLink = {
    title: "We are here",
    link: "#",
    icon: "/images/icons/location.svg",
  };

  const followUsLinks = [
    {
      image: "/images/icons/facebook.svg",
      title: "facebook",
      link: "#",
    },
    {
      image: "/images/icons/instagram.svg",
      title: "instagram",
      link: "#",
    },
    {
      image: "/images/icons/youtube.svg",
      title: "youtube",
      link: "#",
    },
    {
      image: "/images/icons/behance.svg",
      title: "behance",
      link: "#",
    },
    {
      image: "/images/icons/linkedin.svg",
      title: "linkedin",
      link: "#",
    },
  ];

  return (
    <footer className="bg-primary text-textColor p-10 lg:p-20 xl:px-80 xl:py-32 grid gap-10 relative">
      <div className="grid gap-10 lg:grid-flow-col">
        {/* webPageLinks  */}
        <div className="grid place-items-center gap-3 lg:gap-5 text-center lg:text-start lg:place-items-start h-fit">
          {/* title  */}
          <p className="text-lg font-medium lg:text-xl">Quick Links</p>

          {/* links  */}
          <div className="grid gap-2">
            {webPageLinks.map((item, index) => (
              <Link key={`wepagelinks_${index}`} href={item.link}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* getInTouchLInks  */}
        <div className="grid place-items-center gap-3 lg:gap-5 text-center h-fit lg:text-start lg:place-items-start ">
          {/* title  */}
          <p className="text-lg font-medium lg:text-xl">Get in touch</p>
          {/* links  */}
          <div className="grid place-items-center text-center gap-2 lg:text-start lg:place-items-start">
            {getInTouchLinks.map((item, index) => (
              <div
                key={`getintouchlinks_${index}`}
                className="flex items-center gap-2 w-fit"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="w-5"
                />
                <Link className="w-fit" href={item.link}>
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* visit us link  */}
        <div className="grid place-items-center text-center gap-3 lg:gap-5 h-fit lg:text-start lg:place-items-start ">
          {/* title  */}
          <p className="font-medium text-lg lg:text-xl">Visit us</p>

          {/* link  */}
          <Link className="flex items-center gap-2" href={visitUsLink.link}>
            {/* icon  */}
            <Image
              src={visitUsLink.icon}
              width={50}
              height={50}
              alt={visitUsLink.title}
              className="w-5"
            />

            {/* title  */}
            <p>{visitUsLink.title}</p>
          </Link>
        </div>

        {/* follow us links  */}
        <div className="grid place-items-center text-center gap-3 lg:gap-5 h-fit lg:text-start lg:place-items-start">
          {/* title  */}
          <p className="text-lg font-medium lg:text-xl">Follow us</p>

          {/* links  */}
          <div className="flex items-center gap-5">
            {followUsLinks.map((item, index) => (
              <Link href={item.link}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="w-8"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* subscribe to newsletter  */}
      <div className="grid place-items-center text-center gap-3 lg:gap-5 h-fit lg:grid-flow-col lg:w-fit">
        <label className="text-lg font-medium lg:text-xl" htmlFor="email">
          Subscribe to our NewsLetter
        </label>

        <div className="grid grid-cols-[1fr,min-content] bg-[#938F96] rounded place-items-center px-3 md:py-2">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full placeholder-textColor p-3 bg-transparent focus:outline-none"
          />
          <Button
            bg={"bg-textColor"}
            color={"text-buttonHover"}
            padding={"py-2 px-1 lg:px-3"}
            textSize={"text-xs md:text-base"}
          >
            Subscribe
          </Button>
        </div>
      </div>

      {/* whastapp  */}
      <div className="flex justify-end">
        <Link href={"#"}>
          <Image
            src={"/images/icons/whatsapp.svg"}
            alt="whatsapp"
            width={100}
            height={100}
            className="w-[60px] xl:absolute xl:bottom-20 xl:right-20"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
