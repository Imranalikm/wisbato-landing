import React, { useState } from "react";
import { motion } from "framer-motion";

const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
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
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-[0_8px_30px_rgba(37,211,102,0.3)] cursor-pointer overflow-hidden border border-[#25D366]/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center z-10 bg-transparent rounded-full relative">
          {/* Image Container with Ping */}
          <div className="relative flex items-center justify-center">
             <div className="absolute inset-1 rounded-full bg-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
             <img
              src="/whatsapp.png"
              alt="WhatsApp Chat"
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain relative z-10"
             />
          </div>

          {/* Text that expands on hover */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: isHovered ? "auto" : 0, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden whitespace-nowrap flex items-center"
          >
            <span className="text-[#25D366] font-semibold pl-1.5 pr-3 sm:pr-4 text-[14px] sm:text-[15px] font-montreal">
              Chat with us
            </span>
          </motion.div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;
