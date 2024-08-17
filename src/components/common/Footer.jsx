import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Footer = ({ id }) => {
  const webPageLinks = [
    {
      title: "Home",
      link: "/#hero",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Courses",
      link: "/courses",
    },
    {
      title: "Contact",
      link: "/contact-us",
    },
  ];

  const getInTouchLinks = [
    {
      title: "+91 9073681744",
      link: "tel:+919037681744",
      icon: "/images/icons/phone.svg",
    },
    {
      title: "itrainremotely@gmail.com",
      link: "mailto:itrainremotely@gmail.com",
      icon: "/images/icons/email.svg",
    },
  ];

  const visitUsLink = {
    title: "We are here",
    link: "https://maps.app.goo.gl/wbBGUoKMP91d7dGk6",
    icon: "/images/icons/location.svg",
  };

  const followUsLinks = [
    {
      image: "/images/icons/facebook.svg",
      title: "facebook",
      link: "https://www.facebook.com/profile.php?id=61560484353385",
    },
    {
      image: "/images/icons/instagram.svg",
      title: "instagram",
      link: "https://www.instagram.com/itraintechnologiesremotely/  ",
    },
    {
      image: "/images/icons/youtube.svg",
      title: "youtube",
      link: "https://www.youtube.com/@iTraintechnologiesremotely",
    },
    {
      image: "/images/icons/behance.svg",
      title: "behance",
      link: "https://www.behance.net/itrainremotely",
    },
    {
      image: "/images/icons/linkedin.svg",
      title: "linkedin",
      link: "https://www.linkedin.com/company/itrain-technologies4malayalees/",
    },
  ];

  const [formEmail, setFormEmail] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.loading("Subscribing.....");
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-mail`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Origin: process.env.NEXT_PUBLIC_BASE_URL,
      },
      body: JSON.stringify({
        email: formEmail,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        toast.dismiss();
        if (json.success) {
          toast.success("Subscribed to News Letter!");
        } else {
          toast.error("Subscribing failed!");
        }
      })
      .catch((e) => {
        toast.dismiss();
        toast.error("Subscribing failed!");
      });
  };

  return (
    <>
      <footer
        id={id}
        className="bg-primary text-textColor p-10 lg:p-20 xl:px-60 2xl:px-80 xl:pt-32 xl:pb-40 relative"
      >
        <div className="grid gap-10 lg:grid-flow-col">
          {/* webPageLinks  */}
          <div className="grid  gap-3 lg:gap-5 h-fit">
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

          {/* get in touch follow us and visit us  and subscribe input box  */}
          <div className="grid gap-10 lg:gap-2">
            {/* get in touch follow us and visit us  */}
            <div className="grid lg:grid-flow-col gap-10">
              {/* getInTouchLInks  */}
              <div className="grid gap-3 lg:gap-5 h-fit">
                {/* title  */}
                <p className="text-lg font-medium lg:text-xl">Get in touch</p>
                {/* links  */}
                <div className="grid gap-2">
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
              <div className="grid gap-3 lg:gap-5 h-fit">
                {/* title  */}
                <p className="font-medium text-lg lg:text-xl">Visit us</p>

                {/* link  */}
                <Link
                  className="flex items-center gap-2"
                  href={visitUsLink.link}
                >
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
              <div className="grid gap-3 lg:gap-5 h-fit">
                {/* title  */}
                <p className="text-lg font-medium lg:text-xl">Follow us</p>

                {/* links  */}
                <div className="flex items-center gap-5">
                  {followUsLinks.map((item, index) => (
                    <Link key={`follow_link_${index}`} href={item.link}>
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
            <div className="grid gap-3 lg:gap-5 h-fit lg:grid-flow-col lg:items-center lg:place-items-start lg:grid-cols-[min-content,1fr]">
              <label
                className="text-lg font-medium lg:text-xl text-nowrap"
                htmlFor="email"
              >
                Subscribe to our NewsLetter
              </label>

              <form
                onSubmit={handleFormSubmit}
                className=" grid grid-cols-[1fr,min-content] bg-[#938F96] rounded place-items-center px-3 md:py-2 lg:w-full xl:w-[90%]"
              >
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full placeholder-textColor p-3 bg-transparent focus:outline-none"
                  required
                  onChange={(e) => setFormEmail(e.target.value)}
                />
                <button className="text-[#381E72] bg-[#CFBCFF] px-[20px] py-[8px] font-medium text-[14px] rounded-full md:py-[10px] md:text-lg shadow-sm shadow-[#00000042] cursor-pointer select-none active:scale-90 transition-all hover:bg-[#381E72] hover:text-[#CFBCFF]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* whastapp  */}
        <div className="flex justify-end py-10">
          <Link href={"https://wa.me/919037681744"}>
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

      {/* copy right  */}
      <div className="bg-secondary text-textColor grid place-items-center px-[10px] py-[30px] md:py-[40px] text-center text-xs md:text-base leading-6">
        <p>
          {/* itrain title  */}
          <span className="text-textHoverColor">iTrain Technologies</span>
          <sup className="text-white font-semibold">TM</sup>{" "}
          <br className="md:hidden" />
          <span>
            2024 | By MAS DESIGN AND CODE {`(OPC)`} PVT LTD |
            All&nbsp;Rights&nbsp;Reserved
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
