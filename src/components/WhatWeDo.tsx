import { useState, useEffect } from "react";
import FadeInScroll from "./FadeInScroll";

// ─── Service data ────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "01",
    title: "Web Development",
    bullets: [
      "Business websites",
      "E-commerce websites",
      "Landing pages",
      "SEO-ready development",
    ],
    buttonText: "Get Website Quote",
    img: "/web-whatwedo.png",
  },
  {
    id: "02",
    title: "Mobile App Development",
    bullets: [
      "Android & iOS apps",
      "Sales apps",
      "Business management apps",
      "User-friendly UI/UX",
    ],
    buttonText: "Discuss App Idea",
    img: "/mobile-whatwedo.png",
  },
  {
    id: "03",
    title: "Digital Marketing",
    bullets: [
      "Social Media Marketing",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Social media growth",
    ],
    buttonText: "Grow my business",
    img: "/dm-whatwedo.png",
  },
  {
    id: "04",
    title: "Branding",
    bullets: [
      "Logo Design",
      "Brand Identity",
      "Social Media Creatives Brand Assets",
    ],
    buttonText: "Build My Brand",
    img: "/branding-whatewedo.png",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(SERVICES.length - 1);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Automatically cycle through cards every 1.5 seconds, pausing on hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Responsive mobile screen check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (clickedIndex: number) => {
    // Cycle: move the top card to the bottom
    if (clickedIndex === activeIndex) {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }
  };

  // Build the display stack: activeIndex on top, going backwards
  const stack = [];
  for (let i = 0; i < SERVICES.length; i++) {
    const pos = (activeIndex - i + SERVICES.length) % SERVICES.length;
    stack.push({ service: SERVICES[pos], depth: i });
  }
  // Reverse so lowest depth renders last (on top)
  stack.reverse();

  return (
    <section
      id="what-we-do"
      className="relative w-full overflow-x-hidden lg:overflow-hidden flex flex-col pt-12 pb-0 lg:py-0 lg:h-screen"
      style={{
        background: "linear-gradient(180deg, #EB8A32 0%, #EAF7F9 100%)",
      }}
    >
      {/* ── Heading ── */}
      <div className="w-full text-center pt-6 lg:pt-12 px-5 z-20 pointer-events-none lg:absolute lg:top-0 lg:left-0 lg:right-0">
        <FadeInScroll direction="down">
          <h2 
            className="text-center"
            style={{
              color: "#e8dfd1",
              fontFamily: "'Montreal Serial', sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 400,
              lineHeight: "1.1",
            }}
          >
            What We Do
          </h2>
        </FadeInScroll>
      </div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 lg:px-[50px] flex-1 lg:pt-[20px] flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-12 lg:gap-16">

        {/* ── LEFT: illustration ── */}
        <FadeInScroll
          direction="right"
          className="hidden lg:flex flex-shrink-0 w-[85%] sm:w-[60%] lg:w-[600px] justify-center order-2 lg:order-1"
        >
          <img
            src="/what_we_do.png"
            alt="What we do illustration"
            className="w-full h-auto object-contain animate-glow-whatwedo"
          />
        </FadeInScroll>

        {/* ── RIGHT: fanned card deck ── */}
        <FadeInScroll
          direction="left"
          className="w-full flex-1 flex flex-col items-center lg:items-end order-1 lg:order-2 z-10 pt-[40px] lg:pt-0"
        >
          {/* Card stack */}
          <div
            className="relative w-full max-w-[668px] cursor-pointer h-[320px] sm:h-[400px] lg:h-[420px] transition-transform duration-300"
            onClick={() => handleCardClick(activeIndex)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {stack.map(({ service, depth }) => {
              const isTop = depth === SERVICES.length - 1;
              const stackDepth = SERVICES.length - 1 - depth;
              
              // Uniform fan rotation (opposite side)
              const rotDeg = stackDepth * (isMobile ? -3 : -4.5);
              
              // Tighter, controlled fan offsets (Up and Left)
              const fanX = stackDepth * (isMobile ? -8 : -12);
              const fanY = stackDepth * (isMobile ? -8 : -12);
              
              // Mathematically balance the center of mass
              const maxFanX = (SERVICES.length - 1) * (isMobile ? -8 : -12);
              const maxFanY = (SERVICES.length - 1) * (isMobile ? -8 : -12);
              
              const offsetX = fanX - (maxFanX / 2);
              const offsetY = fanY - (maxFanY / 2);

              const zIndex = depth;
              const opacity = 0.55 + depth * 0.09;
              const scale = isTop ? 1 : 0.88 + depth * 0.025;

              return (
                <div
                  key={service.id}
                  className="absolute left-0 top-0 w-full transition-all duration-500"
                  style={{
                    zIndex,
                    transform: `translateX(${offsetX}px) translateY(${offsetY}px) scale(${scale}) rotate(${rotDeg}deg)`,
                    transformOrigin: "center",
                  }}
                >
                  <ServiceCard
                    service={service}
                    isTop={isTop}
                    opacity={opacity}
                    isMobile={isMobile}
                  />
                </div>
              );
            })}
          </div>
        </FadeInScroll>

        {/* ── Mobile/Tablet Illustration: displayed after the cards, flush at bottom ── */}
        <FadeInScroll
          direction="up"
          className="flex lg:hidden flex-shrink-0 w-[85%] sm:w-[60%] justify-center order-3 mt-auto"
        >
          <img
            src="/what_we_do.png"
            alt="What we do illustration"
            className="w-full h-auto object-contain block animate-glow-whatwedo"
            style={{ display: 'block', margin: 0, padding: 0 }}
          />
        </FadeInScroll>

      </div>
    </section>
  );
}


// ─── Individual Service Card ──────────────────────────────────────────────────
function ServiceCard({ 
  service, 
  isTop, 
  opacity,
  isMobile
}: { 
  service: any; 
  isTop: boolean; 
  opacity: number;
  isMobile: boolean;
}) {
  return (
    <div
      className="flex flex-col w-full"
      style={{
        maxWidth: "667.965px",
        minHeight: isMobile ? "290px" : "381.922px",
        padding: isMobile 
          ? "14px 14px 14px 20px" 
          : "17.578px 15.98px 17.578px 31.96px",
        gap: isMobile ? "6px" : "7.99px",
        borderRadius: "7.99px",
        background: "rgba(255, 255, 255, 0.50)",
        backdropFilter: isTop ? "blur(8px)" : "none",
        WebkitBackdropFilter: isTop ? "blur(8px)" : "none",
        border: isTop
          ? "1px solid rgba(255,255,255,0.85)"
          : "1px solid rgba(255,255,255,0.3)",
        boxShadow: isTop
          ? "0 8px 32px rgba(235,138,50,0.18)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        opacity: opacity,
        margin: 0,
      }}
    >
      {/* Card header */}
      <div className="flex flex-col" style={{ gap: isMobile ? "6px" : "12px", margin: 0, padding: 0 }}>
        <div className="flex items-center justify-between" style={{ margin: 0, padding: 0 }}>
          <span
            className="text-[#222] leading-none"
            style={{
              fontFamily: "'Montreal Serial', 'Playfair Display', Georgia, serif",
              fontSize: isMobile ? "24px" : "clamp(28px, 4vw, 40px)",
              fontWeight: 400,
              margin: 0,
              padding: 0,
            }}
          >
            {service.id}.
          </span>
          <img
            src={service.img}
            alt={service.title}
            className="rounded-md object-cover"
            style={{ 
              width: isMobile ? "55px" : "82px", 
              height: isMobile ? "45px" : "68px", 
              margin: 0, 
              padding: 0 
            }}
          />
        </div>
        <div
          className="w-full border-t"
          style={{ borderColor: "rgba(102,102,102,0.4)", margin: 0, padding: 0 }}
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col" style={{ gap: isMobile ? "6px" : "12px", margin: 0, padding: 0 }}>
        <h3
          className="text-[#111]"
          style={{
            fontFamily: "'Montreal Serial', 'Playfair Display', Georgia, serif",
            fontSize: isMobile ? "18px" : "clamp(20px, 2.5vw, 27px)",
            fontWeight: 400,
            lineHeight: 1.2,
            margin: 0,
            padding: 0,
          }}
        >
          {service.title}
        </h3>

        {isTop && (
          <ul className="flex flex-col list-disc" style={{ gap: isMobile ? "2px" : "4px", margin: 0, padding: 0, paddingLeft: "20px" }}>
            {service.bullets.map((bullet: string, i: number) => (
              <li
                key={i}
                className="text-[#333] leading-relaxed"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: isMobile ? "12px" : "14px",
                  fontWeight: 300,
                  margin: 0,
                  padding: 0,
                }}
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA — only on top card */}
      {isTop && (
        <div style={{ margin: 0, marginTop: isMobile ? "10px" : "16px", padding: 0 }}>
          <button
            className="relative flex items-center justify-center cursor-pointer border-none overflow-hidden"
            style={{
              width: isMobile ? "180px" : "224.802px",
              height: isMobile ? "36px" : "41.864px",
              borderRadius: "13.083px",
              background: "#F79135",
              margin: 0,
              padding: 0,
            }}
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* White pill with orange arrow */}
            <div
              className="absolute left-[4px] bg-white flex items-center justify-center"
              style={{
                width: isMobile ? "36px" : "44px",
                height: isMobile ? "28px" : "34px",
                borderRadius: "10px",
                margin: 0,
                padding: 0,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F79135" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: 0, padding: 0 }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            
            {/* Button Text */}
            <span
              style={{
                color: "#FFF",
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: isMobile ? "13px" : "15.699px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginLeft: isMobile ? "24px" : "30px", // Offset for the absolute pill
                padding: 0,
                margin: isMobile ? "0 0 0 24px" : "0 0 0 30px", // Strict enforce
              }}
            >
              {service.buttonText}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
