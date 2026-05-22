import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number], // easeOutCubic
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobile]);

  const navLinks = [
    { label: "What We Do", target: "what-we-do", num: "01", desc: "Services & Capabilities" },
    { label: "Portfolio", target: "portfolio", num: "02", desc: "Featured Work & Projects" },
    { label: "Pricing", target: "pricing", num: "03", desc: "Flexible Plans & Packages" },
    { label: "Testimonials", target: "testimonials", num: "04", desc: "What Our Clients Say" },
    { label: "Technologies", target: "technologies", num: "05", desc: "Our Modern Tech Stack" },
  ];

  return (
    <>
      {/* Click outside backdrop for desktop dropdown */}
      {isOpen && !isMobile && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-transparent"
        />
      )}

      {/* Dim backdrop for mobile drawer */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
        style={{
          position: isMobile ? "fixed" : "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isScrolled && isMobile
            ? "clamp(10px, 2vw, 16px) clamp(20px, 5vw, 50px)"
            : "clamp(20px, 4vw, 40px) clamp(20px, 5vw, 50px)",
          backgroundColor: "transparent",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          borderBottom: "none",
          boxShadow: "none",
          transition: "padding 0.3s ease",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 1vw, 10px)" }}>
          <img
            src="/wis_logo.png"
            alt="Logo icon"
            style={{
              width: "clamp(26px, 3vw, 32px)",
              height: "clamp(18px, 2.5vw, 23px)",
              objectFit: "contain",
            }}
            className={isScrolled && isMobile ? "" : "brightness-0 invert"}
          />
          <img
            src="/wislogo_text.png"
            alt="Wisbato"
            style={{
              width: "clamp(100px, 12vw, 146px)",
              height: "clamp(14px, 1.8vw, 21px)",
              objectFit: "contain",
            }}
            className={isScrolled && isMobile ? "" : "brightness-0 invert"}
          />
        </div>

        {/* Contact button + toggler container */}
        <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 20px)", position: "relative" }}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              height: "clamp(40px, 5vw, 51px)",
              backgroundColor: "white",
              color: "#222222",
              padding: "0 clamp(16px, 2.5vw, 28px)",
              fontSize: "clamp(14px, 1.8vw, 18px)",
              borderRadius: 8,
              fontWeight: 500,
              fontFamily: "var(--font-montreal), sans-serif",
              cursor: "pointer",
              border: "none",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
            className="hidden md:flex"
          >
            Contact
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: "clamp(40px, 5vw, 56px)",
              height: "clamp(40px, 5vw, 51px)",
              backgroundColor: "white",
              borderRadius: 8,
              cursor: "pointer",
              border: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "clamp(4px, 0.6vw, 6px)",
              padding: "0 clamp(10px, 1.5vw, 14px)",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              zIndex: 51,
            }}
            aria-label="Menu"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: "clamp(6px, 0.9vw, 8.5px)" },
              }}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                height: "clamp(2px, 0.2vw, 2.5px)",
                backgroundColor: "black",
                borderRadius: 999,
              }}
            />
            <motion.span
              variants={{
                closed: { opacity: 1, scaleX: 1 },
                open: { opacity: 0, scaleX: 0 },
              }}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
              style={{
                width: "100%",
                height: "clamp(2px, 0.2vw, 2.5px)",
                backgroundColor: "black",
                borderRadius: 999,
              }}
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: "clamp(-8.5px, -0.9vw, -6px)" },
              }}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                height: "clamp(2px, 0.2vw, 2.5px)",
                backgroundColor: "black",
                borderRadius: 999,
              }}
            />
          </motion.button>

          {/* Desktop Dropdown (white background) */}
          <AnimatePresence>
            {isOpen && !isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 15px)",
                  backgroundColor: "white",
                  borderRadius: 12,
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  padding: "24px 20px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  zIndex: 49,
                }}
                className="right-0 w-[260px] sm:w-[320px] origin-top-right"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={`#${link.target}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      if (link.target === "top") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        document.getElementById(link.target)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="group text-[#222222] hover:text-[#F79135] transition-colors duration-200"
                    style={{
                      fontSize: "clamp(15px, 1.8vw, 17px)",
                      fontWeight: 500,
                      fontFamily: "var(--font-montreal), sans-serif",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 4px",
                    }}
                    whileHover={{ x: 6 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F79135] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Drawer (Reveal from Top to Bottom) */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)", y: -10 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)", y: -10 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#FEF7F0",
              zIndex: 100,
              padding: "clamp(20px, 4vw, 40px) clamp(20px, 5vw, 50px) clamp(24px, 4vw, 36px) clamp(20px, 5vw, 50px)",
              fontFamily: "var(--font-montreal), sans-serif",
            }}
            className="no-scrollbar"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center pb-6 border-b border-black/5 mb-6 flex-shrink-0">
              <div style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 1vw, 10px)" }}>
                <img
                  src="/wis_logo.png"
                  alt="Logo icon"
                  style={{
                    width: "clamp(26px, 3vw, 32px)",
                    height: "clamp(18px, 2.5vw, 23px)",
                    objectFit: "contain",
                  }}
                />
                <img
                  src="/wislogo_text.png"
                  alt="Wisbato"
                  style={{
                    width: "clamp(100px, 12vw, 146px)",
                    height: "clamp(14px, 1.8vw, 21px)",
                    objectFit: "contain",
                  }}
                />
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors duration-200"
                style={{
                  width: "clamp(40px, 5vw, 56px)",
                  height: "clamp(40px, 5vw, 51px)",
                }}
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="#222222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Links List with Staggered Animations */}
            <motion.div 
              variants={menuListVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 overflow-y-auto no-scrollbar flex-grow py-2"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={`#${link.target}`}
                  variants={linkVariants}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (link.target === "top") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      document.getElementById(link.target)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group relative flex items-center justify-between border-b border-black/5 py-3 px-1.5 hover:bg-black/[0.02] rounded-lg transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Serial Number */}
                    <span className="text-[12px] font-medium text-[#F79135] tracking-wider mt-1.5 font-mono">
                      {link.num}
                    </span>
                    
                    {/* Label & Description */}
                    <div className="flex flex-col">
                      <span className="text-[19px] font-medium text-[#222222] group-hover:text-[#F79135] transition-colors duration-300 font-montreal leading-snug">
                        {link.label}
                      </span>
                      <span className="text-[12px] text-[#777777] font-light mt-0.5 tracking-wide">
                        {link.desc}
                      </span>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <motion.span 
                    className="text-[#F79135] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lg"
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>

            {/* Mobile Contact Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="pt-6 border-t border-black/5 mt-auto flex-shrink-0"
            >
              {/* Consultation Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-center gap-2.5"
                style={{
                  height: 50,
                  backgroundColor: "#F79135",
                  color: "white",
                  fontSize: 16,
                  borderRadius: 12,
                  fontWeight: 500,
                  cursor: "pointer",
                  border: "none",
                  boxShadow: "0 4px 14px rgba(247, 145, 53, 0.25)",
                }}
              >
                <span>Get Free Consultation</span>
                <span className="text-lg">→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

