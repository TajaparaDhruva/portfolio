import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import CertificateCard from "../components/CertificateCard";
import SectionHeading from "../components/SectionHeading";
import GlowButton from "../components/GlowButton";
import PageTransition from "../components/PageTransition";
import { certificates } from "../data/certificates";

export default function CertificatesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-16">
        <div className="section-container">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link to="/">
              <GlowButton size="sm" variant="pink" icon={<FaArrowLeft />}>
                Back to Home
              </GlowButton>
            </Link>
          </motion.div>

          <SectionHeading
            title="All Certificates"
            subtitle="A complete collection of my certifications and achievements"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Background elements */}
        <div className="fixed -left-40 top-1/3 w-80 h-80 rounded-full bg-neon-pink/5 blur-[100px] pointer-events-none" />
        <div className="fixed -right-40 bottom-1/3 w-80 h-80 rounded-full bg-primary-600/8 blur-[100px] pointer-events-none" />
      </div>
    </PageTransition>
  );
}
