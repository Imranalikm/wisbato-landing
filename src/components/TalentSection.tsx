import { useState, useEffect, useRef } from "react";
import FadeInScroll from "./FadeInScroll";

// Tool icons as React components

const PremiereIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#00005B" />
    <text x="5" y="16.5" fill="#EA76FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Pr</text>
  </svg>
);

const AEIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#00005B" />
    <text x="5" y="16.5" fill="#9999FF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Ae</text>
  </svg>
);

const LinuxIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-1">
    <circle cx="12" cy="12" r="10" fill="#222222" />
    <circle cx="12" cy="13.5" r="6.5" fill="white" />
    <circle cx="10" cy="9" r="1" fill="white" />
    <circle cx="14" cy="9" r="1" fill="white" />
    <circle cx="10" cy="9" r="0.4" fill="black" />
    <circle cx="14" cy="9" r="0.4" fill="black" />
    <polygon points="11,10 13,10 12,11.5" fill="#FCC624" />
    <path d="M9 19c-1 0-2-.5-2-1s1.5-1 2-1M15 19c1 0 2-.5 2-1s-1.5-1-2-1" stroke="#FCC624" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WindowsIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-2.5">
    <path d="M3 5.5L10.5 4.5v7H3V5.5zm0 7.5h7.5v7L3 19v-6zm8.5-8.7L21 3v8.7h-9.5V4.3zm0 8.7H21V21l-9.5-1.3v-7z" fill="white" />
  </svg>
);

const getToolBg = (tool: string) => {
  switch (tool) {
    case "figma": return "bg-white shadow-sm";
    case "xd": return "bg-[#2C001E]";
    case "react": return "bg-[#001D25]";
    case "node": return "bg-white shadow-sm";
    case "js": return "bg-[#F0DB4F]";
    case "php": return "bg-black";
    case "csharp": return "bg-[#390091]";
    case "googleads": return "bg-white shadow-sm";
    case "meta": return "bg-white shadow-sm";
    case "premiere": return "bg-[#00005B]";
    case "ae": return "bg-[#00005B]";
    case "linux": return "bg-[#FCC624]";
    case "windows": return "bg-[#0078D4]";
    default: return "bg-white";
  }
};

const renderToolIcon = (tool: string) => {
  switch (tool) {
    case "figma": return <img src="/figma.png" alt="" className="w-full h-full object-cover p-2" />;
    case "xd": return <img src="/xd.png" alt="" className="w-full h-full object-cover" />;
    case "react": return <img src="/react.png" alt="" className="w-full h-full object-cover p-1.5" />;
    case "node": return <img src="/node.js.png" alt="" className="w-full h-full object-cover p-1.5" />;
    case "js": return <img src="/js.png" alt="" className="w-full h-full object-cover" />;
    case "php": return <img src="/php.png" alt="" className="w-full h-full object-cover" />;
    case "csharp": return <img src="/csharp.png" alt="" className="w-full h-full object-cover" />;
    case "googleads": return <img src="/google_ads_manager.png" alt="" className="w-full h-full object-cover p-2" />;
    case "meta": return <img src="/meta.png" alt="" className="w-full h-full object-cover p-2" />;
    case "premiere": return <PremiereIcon />;
    case "ae": return <AEIcon />;
    case "linux": return <LinuxIcon />;
    case "windows": return <WindowsIcon />;
    default: return null;
  }
};

const CARDS = [
  {
    id: 1,
    title: "UI/UX Development",
    subtitle: "Easy User Experience",
    avatar: "/ui-ux%20development.png",
    description: "Designs intuitive digital experiences focused on usability, clarity, innovation, and seamless user interaction.",
    tools: ["figma", "xd"]
  },
  {
    id: 2,
    title: "Website Development",
    subtitle: "Modern Technologies",
    avatar: "/web-development.png",
    description: "Building responsive websites using React, HTML, CSS, and modern web technologies for fast and scalable performance.",
    tools: ["react", "node"]
  },
  {
    id: 3,
    title: "Backend Development",
    subtitle: "Server Technologies",
    avatar: "/backend-development.png",
    description: "Building secure backend systems using Node.js, APIs, and databases for scalable digital application performance.",
    tools: ["js", "php", "csharp"]
  },
  {
    id: 4,
    title: "Digital Marketing",
    subtitle: "Growth Strategies",
    avatar: "/digital-marketing.png",
    description: "Driving business growth through SEO, social media marketing, branding, and performance-focused digital campaigns.",
    tools: ["googleads", "meta"]
  },
  {
    id: 5,
    title: "Video Editing",
    subtitle: "Creative Editing",
    avatar: "/video-editing.png",
    description: "Crafting engaging video content, editing, motion graphics, and visual storytelling for digital platforms.",
    tools: ["premiere", "ae"]
  },
  {
    id: 6,
    title: "Technical Support",
    subtitle: "Reliable Assistance",
    avatar: "/technical-support.png",
    description: "Providing 24/7 technical support, system maintenance, troubleshooting, and server management.",
    tools: ["linux", "windows"]
  }
];

export default function TalentSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check screen size on mount and resize to show dynamic mobile layouts
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Duplicate cards list to form a seamless infinite loop for vertical scrolling
  const doubleCards = [...CARDS, ...CARDS];

  const cardsToRender = isDesktop 
    ? doubleCards 
    : (isExpanded ? CARDS : CARDS.slice(0, 3));

  // Set up intersection observer to only scroll when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth vertical scrolling animation loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const scrollSpeed = 35; // Pixels per second

    const step = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      // Only auto-scroll on desktop screens (>=1024px) when intersecting and not hovered
      const isDesktop = window.innerWidth >= 1024;
      if (isIntersecting && !isHovered && isDesktop) {
        container.scrollTop += scrollSpeed * delta;

        // Loop seamlessly once scrolled past half the height (first full set of cards)
        const halfHeight = container.scrollHeight / 2;
        if (container.scrollTop >= halfHeight) {
          container.scrollTop -= halfHeight;
        }
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isIntersecting]);

  return (
    <section id="technologies" ref={sectionRef} className="w-full bg-[#EFEAE2] py-24 px-4 md:px-8 lg:px-[50px]">
      <div className="max-w-[1340px] mx-auto bg-[#F79135] rounded-[30px] px-10 py-12 lg:py-0 flex flex-col lg:flex-row gap-0 lg:gap-16 relative overflow-hidden lg:h-[700px]">
        
        {/* Left Content */}
        <FadeInScroll direction="left" className="max-w-[553px] w-full flex flex-col lg:h-full lg:pt-20 lg:pb-16 z-10 relative">
          <div className="flex flex-col gap-9">
            <h2 className="text-[#222222] text-[40px] sm:text-[60px] leading-[45px] sm:leading-[60px] font-normal">
              Where Talent Meets Technology
            </h2>

            <p className="text-[#222222] text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px]">
              Our team is the driving force behind every intelligent solution we
              create. With expertise across AI, marketing, and development, we turn
              complex challenges into seamless digital success stories.
            </p>

            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 mt-2 group self-start hover:opacity-85 transition-opacity z-20 relative"
            >
              <span className="text-[20px] sm:text-[22px] text-[#222222]">
                View our works
              </span>

              <div className="w-10 h-10 rounded-full border border-[#222222] flex items-center justify-center group-hover:translate-x-1 transition duration-300">
                →
              </div>
            </button>
          </div>

          {/* 3D VR Character Image - Absolute at the bottom of the orange box on desktop, inline on mobile */}
          <img
            src="/technology_section_image.png"
            alt="3D VR Character"
            className="lg:absolute lg:bottom-0 lg:right-[-25px] w-[300px] sm:w-[350px] lg:w-[390px] xl:w-[410px] h-auto object-contain select-none pointer-events-none mt-8 lg:mt-0"
          />
        </FadeInScroll>

        {/* Right Cards Grid */}
        <FadeInScroll direction="right" delay={0.2} className="flex-1 z-10 lg:h-full w-full">
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full overflow-y-auto no-scrollbar lg:py-8"
          >
            {cardsToRender.map((card, index) => (
              <div 
                key={`${card.id}-${index}`}
                className="bg-[#F3EBDF] rounded-[20px] pt-6 pb-10 px-5 flex flex-col justify-between shadow-sm hover:translate-y-[-4px] hover:shadow-md transition-all duration-300 min-h-[240px]"
              >
                <div>
                  {/* Header: Photo & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={card.avatar}
                      alt=""
                      className="w-[54px] h-[54px] rounded-full object-cover overflow-hidden"
                    />

                    <div>
                      <h3 className="text-[17px] text-[#222222] font-semibold leading-[1.25]">
                        {card.title}
                      </h3>

                      <p className="text-[14px] text-[#222222] font-light mt-0.5">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[12px] text-[#333333] leading-[18px] mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Tool Icons */}
                <div className="flex gap-3 mt-auto">
                  {card.tools.map((tool, idx) => (
                    <div 
                      key={idx}
                      className={`w-[44px] h-[44px] ${getToolBg(tool)} rounded-[10px] flex items-center justify-center overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform duration-200`}
                    >
                      {renderToolIcon(tool)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeInScroll>

        {/* Show More / Show Less Button on mobile only */}
        {!isDesktop && (
          <div className="w-full flex justify-center mt-6 mb-6 z-20">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2.5 rounded-full border border-[#222222] text-[#222222] font-semibold bg-transparent hover:bg-[#222222] hover:text-[#F79135] transition-all duration-300 shadow-sm"
            >
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
