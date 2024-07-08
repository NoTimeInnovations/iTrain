import DoorOpensToThoseWhoKnock from "@/components/DoorOpensToThoseWhoKnock";
import EnteringIntoTheRightTrain from "@/components/EnteringIntoTheRightTrain";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TakingTheWrongTrain from "@/components/TakingTheWrongTrain";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TakingTheWrongTrain />
      <DoorOpensToThoseWhoKnock />
      <EnteringIntoTheRightTrain />
    </main>
  );
}
