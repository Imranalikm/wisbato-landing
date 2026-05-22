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
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsing ring animation */}
        <div className="absolute inset-1 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
        
        {/* WhatsApp Icon */}
        <img
          src="/whatsapp.png"
          alt="WhatsApp Chat"
          className="w-full h-full z-10 object-contain drop-shadow-[0_8px_20px_rgba(37,211,102,0.35)]"
        />
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;
