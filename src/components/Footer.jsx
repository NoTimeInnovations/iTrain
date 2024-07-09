import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      image : '/images/icons/behance.svg',
      title : 'behance',
      link : '#'
    },
    {
      image : '/images/icons/linkedin.svg',
      title : 'linkedin',
      link : '#'
    },
  ];

  return (
    <footer className="bg-primary text-textColor p-10 grid gap-10">
      {/* webPageLinks  */}
      <div className="grid place-items-center gap-3 text-center">
        {/* title  */}
        <p className="text-lg font-medium">Quick Links</p>

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
      <div className="grid place-items-center gap-3 text-center">
        {/* title  */}
        <p className="text-lg font-medium">Get in touch</p>
        {/* links  */}
        <div className="grid place-items-center text-center gap-2">
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
      <div className="grid place-items-center text-center gap-3">
        {/* title  */}
        <p className="font-medium text-lg">Visit us</p>

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
      <div className="grid place-items-center text-center gap-3">
          {/* title  */}
          <p className="text-lg font-medium">Follow us</p>

          {/* links  */}
          <div className="flex items-center gap-5">
            {
              followUsLinks.map((item,index)=>(
                <Link href={item.link}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="w-8"
                  />
                </Link>
              ))
            }

          </div>
      </div>

      {/* subscribe to newsletter  */}
      <div>
        
            

      </div>
    </footer>
  );
};

export default Footer;
