import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsPreview from "../components/ProjectsPreview";
import FigmaDesignsPreview from "../components/FigmaDesignsPreview";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";

import AchievementsPreview from "../components/AchievementsPreview";
import ContactSection from "../components/ContactSection";
import PageTransition from "../components/PageTransition";

import { useEffect } from "react";

export default function HomePage() {

  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsPreview />
      <FigmaDesignsPreview />

      <AchievementsPreview />
      <EducationSection />
      <ContactSection />
    </PageTransition>
  );
}

