import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "clamp(20px, 4vw, 40px) clamp(20px, 5vw, 50px)",
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
          className="brightness-0 invert"
        />
        <img
          src="/wislogo_text.png"
          alt="Wisbato"
          style={{
            width: "clamp(100px, 12vw, 146px)",
            height: "clamp(14px, 1.8vw, 21px)",
            objectFit: "contain",
          }}
          className="brightness-0 invert"
        />
      </div>

      {/* Contact button + icon */}
      <div style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 2vw, 20px)" }}>
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
          }}
        >
          Contact
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
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
          }}
          aria-label="Menu"
        >
          <span style={{ width: "100%", height: "clamp(2px, 0.2vw, 2.5px)", backgroundColor: "black", borderRadius: 999 }}></span>
          <span style={{ width: "100%", height: "clamp(2px, 0.2vw, 2.5px)", backgroundColor: "black", borderRadius: 999 }}></span>
          <span style={{ width: "100%", height: "clamp(2px, 0.2vw, 2.5px)", backgroundColor: "black", borderRadius: 999 }}></span>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

