import DoorOpensToThoseWhoKnock from "@/components/DoorOpensToThoseWhoKnock";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TakingTheWrongTrain from "@/components/TakingTheWrongTrain";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TakingTheWrongTrain />
      <DoorOpensToThoseWhoKnock />
    </main>
  );
}
