import { useState, useEffect } from "react";
import FadeInScroll from "./FadeInScroll";

const PORTFOLIO_DATA = [
  {
    id: "01",
    title: "Dream town",
    category: "Construction & Interior Design Website",
    description:
      "A modern corporate website designed for Shelter Creation to showcase construction, architecture, and interior design services with a clean user experience, responsive layouts, and strong visual presentation.",
    img: "/dream land 1.png",
  },
  {
    id: "02",
    title: "Milans Gym",
    category: "Construction & Interior Design Website",
    description:
      "A modern corporate website designed for Shelter Creation to showcase construction, architecture, and interior design services with a clean user experience, responsive layouts, and strong visual presentation.",
    img: "/milan 001 1.png",
  },
  {
    id: "03",
    title: "Brookinton",
    category: "Language Academy Platform",
    description:
      "Master any language with elite native trainers. A comprehensive educational platform with booking systems, live classes, and interactive learning tools designed for global students.",
    img: "/brook01 1.png",
  },
  {
    id: "04",
    title: "Shelter Creation",
    category: "Architecture & Real Estate Website",
    description:
      "A visually stunning platform highlighting architectural excellence. Features include dynamic project galleries, immersive 3D tours, and seamless lead generation for premium real estate clients.",
    img: "/shelter creations.png",
  },
];

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = (getNextIndex: (prev: number) => number) => {
    if (isFading) return; // Prevent rapid clicks
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(getNextIndex);
      setTimeout(() => setIsFading(false), 50);
    }, 400); // Match the CSS transition duration
  };

  const nextSlide = () => {
    changeSlide((prev) => (prev + 1) % PORTFOLIO_DATA.length);
  };

  const prevSlide = () => {
    changeSlide((prev) => (prev - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((prev) => (prev + 1) % PORTFOLIO_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isFading]);

  const currentProject = PORTFOLIO_DATA[currentIndex];

  return (
    <section id="portfolio" className="relative w-full bg-[#EAE6DD] py-20 lg:py-28 overflow-hidden font-montreal">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[50px]">
        {/* Header Row */}
        <FadeInScroll direction="up">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-10">
          <h2
            className="text-[#222] max-w-[800px]"
            style={{
              fontFamily: "'Montreal Serial', sans-serif",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "110%", /* 44px */
            }}
          >
            Showcasing Modern Digital Experiences Designed for Business Growth and Success
          </h2>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 flex items-center gap-4 bg-[#F79135] text-white px-2.5 py-2.5 rounded-[15px] text-lg cursor-pointer transition-transform hover:scale-105"
          >
            {/* White pill with orange arrow */}
            <div className="bg-white rounded-full flex items-center justify-center" style={{ width: '60.917px', height: '38px' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F79135"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span className="pr-2 font-montreal font-medium">Get free Consultation</span>
          </button>
        </div>
        </FadeInScroll>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-[#D4D0C5] mb-12"></div>

        {/* Navigation Arrows */}
        <FadeInScroll direction="up" delay={0.1}>
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <button
              onClick={prevSlide}
              className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer transition-transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </FadeInScroll>

        {/* Carousel Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left: Device Image */}
          <FadeInScroll
            direction="right"
            className="w-full lg:w-[60%] flex justify-center items-center"
          >
            <div
              className="w-full flex justify-center items-center"
              style={{
                opacity: isFading ? 0 : 1,
                transform: isFading ? 'translateX(-40px)' : 'translateX(0)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              {/* Aspect ratio container for the device mockup */}
              <div className="relative w-full max-w-[800px] aspect-[4/3] bg-[#EAE6DD] overflow-hidden flex items-center justify-center">
                <img
                  key={currentProject.img}
                  src={currentProject.img}
                  alt={currentProject.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if image not found
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/800x600/e2e8f0/475569?text=Device+Mockup";
                  }}
                />
              </div>
            </div>
          </FadeInScroll>

          {/* Right: Project Details Card */}
          <FadeInScroll
            direction="left"
            className="w-full lg:w-[40%] flex justify-center lg:justify-end"
            delay={0.15}
          >
            <div
              className="w-full flex justify-center lg:justify-end"
              style={{
                opacity: isFading ? 0 : 1,
                transform: isFading ? 'translateX(40px)' : 'translateX(0)',
                transition: 'opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s',
              }}
            >
              <div
                className="w-full max-w-[500px] flex flex-col items-center p-8 lg:p-14"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.50)',
                  gap: '10px',
                }}
              >
                {/* Number and Line */}
                <div className="flex flex-col gap-4 w-full">
                  <span className="text-[#222] text-5xl lg:text-[70px] font-light leading-none">
                    {currentProject.id}.
                  </span>
                  <div className="w-full h-[1px] bg-[#222]"></div>
                </div>

                {/* Title (heading) */}
                <div className="flex flex-col gap-2 mt-2 w-full">
                  <h3
                    style={{
                      color: '#111',
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontSize: '34px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '34px',
                    }}
                    className="!text-[26px] !leading-[26px] lg:!text-[34px] lg:!leading-[34px]"
                  >
                    {currentProject.title}
                  </h3>
                  {/* Subheading (category) */}
                  <p
                    style={{
                      color: '#111',
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 400,
                    }}
                    className="text-[15px] leading-[18px] lg:text-[18px] lg:leading-[21px]"
                  >
                    {currentProject.category}
                  </p>
                </div>

                {/* Description (content) */}
                <p
                  style={{
                    color: '#222',
                    fontFamily: "'Montreal Serial', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 300,
                    lineHeight: 'normal',
                  }}
                  className="text-[15px] lg:text-[18px] mt-2 w-full"
                >
                  {currentProject.description}
                </p>
              </div>
            </div>
          </FadeInScroll>
        </div>
      </div>
    </section>
  );
}
