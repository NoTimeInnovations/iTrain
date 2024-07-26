import Footer from "@/components/common/Footer";
import HeroSection from "@/components/contactUsPage/HeroSection";
import TechnicallySkilled from "@/components/contactUsPage/TechnicallySkilled";
import React from "react";

const ContactUs = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TechnicallySkilled/>
      <Footer/>
    </main>
  );
};

export default ContactUs;
