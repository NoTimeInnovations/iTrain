import DoorOpensToThoseWhoKnock from "@/components/DoorOpensToThoseWhoKnock";
import EnteringIntoTheRightTrain from "@/components/EnteringIntoTheRightTrain";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TakingTheWrongTrain from "@/components/TakingTheWrongTrain";
import TheThreeStepProcess from "@/components/TheThreeStepProcess";
import TheWavingGreenFlag from "@/components/TheWavingGreenFlag";
import TransformYourJourny from "@/components/TransformYourJourny";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
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
