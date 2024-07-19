import DoorOpensToThoseWhoKnock from "@/components/homePage/DoorOpensToThoseWhoKnock";
import EnteringIntoTheRightTrain from "@/components/homePage/EnteringIntoTheRightTrain";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/homePage/HeroSection";
import TakingTheWrongTrain from "@/components/homePage/TakingTheWrongTrain";
import TheThreeStepProcess from "@/components/homePage/TheThreeStepProcess";
import TheWavingGreenFlag from "@/components/homePage/TheWavingGreenFlag";
import TransformYourJourny from "@/components/homePage/TransformYourJourny";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Toaster/>
      <HeroSection id={'hero'} />
      <TakingTheWrongTrain id={'wrong-train'} />
      <DoorOpensToThoseWhoKnock id={'door-opens'} />
      <EnteringIntoTheRightTrain id={'right-train'} />
      <TheWavingGreenFlag id={'green-flag'} />
      <TransformYourJourny id={'transform-journy'} />
      <TheThreeStepProcess id={'three-step'} />
      <Footer id={'footer'} />
    </main>
  );
}
