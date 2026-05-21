import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import PortfolioSection from "./components/PortfolioSection";
import MobileAppSection from "./components/MobileAppSection";
import PricingSection from "./components/PricingSection";
import TechnicalSupportSection from "./components/TechnicalSupportSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TalentSection from "./components/TalentSection";
import Footer from "./components/Footer";
import SecondSection from "./components/SecondSection";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="font-montreal"
      >
        <div className="relative">
          <Navbar />
          <HeroSection />
        </div>
        <SecondSection />
        <WhatWeDo />
        <PortfolioSection />
        <MobileAppSection />
        <PricingSection />
        <TechnicalSupportSection />
        <TestimonialsSection />
        <TalentSection />
        <Footer />
      </motion.main>
    </>
  );
}

export default App;
