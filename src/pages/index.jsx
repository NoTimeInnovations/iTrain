import DoorOpensToThoseWhoKnock from "@/components/DoorOpensToThoseWhoKnock";
import EnteringIntoTheRightTrain from "@/components/EnteringIntoTheRightTrain";
import HeroSection from "@/components/HeroSection";
import TakingTheWrongTrain from "@/components/TakingTheWrongTrain";
import TheThreeStepProcess from "@/components/TheThreeStepProcess";
import TheWavingGreenFlag from "@/components/TheWavingGreenFlag";
import TransformYourJourny from "@/components/TransformYourJourny";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TakingTheWrongTrain />
      <DoorOpensToThoseWhoKnock />
      <EnteringIntoTheRightTrain />
      <TheWavingGreenFlag />
      <TransformYourJourny />
      <TheThreeStepProcess/>
    </main>
  );
}
