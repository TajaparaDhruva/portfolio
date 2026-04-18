import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingMascot from "./components/FloatingMascot";
import IntroScreen from "./components/IntroScreen";
import ParticleBackground from "./components/ParticleBackground";
import CursorSpotlight from "./components/CursorSpotlight";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificatesPage from "./pages/CertificatesPage";
import FigmaDesignsPage from "./pages/FigmaDesignsPage";
import SkillsPage from "./pages/SkillsPage";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const location = useLocation();

  // Scroll handling on route change
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure DOM is ready
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);


  return (
    <div className="relative min-h-screen bg-dark bg-mesh">
      <ParticleBackground />
      <CursorSpotlight />
      {/* Intro Screen */}
      {!introComplete && (
        <IntroScreen onComplete={() => {
          setIntroComplete(true);
          window.scrollTo(0, 0);
        }} />
      )}

      {/* Main Content */}
      {introComplete && (
        <>
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/figma-designs" element={<FigmaDesignsPage />} />
                <Route path="/about" element={<AboutPage />} />

                <Route path="/contact" element={<ContactPage />} />
                <Route path="/certificates" element={<CertificatesPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <FloatingMascot />
        </>
      )}
    </div>
  );
}
