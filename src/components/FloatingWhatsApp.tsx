import React from "react";
import { motion } from "framer-motion";

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "918714650111"; // Format without '+' or spaces for the wa.me link
  const message = encodeURIComponent("Hello! I would like to know more about your services.");

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 2 // Delay to appear after page loads
      }}
      className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[100]"
    >
      {/* Tooltip (visible on hover for desktop) */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 hidden sm:block pointer-events-none transition-opacity duration-300">
        <div className="bg-white text-black text-sm font-medium py-2 px-4 rounded-xl shadow-lg whitespace-nowrap border border-black/5">
          Chat with us
        </div>
      </div>

      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-colors duration-300 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
        
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 sm:w-9 sm:h-9 z-10"
        >
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.548 4.148 1.59 5.96L.182 24l6.196-1.624c1.734.954 3.682 1.455 5.653 1.455 6.645 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm3.847 17.262c-.161.453-.941.89-1.332.946-.356.052-.818.157-2.616-.583-2.156-.885-3.535-3.08-3.64-3.22-.105-.14-1.282-1.705-1.282-3.25 0-1.546.8-2.316 1.082-2.616.281-.3.614-.375.818-.375.205 0 .41.002.593.01.196.009.458-.078.718.552.332.802 1.135 2.766 1.233 2.966.098.2.164.433.024.713-.141.28-.21.453-.421.713-.21.26-.445.568-.631.748-.201.194-.413.409-.187.797.225.388 1.001 1.656 2.15 2.68 1.482 1.319 2.705 1.727 3.09 1.921.385.194.613.161.844-.1.23-.26 1.001-1.164 1.272-1.564.27-.4.54-.334.888-.201.348.134 2.2.1037 2.576 1.226.375.189.624.284.713.44.089.155.089.897-.072 1.35z" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;
