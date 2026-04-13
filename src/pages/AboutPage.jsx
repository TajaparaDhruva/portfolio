import AboutSection from "../components/AboutSection";
import PageTransition from "../components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16 min-h-screen w-full">
        <AboutSection />
      </div>
    </PageTransition>
  );
}
