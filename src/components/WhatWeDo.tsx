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
    img: "/stack_card_image.png",
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
    img: "/stack_card_image.png",
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
    img: "/stack_card_image.png",
  },
  {
    id: "04",
    title: "Branding",
    bullets: [
      "Logo Design",
      "Brand Identity",
      "Social Media Creatives Brand Assets",
    ],
    buttonText: "Get Website Qoute",
    img: "/stack_card_image.png",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(SERVICES.length - 1);

  // Automatically cycle through cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 4000);
    return () => clearInterval(interval);
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
      className="relative w-full overflow-x-hidden lg:overflow-hidden flex flex-col py-20 lg:py-0 lg:h-screen"
      style={{
        background: "linear-gradient(180deg, #EB8A32 0%, #EAF7F9 100%)",
      }}
    >
      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 lg:px-[50px] flex-1 lg:pt-[80px] flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-12 lg:gap-16">

        {/* ── LEFT: illustration ── */}
        <FadeInScroll
          direction="right"
          className="hidden lg:flex flex-shrink-0 w-[85%] sm:w-[60%] lg:w-[600px] justify-center order-2 lg:order-1 mt-auto"
        >
          <img
            src="/what_we_do.png"
            alt="What we do illustration"
            className="w-full h-auto object-contain"
          />
        </FadeInScroll>

        {/* ── RIGHT: fanned card deck ── */}
        <FadeInScroll
          direction="left"
          className="w-full flex-1 flex flex-col items-center self-center order-1 lg:order-2 z-10 my-auto pt-[50px] lg:pt-0"
        >
          {/* Card stack */}
          <div
            className="relative w-full max-w-[668px] cursor-pointer h-[340px] sm:h-[400px] lg:h-[420px] scale-75 sm:scale-[0.85] lg:scale-100 origin-center transition-transform duration-300"
            onClick={() => handleCardClick(activeIndex)}
          >
            {stack.map(({ service, depth }) => {
              const isTop = depth === SERVICES.length - 1;
              const stackDepth = SERVICES.length - 1 - depth;
              
              // Uniform fan rotation (opposite side)
              const rotDeg = stackDepth * -4.5;
              
              // Tighter, controlled fan offsets (Up and Left)
              const fanX = stackDepth * -12;
              const fanY = stackDepth * -12;
              
              // Mathematically balance the center of mass
              const maxFanX = (SERVICES.length - 1) * -12;
              const maxFanY = (SERVICES.length - 1) * -12;
              
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
                  />
                </div>
              );
            })}
          </div>
        </FadeInScroll>

      </div>
    </section>
  );
}

// ─── Individual Service Card ──────────────────────────────────────────────────
function ServiceCard({ service, isTop, opacity }: { service: any, isTop: boolean, opacity: number }) {
  return (
    <div
      className="flex flex-col w-full"
      style={{
        maxWidth: "667.965px",
        minHeight: "381.922px",
        padding: "17.578px 15.98px 17.578px 31.96px",
        gap: "7.99px",
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
      <div className="flex flex-col" style={{ gap: "12px", margin: 0, padding: 0 }}>
        <div className="flex items-center justify-between" style={{ margin: 0, padding: 0 }}>
          <span
            className="text-[#222] leading-none"
            style={{
              fontFamily: "'Montreal Serial', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 40px)",
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
            style={{ width: "82px", height: "68px", margin: 0, padding: 0 }}
          />
        </div>
        <div
          className="w-full border-t"
          style={{ borderColor: "rgba(102,102,102,0.4)", margin: 0, padding: 0 }}
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col" style={{ gap: "12px", margin: 0, padding: 0 }}>
        <h3
          className="text-[#111]"
          style={{
            fontFamily: "'Montreal Serial', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(20px, 2.5vw, 27px)",
            fontWeight: 400,
            lineHeight: 1.2,
            margin: 0,
            padding: 0,
          }}
        >
          {service.title}
        </h3>

        {isTop && (
          <ul className="flex flex-col list-disc" style={{ gap: "4px", margin: 0, padding: 0, paddingLeft: "24px" }}>
            {service.bullets.map((bullet: string, i: number) => (
              <li
                key={i}
                className="text-[#333] leading-relaxed"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
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
        <div style={{ margin: 0, marginTop: "16px", padding: 0 }}>
          <button
            className="relative flex items-center justify-center cursor-pointer border-none overflow-hidden"
            style={{
              width: "224.802px",
              height: "41.864px",
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
                width: "44px",
                height: "34px",
                borderRadius: "10px",
                margin: 0,
                padding: 0,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F79135" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: 0, padding: 0 }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
            
            {/* Button Text */}
            <span
              style={{
                color: "#FFF",
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "15.699px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginLeft: "30px", // Offset for the absolute pill
                padding: 0,
                margin: "0 0 0 30px", // Strict enforce
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
