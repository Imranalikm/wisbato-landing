import { useState, useEffect } from 'react';
import FadeInScroll from './FadeInScroll';

const TESTIMONIALS = [
  {
    id: 1,
    text: "Working with Wisbato was a game-changer for our business. Their AI-driven approach and strategic marketing significantly improved our online visibility. The team delivered a modern, high-performing website and maintained excellent communication throughout.",
    author: "Sanju samson",
    role: "ABC Company ltd",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150",
  },
  {
    id: 2,
    text: "Wisbato's development expertise completely transformed our operations. They rebuilt our e-commerce platform with a user-centric design that boosted conversion rates by 40% in just two months.",
    author: "Sarah Jenkins",
    role: "Global Commerce Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150",
  },
  {
    id: 3,
    text: "Their strategic vision and execution were flawless. Wisbato built a custom mobile app for our field sales team that works perfectly offline, delivered on time and within budget.",
    author: "David Chen",
    role: "Nexus Logistics",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Auto cycle testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Responsive mobile screen check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Build the render stack:
  // We want to render 3 cards. The active one on top, and others stacked behind it.
  const renderCards = [];
  for (let i = 0; i < TESTIMONIALS.length; i++) {
    const index = (activeIndex + i) % TESTIMONIALS.length;
    renderCards.push({
      item: TESTIMONIALS[index],
      depth: i, // 0 is top, 1 is middle, 2 is bottom
    });
  }

  // Reverse so bottom cards are rendered first (and thus appear behind in CSS z-index)
  renderCards.reverse();

  return (
    <section className="w-full bg-[#EAE6DD] py-16 sm:py-20 px-4 md:px-8 lg:px-[50px] flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* Title */}
      <FadeInScroll direction="up">
        <h2 
          className="text-[#222222] text-center mb-28 sm:mb-32"
          style={{
            fontFamily: "'Montreal Serial', sans-serif",
            fontSize: "clamp(30px, 4.5vw, 56px)",
            fontWeight: 400,
            lineHeight: "1.1",
          }}
        >
          What <span className="text-[#F79135] font-normal">Our Clients</span> Truly Think
        </h2>
      </FadeInScroll>

      {/* Stack Container */}
      <FadeInScroll direction="up" delay={0.15} className="w-full flex justify-center">
        <div 
          className="relative w-full max-w-[620px] h-[290px] sm:h-[460px] flex items-center justify-center cursor-pointer"
          onClick={handleCardClick}
        >
        
        {/* Testimonial Cards */}
        {renderCards.map(({ item, depth }) => {
          const isTop = depth === TESTIMONIALS.length - 1;
          const stackDepth = TESTIMONIALS.length - 1 - depth; // 0 for top, 1 for middle, 2 for bottom

          // Styling variables for 3D stack effect to match screenshot fanning to the left
          let rotate = 0;
          let translateY = 0;
          let translateX = 0;
          let scale = 1;

          if (stackDepth === 1) {
            rotate = isMobile ? -3 : -5;
            translateY = isMobile ? 6 : 8;
            translateX = isMobile ? -12 : -18;
            scale = 0.99;
          } else if (stackDepth === 2) {
            rotate = isMobile ? -6 : -8.5;
            translateY = isMobile ? 12 : 16;
            translateX = isMobile ? -24 : -36;
            scale = 0.98;
          } else {
            // Top card
            rotate = -1.5;
            translateY = 0;
            translateX = 0;
            scale = 1;
          }

          return (
            <div
              key={item.id}
              className="absolute w-full h-[240px] sm:h-[410px] transition-all duration-500 ease-out"
              style={{
                transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
                zIndex: depth,
                opacity: isTop ? 1 : 0.9,
              }}
            >
              {/* Card Background Layer */}
              <div className="absolute inset-0 rounded-[24px] bg-[#F79135] shadow-[0_15px_30px_rgba(0,0,0,0.12)] border border-[#e07f2b] z-10" />

              {/* Lanyard Straps (Only rendered inside the active top card for proper layout alignment) */}
              {isTop && (
                <>
                  {/* Left diagonal strap (Vector 1) - zIndex: 0 (behind background) */}
                  <img 
                    src="/Vector 1.svg" 
                    alt="Left Strap" 
                    className="absolute pointer-events-none"
                    style={{
                      width: '130px',
                      height: '133px',
                      left: 'calc(50% - 91.75px)',
                      top: '-114px',
                      zIndex: 0
                    }}
                  />
                  
                  {/* Right diagonal strap (Vector 2) - zIndex: 20 (in front of background) */}
                  <img 
                    src="/Vector 2.svg" 
                    alt="Right Strap" 
                    className="absolute pointer-events-none"
                    style={{
                      width: '122px',
                      height: '152px',
                      left: 'calc(50% - 20.1px)',
                      top: '-131px',
                      zIndex: 20,
                      transform: 'rotate(10deg)',
                      transformOrigin: '20.1px 149px'
                    }}
                  />

                  {/* The cutout slot in the card - zIndex: 30 (covers right strap) */}
                  <div className="w-[76px] h-[16px] bg-[#EAE6DD] rounded-full absolute top-[16px] left-1/2 -translate-x-1/2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] z-30" />
                </>
              )}

              {/* Interactive Content Wrapper */}
              <div className="absolute inset-0 p-4 sm:p-10 z-20 flex flex-col justify-between">
                {/* Card Top: Logo & Dots */}
                <div className="flex justify-between items-center">
                  {/* LogoIpsum logo from public folder */}
                  <img 
                    src="/logoipsum.svg" 
                    alt="LogoIpsum" 
                    className="h-[18px] sm:h-[30px] w-auto object-contain"
                  />

                  {/* 3 horizontal dots (selected card is black, others are grey) */}
                  <div className="flex gap-1">
                    <div className={`w-[7px] h-[7px] rounded-full transition-colors duration-300 ${item.id === 1 ? 'bg-black' : 'bg-black/25'}`}></div>
                    <div className={`w-[7px] h-[7px] rounded-full transition-colors duration-300 ${item.id === 2 ? 'bg-black' : 'bg-black/25'}`}></div>
                    <div className={`w-[7px] h-[7px] rounded-full transition-colors duration-300 ${item.id === 3 ? 'bg-black' : 'bg-black/25'}`}></div>
                  </div>
                </div>

                {/* Quotes & Text Content */}
                <div className="flex-1 flex flex-col justify-center mt-2 sm:mt-8 mb-1 sm:mb-6">
                  {/* Custom Slanted Quote Mark SVG */}
                  <svg viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90 mb-1 sm:mb-4 w-[18px] sm:w-[24px] h-[13px] sm:h-[17px]">
                    <path d="M8 0L2 16H0L5.5 0H8ZM20 0L14 16H12L17.5 0H20Z" fill="white" />
                  </svg>

                  <p 
                    className="text-[#FFFDF9] font-normal leading-relaxed tracking-wide"
                    style={{
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontSize: 'clamp(10.5px, 2.7vw, 17px)',
                    }}
                  >
                    {item.text}
                  </p>
                </div>

                {/* Card Footer: Profile Info & LinkedIn */}
                <div className="flex items-center justify-between border-t border-white/20 pt-2 sm:pt-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-8 h-8 sm:w-[52px] sm:h-[52px] rounded-full object-cover border border-white/20"
                    />
                    <div className="flex flex-col">
                      <span 
                        className="text-white text-xs sm:text-lg font-medium leading-tight"
                        style={{ fontFamily: "'Montreal Serial', sans-serif" }}
                      >
                        {item.author}
                      </span>
                      <span 
                        className="text-white/80 text-[10px] sm:text-sm font-light mt-0.5"
                        style={{ fontFamily: "'Montreal Serial', sans-serif" }}
                      >
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* LinkedIn Badge */}
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-[30px] sm:h-[30px]">
                      <rect width="24" height="24" rx="4" fill="#0077B5" />
                      <path d="M19 19H16V14.25C16 13.12 15.98 11.67 14.43 11.67C12.86 11.67 12.62 12.9 12.62 14.17V19H9.62V9.5H12.5V10.8H12.54C12.94 10.04 13.92 9.25 15.36 9.25C18.36 9.25 18.92 11.22 18.92 13.8V19H19ZM5.37 8.12C4.41 8.12 3.62 7.33 3.62 6.37C3.62 5.41 4.41 4.62 5.37 4.62C6.33 4.62 7.12 5.41 7.12 6.37C7.12 7.33 6.33 8.12 5.37 8.12ZM6.87 19H3.87V9.5H6.87V19Z" fill="white" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          );
        })}

      </div>
      </FadeInScroll>
    </section>
  );
}
