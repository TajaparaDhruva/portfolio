import ContactSection from "../components/ContactSection";
import PageTransition from "../components/PageTransition";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact Dhruva | Let's Talk</title>
        <meta name="description" content="Get in touch with Dhruva for opportunities, collaborations, and project inquiries." />
      </Helmet>
      <div className="pt-28 pb-16 min-h-screen w-full">
        <ContactSection />
      </div>
    </PageTransition>
  );
}
