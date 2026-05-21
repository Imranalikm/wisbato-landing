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
    <section className="relative w-full min-h-screen lg:h-[822px] bg-[#F79135] overflow-hidden font-montreal flex flex-col justify-center lg:block pt-32 pb-0 lg:p-0">
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
      <div className="relative z-20 w-full max-w-[1440px] mx-auto flex-1 flex flex-col px-6 md:px-12 lg:px-20 lg:block">
        
        {/* ── Text Group ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full lg:w-auto lg:contents flex flex-col items-center lg:items-start"
        >
          {/* ── Tagline ── */}
          <motion.p
            variants={fadeUp}
            className="text-white/85 font-medium text-[15px] xs:text-[17px] sm:text-lg md:text-[22px] lg:text-[24px] xl:text-[30px] 2xl:text-[36px] tracking-normal capitalize lg:absolute lg:left-20 lg:top-[168px] mb-6 lg:mb-0 lg:leading-none text-center lg:text-left"
          >
            Website . Branding. App. Digital Marketing Solution
          </motion.p>

          {/* ── Heading ── */}
          <div className="w-full lg:absolute lg:left-20 lg:top-[229px] lg:w-[520px] xl:w-[700px] 2xl:w-[841px]">
            <motion.h1
              variants={fadeUp}
              className="font-normal tracking-tight leading-[1.05] lg:leading-[85px] xl:leading-[110px] 2xl:leading-[135px] text-[3.4rem] xs:text-[3.9rem] sm:text-[4.5rem] md:text-[5.2rem] lg:text-[85px] xl:text-[115px] 2xl:text-[140px] uppercase break-words select-none text-center lg:text-left"
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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#FBFBFB] rounded-[10px] sm:rounded-[15px] flex items-center gap-1.5 sm:gap-3 lg:gap-4 px-2 py-1.5 sm:px-2.5 sm:py-2 lg:p-[6px_10px] cursor-pointer shadow-md lg:absolute lg:left-20 lg:top-[689px] lg:w-[340px] lg:h-[64px] w-fit lg:max-w-none mt-10 xs:mt-12 sm:mt-10 lg:mt-0 self-center lg:self-start"
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 lg:w-[61px] lg:h-[52px] bg-[#F79135] rounded-[8px] sm:rounded-[10px] lg:rounded-[15px] flex-shrink-0 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 sm:w-4 h-4 lg:w-6 lg:h-6"
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
            <span className="text-[#222222] text-[11px] sm:text-[13px] lg:text-[16px] font-medium pr-1 sm:pr-2 whitespace-nowrap">
              Book Free Consultation Call
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Hero Image Wrapper ── */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="relative w-full h-full max-w-[1440px] mx-auto lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 lg:right-0 lg:left-auto lg:bottom-0 lg:w-[360px] lg:h-[480px] xl:w-[440px] xl:h-[560px] 2xl:w-[500px] 2xl:h-[630px] w-full flex justify-center lg:block overflow-hidden h-[380px] xs:h-[420px] sm:h-[460px]"
          >
            <motion.img
              animate={floatAnimation}
              src="/hero_image-original.png"
              alt="Hero Visual"
              className="w-full h-[260%] xs:h-[280%] sm:h-[300%] object-cover object-[center_top] lg:w-full lg:h-[165%] lg:object-cover lg:object-[center_30%]"
              style={{
                filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.12))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


