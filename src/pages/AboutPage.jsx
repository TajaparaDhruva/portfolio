import AboutSection from "../components/AboutSection";
import PageTransition from "../components/PageTransition";
import { Helmet } from "react-helmet-async";

export default function AboutPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>About Dhruva | Full Stack Developer</title>
        <meta name="description" content="Learn more about Dhruva, a Full Stack Developer with continuous passion for building high-quality software." />
      </Helmet>
      <div className="pt-28 pb-16 min-h-screen w-full">
        <AboutSection />
      </div>
    </PageTransition>
  );
}
