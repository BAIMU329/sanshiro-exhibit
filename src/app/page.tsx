import { ProgressRail } from "@/components/layout/ProgressRail";
import { ConstraintArchiveSection } from "@/components/sections/ConstraintArchiveSection";
import { EchoSection } from "@/components/sections/EchoSection";
import { EraSection } from "@/components/sections/EraSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { LostSection } from "@/components/sections/LostSection";
import { MechanismSection } from "@/components/sections/MechanismSection";
import { MinekoSection } from "@/components/sections/MinekoSection";
import { UrbanScenesSection } from "@/components/sections/UrbanScenesSection";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
      <ProgressRail />
      <HeroSection />
      <EraSection />
      <JourneySection />
      <ConstraintArchiveSection />
      <UrbanScenesSection />
      <MinekoSection />
      <MechanismSection />
      <LostSection />
      <EchoSection />
    </main>
  );
}
