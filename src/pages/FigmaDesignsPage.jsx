import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import FigmaDesignCard from "../components/FigmaDesignCard";
import SectionHeading from "../components/SectionHeading";
import GlowButton from "../components/GlowButton";
import PageTransition from "../components/PageTransition";
import { figmaDesigns } from "../data/figmaDesigns";
import { Helmet } from "react-helmet-async";

export default function FigmaDesignsPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>UI/UX Design Archive | Dhruva Portfolio</title>
        <meta name="description" content="Explore a comprehensive archive of Dhruva's UI/UX architectural designs." />
      </Helmet>
      <div className="min-h-screen pt-28 pb-16 bg-[#020617]">
        <div className="section-container">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link to="/">
              <GlowButton size="sm" variant="gold" icon={<FaArrowLeft />}>
                Back to Home
              </GlowButton>
            </Link>
          </motion.div>

          <SectionHeading
            title="Design Exhibition"
            subtitle="Explore our comprehensive archive of UI/UX architectural designs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {figmaDesigns.map((design, index) => (
              <FigmaDesignCard key={design.id} design={design} index={index} />
            ))}
          </div>
        </div>

        {/* Background elements */}
        <div className="fixed -left-40 top-1/3 w-80 h-80 rounded-full bg-[#d4a843]/5 blur-[100px] pointer-events-none" />

        <div className="fixed -right-40 bottom-1/3 w-80 h-80 rounded-full bg-primary-600/8 blur-[100px] pointer-events-none" />
      </div>
    </PageTransition>
  );
}
