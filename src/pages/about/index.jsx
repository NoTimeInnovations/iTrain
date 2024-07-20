import HeroSection from "@/components/aboutPage/HeroSection";
import VisionAndMission from "@/components/aboutPage/VisionAndMission";
import Footer from "@/components/common/Footer";
import React from "react";

const AboutPage = () => {
  return (
    <main className=" overflow-x-hidden">
      <HeroSection />
      <VisionAndMission/>
      <Footer/>
    </main>
  );
};

export default AboutPage;
