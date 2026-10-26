import React from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { ProjectShowcaseSection } from "@/components/portfolio/ProjectShowcaseSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ConsultingSection } from "@/components/portfolio/ConsultingSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ProjectShowcaseSection
        sectionNumber="01"
        sectionTitle="Projects"
        showSearch={false}
      />
      <ExperienceSection
        sectionNumber="02"
        sectionTitle="Experience & Stack"
      />
      <ConsultingSection
        sectionNumber="03"
        sectionTitle="Get in Touch"
      />
    </div>
  );
}
