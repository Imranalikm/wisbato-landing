import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import PortfolioSection from "./components/PortfolioSection";
import MobileAppSection from "./components/MobileAppSection";
import PricingSection from "./components/PricingSection";
import TechnicalSupportSection from "./components/TechnicalSupportSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TalentSection from "./components/TalentSection";

function App() {
  return (
    <main className="font-montreal">
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      {/* <SecondSection /> */}
      <WhatWeDo />
      <PortfolioSection />
      <MobileAppSection />
      <PricingSection />
      <TechnicalSupportSection />
      <TestimonialsSection />
      <TalentSection />
    </main>
  );
}

export default App;
