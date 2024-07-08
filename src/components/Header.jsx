import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const NavLinks = ({ children, className, href }) => {
  return (
    <Link className={`${className} hover:text-textHoverColor`} href={href}>
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="bg-primary px-[194px] flex items-center justify-between text-textColor">
      {/* logo  */}
      <Image
        src="/images/Logo/i train LOGO (WHITE)-01.png"
        alt="i train logo"
        width={200}
        height={200}
      />

      {/* nav */}
      <nav className="flex items-center gap-[40px]">
        <NavLinks href="/">Home</NavLinks>
        <NavLinks href="/about">About</NavLinks>
        <NavLinks href="/courses">Courses</NavLinks>
        <NavLinks href="/contact">
          <Button bg={'bg-secondary'} bgInvert={true} >Contact</Button>
        </NavLinks>
      </nav>
    </header>
  );
};

export default Header;
