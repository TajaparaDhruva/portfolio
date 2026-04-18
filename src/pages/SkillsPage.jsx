import SkillsSection from "../components/SkillsSection";
import PageTransition from "../components/PageTransition";
import { Helmet } from "react-helmet-async";

export default function SkillsPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Skills & Technologies | Dhruva Portfolio</title>
        <meta name="description" content="Explore my technical expertise in Frontend, Backend, Databases, and modern web development." />
      </Helmet>
      <div className="pt-28 pb-16 min-h-screen w-full">
        <SkillsSection />
      </div>
    </PageTransition>
  );
}
