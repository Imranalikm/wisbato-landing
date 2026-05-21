import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable body scroll when preloader is active
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const duration = 1600; // 1.6 seconds for preloader count-up

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressValue = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(progressValue);

      if (progressValue >= 100) {
        clearInterval(timer);
        // Short delay to let the user see 100% and then trigger exit animation
        setTimeout(() => {
          onComplete();
        }, 200);
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  // Restore scrolling on cleanup/unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100vh",
        transition: {
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1], // Premium easing
        },
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "#FEF7F0", // Light theme background
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Logo Brand Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(10px, 2vw, 20px)",
            marginBottom: "clamp(30px, 4vw, 50px)",
          }}
        >
          {/* Logo Icon */}
          <motion.img
            src="/wis_logo.png"
            alt="Wisbato Logo Icon"
            className="brightness-0"
            style={{
              width: "clamp(40px, 6vw, 64px)",
              height: "auto",
              objectFit: "contain",
            }}
            initial={{ scale: 0.2, opacity: 0, rotate: -60 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1], // overshoot spring
            }}
          />

          {/* Masked reveal container for Logo Text */}
          <div style={{ overflow: "hidden", display: "flex", alignItems: "center" }}>
            <motion.img
              src="/wislogo_text.png"
              alt="Wisbato Logo Text"
              className="brightness-0"
              style={{
                width: "clamp(120px, 18vw, 192px)",
                height: "auto",
                objectFit: "contain",
              }}
              initial={{ x: "-105%" }}
              animate={{
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </div>

        {/* Loading Indicator Group */}
        <div
          style={{
            width: "clamp(160px, 25vw, 240px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Percentage */}
          <span
            style={{
              fontFamily: "var(--font-montreal), sans-serif",
              fontSize: "clamp(14px, 2vw, 18px)",
              fontWeight: 500,
              color: "#F79135",
              letterSpacing: "0.15em",
            }}
          >
            {progress}%
          </span>

          {/* Progress Track */}
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "rgba(34, 34, 34, 0.08)",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            {/* Progress Fill */}
            <motion.div
              style={{
                height: "100%",
                backgroundColor: "#F79135",
                width: `${progress}%`,
              }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
