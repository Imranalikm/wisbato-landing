import { useState, useEffect } from "react";
import FadeInScroll from "./FadeInScroll";

const TIERS = [
  {
    name: "CORE",
    color: "#0B0914",
    price: "₹50000",
    features: [
      "5 Pages website",
      "Domain & Hosting With Maintenance",
      "Google Business Page (Create or Handling)",
      "SEO Keywords Package 3",
      "SSL Certificate",
    ],
  },
  {
    name: "GROWTH",
    color: "#F79135",
    price: "₹65000",
    features: [
      "10 Pages website",
      "Domain & Hosting With Maintenance",
      "Google Business Page (Create or Handling)",
      "SEO Keywords Package 4",
      "SSL Certificate",
    ],
  },
  {
    name: "PRO",
    color: "#FF0000",
    price: "₹80000",
    features: [
      "15 Pages website",
      "Domain & Hosting With Maintenance",
      "Google Business Page (Create or Handling)",
      "SEO Keywords Package 5",
      "SSL Certificate",
      "Digital Visiting Card",
    ],
  },
  {
    name: "ELITE",
    color: "#A38908",
    price: "₹95000",
    features: [
      "15 Pages website",
      "Domain & Hosting With Maintenance",
      "Google Business Page (Create or Handling)",
      "SEO Keywords Package 5",
      "SSL Certificate",
      "Digital Visiting Card",
    ],
  },
];

export default function PricingSection() {
  const [currentTier, setCurrentTier] = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const navigate = (direction: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimDir(direction);
    setTimeout(() => {
      setCurrentTier((prev) => {
        if (direction === "left") return prev === 0 ? TIERS.length - 1 : prev - 1;
        return prev === TIERS.length - 1 ? 0 : prev + 1;
      });
      setAnimDir(null);
      setTimeout(() => setIsAnimating(false), 20);
    }, 220);
  };

  // Auto-advance slides every 3 seconds (pausing on hover)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      navigate("right");
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, isAnimating]);

  const tier = TIERS[currentTier];

  return (
    <section id="pricing" className="relative w-full bg-[#EAE6DD] px-4 md:px-8 lg:px-[50px] py-20 pb-28 flex justify-center overflow-hidden">
      <div className="max-w-[1300px] w-full flex flex-col xl:flex-row items-center xl:items-center justify-between gap-8 xl:gap-[30px]">
        
        {/* ── LEFT: Text Content ── */}
        <FadeInScroll direction="right" className="flex flex-col gap-12 xl:gap-[130px] max-w-[300px] w-full pt-4 flex-shrink-0">
          <div className="flex flex-col gap-6">
            <h2
              className="text-[#171325] leading-[1.1]"
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "clamp(36px, 5vw, 50px)",
                fontWeight: 400,
              }}
            >
              Built for Businesses Ready to Scale Online
            </h2>
            <p
              className="text-[#6B6B6B]"
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontWeight: 400,
                lineHeight: "1.4",
              }}
            >
              Every business is different. That’s why we build custom website and
              SEO solutions focused on visibility, lead generation, and long-term
              growth.
            </p>
          </div>
          <a
            href="https://www.wisbato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B6B6B] hover:text-[#F79135] transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "24px",
              fontWeight: 400,
            }}
          >
            www.wisbato.com
          </a>
        </FadeInScroll>

        {/* ── RIGHT: Carousel Area ── */}
        <div 
          className="flex flex-col xl:flex-row items-center justify-center flex-1 gap-6 xl:gap-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Desktop Left Arrow */}
          <button
            onClick={() => navigate("left")}
            className="hidden xl:flex w-[50px] h-[50px] rounded-full bg-white items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-transform hover:scale-105"
            aria-label="Previous tier"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards Wrapper */}
          <div className="relative flex flex-col md:flex-row items-center gap-6 xl:gap-[24px]">
            
            {/* Quote Card (Orange) - Static */}
            <FadeInScroll direction="up">
              <div
                className="relative flex-shrink-0 w-[min(100vw-32px,360px)] h-[634px] rounded-[19px] overflow-hidden flex flex-col"
                style={{ background: "#F79135" }}
              >
                <div className="p-8 flex flex-col gap-6 relative z-10">
                  <h3
                    className="text-white leading-[1.1]"
                    style={{
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontSize: "30px",
                      fontWeight: 500,
                    }}
                  >
                    Get a Custom Quote Based on Your Requirements
                  </h3>
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "1.4",
                    }}
                  >
                    Every business has unique goals. After understanding your requirements,
                    features, and growth plans, our team will provide the right solution and
                    accurate pricing tailored for your business.
                  </p>
                  <p
                    className="text-white mt-4"
                    style={{
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "1.4",
                    }}
                  >
                    Tell us your requirement → Get the right plan for your business
                  </p>
                </div>
                {/* Image at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[264px]">
                  <img
                    src="/pricing_image.png"
                    alt="Business consultant"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </FadeInScroll>

            {/* Pricing Card (White) - Animated */}
            <FadeInScroll direction="up" delay={0.15}>
              <div
                className="relative flex-shrink-0 w-[min(100vw-32px,360px)] h-[634px] rounded-[19px] overflow-hidden bg-white"
                style={{ padding: "36px 30px" }}
              >
                <div
                  className="flex flex-col h-full w-full"
                  style={{
                    opacity: animDir ? 0 : 1,
                    transform: animDir
                      ? `translateX(${animDir === "right" ? "20px" : "-20px"})`
                      : "translateX(0)",
                    transition: "opacity 0.22s ease, transform 0.22s ease",
                  }}
                >
                  {/* Header: Icon + Name */}
                  <div className="flex items-center gap-3 mb-8">
                    <img
                      src="/Wisbato Icon copy 7 (1).png"
                      alt="Wisbato Icon"
                      className="w-[34px] h-[34px] object-contain"
                    />
                    <h3
                      style={{
                        color: tier.color,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "30.4px",
                        fontWeight: 700,
                        lineHeight: "1",
                      }}
                    >
                      {tier.name}
                    </h3>
                  </div>

                  <p
                    className="mb-6"
                    style={{
                      color: "#A9A9AA",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "20.9px",
                      fontWeight: 400,
                    }}
                  >
                    What You’ll Get
                  </p>

                  {/* Features List */}
                  <div className="flex flex-col gap-3 mb-auto">
                    {tier.features.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-[22.8px] h-[22.8px] bg-[#35353F] rounded-full flex items-center justify-center mt-[2px]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span
                          style={{
                            color: "#35353F",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "17.1px",
                            fontWeight: 400,
                            lineHeight: "1.2",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags area */}
                  <div className="flex flex-col gap-2 mt-6 mb-4">
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {["Home Page", "About Page", "Contact Us Form"].map((tag) => (
                        <span key={tag} className="text-[#6B6B6B] text-[13px] font-['Inter']">{tag}</span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {["Services Pages", "Responsive Website"].map((tag) => (
                        <span key={tag} className="text-[#6B6B6B] text-[13px] font-['Inter']">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Dashed Divider */}
                  <div className="w-full border-t border-dashed border-[#A9A9AA] mb-6"></div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div
                      style={{
                        color: "#0B0914",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "30.4px",
                        fontWeight: 700,
                      }}
                    >
                      {tier.price}<span className="text-[20px] font-normal">/</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-4">
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="bg-[#F79135] text-white rounded-full hover:bg-[#e07a22] transition-colors flex items-center justify-between p-1 pl-[5px]"
                      style={{
                        width: "100%",
                        maxWidth: "240px",
                        height: "46px",
                        fontFamily: "'Montreal Serial', sans-serif",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F79135" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                      <span className="flex-1 text-center pr-3">Get My Custom Quote</span>
                    </button>
                  </div>

                </div>
              </div>
            </FadeInScroll>

          </div>

          {/* Desktop Right Arrow */}
          <button
            onClick={() => navigate("right")}
            className="hidden xl:flex w-[50px] h-[50px] rounded-full bg-white items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-gray-50 transition-transform hover:scale-105"
            aria-label="Next tier"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          
          {/* Mobile Navigation Arrows */}
          <div className="flex xl:hidden gap-6 mt-4 justify-center w-full">
            <button
              onClick={() => navigate("left")}
              className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
              aria-label="Previous tier"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => navigate("right")}
              className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
              aria-label="Next tier"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
        {TIERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (currentTier === idx || isAnimating) return;
              setIsAnimating(true);
              setAnimDir(idx > currentTier ? "right" : "left");
              setTimeout(() => {
                setCurrentTier(idx);
                setAnimDir(null);
                setTimeout(() => setIsAnimating(false), 20);
              }, 220);
            }}
            className={`h-[10px] rounded-full transition-all duration-300 ${
              currentTier === idx ? "w-[80px] bg-white shadow-sm" : "w-[30px] bg-[#B0AAA0] hover:bg-[#9c968c]"
            }`}
            aria-label={`Go to tier ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
