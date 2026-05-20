import { motion } from "framer-motion";

/* ── Motion Variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatAnimation: any = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[750px] lg:h-[822px] bg-[#F79135] overflow-hidden font-montreal flex flex-col justify-center lg:block pt-36 pb-16 lg:p-0">
      {/* ── Concentric circles from Figma ── */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute hidden lg:block pointer-events-none select-none"
        style={{
          width: 1000,
          height: 1000,
          left: 220,
          top: 320,
          background: "#FFBF86",
          borderRadius: "50%",
        }}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        className="absolute hidden lg:block pointer-events-none select-none"
        style={{
          width: 850,
          height: 850,
          left: 295,
          top: 395,
          background: "#F4B072",
          borderRadius: "50%",
        }}
      />
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute hidden lg:block pointer-events-none select-none"
        style={{
          width: 700,
          height: 700,
          left: 370,
          top: 470,
          background: "#FFA554",
          borderRadius: "50%",
        }}
      />

      {/* ── Mobile decorative background elements ── */}
      <div className="absolute lg:hidden inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[150vw] aspect-square -bottom-[30%] -right-[20%] rounded-full bg-[#F4B072] opacity-60" />
        <div className="absolute w-[120vw] aspect-square -bottom-[40%] -right-[30%] rounded-full bg-[#FFA554] opacity-80" />
      </div>

      {/* ── Content Area ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full px-6 md:px-12 lg:px-20 flex flex-col lg:block">
        
        {/* ── Text Group ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-auto lg:contents"
        >
          {/* ── Tagline ── */}
          <motion.p
            variants={fadeUp}
            className="text-white/85 font-medium text-base md:text-2xl lg:text-[36px] tracking-normal uppercase md:capitalize lg:absolute lg:left-20 lg:top-[168px] mb-4 lg:mb-0 lg:leading-none"
          >
            Website . Branding. App. Digital Marketing Solution
          </motion.p>

          {/* ── Heading ── */}
          <div className="lg:absolute lg:left-20 lg:top-[229px] lg:w-[841px]">
            <motion.h1
              variants={fadeUp}
              className="font-normal tracking-tight leading-[1] lg:leading-[135px] text-[2.8rem] sm:text-[4rem] md:text-[6rem] lg:text-[140px] uppercase break-words select-none"
              style={{
                textShadow: "0 2px 20px rgba(0,0,0,0.05)",
                color: "rgba(255, 255, 255, 0.70)",
              }}
            >
              GROW YOUR BUSINESS ONLINE
            </motion.h1>
          </div>

          {/* ── CTA Button ── */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#FBFBFB] rounded-[15px] flex items-center gap-4 px-2 py-2 lg:p-[6px_10px] cursor-pointer shadow-md lg:absolute lg:left-20 lg:top-[689px] lg:w-[307px] lg:h-[64px] w-full max-w-xs mt-12 lg:mt-0 self-start"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 lg:w-[61px] lg:h-[52px] bg-[#F79135] rounded-[12px] lg:rounded-[15px] flex-shrink-0 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <span className="text-[#222222] text-sm sm:text-base lg:text-[18px] font-medium pr-2">
              Book Free Consultation Call
            </span>
          </motion.div>
        </motion.div>

        {/* ── Hero Image ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative mt-12 lg:mt-0 lg:absolute lg:left-[977px] lg:top-[229px] lg:w-[416px] lg:h-[592px] w-full max-w-[380px] lg:max-w-none mx-auto lg:mx-0 flex justify-center lg:block"
        >
          <motion.img
            animate={floatAnimation}
            src="/hero_image.png"
            alt="Hero Visual"
            className="w-full h-full object-contain lg:object-cover"
            style={{
              filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.12))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


