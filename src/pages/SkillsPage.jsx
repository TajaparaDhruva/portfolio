import SkillsSection from "../components/SkillsSection";
import PageTransition from "../components/PageTransition";

export default function SkillsPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16 min-h-screen w-full">
        <SkillsSection />
      </div>
    </PageTransition>
  );
}
