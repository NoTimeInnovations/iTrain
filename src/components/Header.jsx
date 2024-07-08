import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import HamburgerIcon from "./HamburgerIcon";
import { useCycle } from "framer-motion";

const NavLinks = ({ children, className, href }) => {
  return (
    <Link className={`${className} hover:text-textHoverColor`} href={href}>
      {children}
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);

  return (
    <header className="bg-primary px-5 md:px-20 lg:px-40 xl:px-[194px] flex items-center justify-between text-textColor">
      {/* logo  */}
      <Image
        src="/images/Logo/i train LOGO (WHITE)-01.png"
        alt="i train logo"
        width={200}
        height={200}
        className="w-[150px] lg:w-[200px]"
      />

      {/* HamburgerIcon  */}
      <HamburgerIcon isOpen={isOpen} toggleOpen={setIsOpen} color={'white'} className={'z-[51] lg:hidden'} />


      {/* nav backdrop  */}
      <div onClick={()=>setIsOpen()} className={`fixed top-0 left-0 bg-[#000000a0] w-screen h-screen z-[49] backdrop-blur-md transition-all duration-500 ${ !isOpen && 'opacity-0 pointer-events-none' }`}></div>

      {/* nav */}
      <div className={`fixed top-0 right-0 z-50 bg-secondary w-[90%] h-screen p-10 pt-20 transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:right-auto lg:top-auto lg:translate-x-0  lg:p-0`}>
        <nav className="grid gap-[40px] lg:grid-flow-col lg:place-items-center">
          <NavLinks href="/">Home</NavLinks>
          <NavLinks href="/about">About</NavLinks>
          <NavLinks href="/courses">Courses</NavLinks>
          <NavLinks href="/contact">
            <Button bg={"bg-secondary"} bgInvert={true}>
              Contact
            </Button>
          </NavLinks>
        </nav>
      </div>
    </header>
  );
};

export default Header;
