import ContactSection from "../components/ContactSection";
import PageTransition from "../components/PageTransition";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16 min-h-screen w-full">
        <ContactSection />
      </div>
    </PageTransition>
  );
}
