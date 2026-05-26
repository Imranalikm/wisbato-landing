import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import FadeInScroll from './FadeInScroll';

const TESTIMONIALS = [
  {
    id: 1,
    text: "Choosing Wisbato was one of the best decisions we made for our business. Their expertise in branding and web development is unmatched. They didn't just design a logo or create a website; they crafted an entire brand identity that perfectly aligns with our values and speaks to our target audience. The website they built is not only visually stunning but also highly functional, providing our customers with an intuitive and seamless experience. Their team's dedication, attention to detail, and creativity have truly set us apart in our industry. We couldn't be happier with the results and highly recommend Wisbato to anyone looking to elevate their brand and online presence.",
    author: "Andrew",
    role: "CEO, Thunder AI",
    avatar: "/andrew.webp",
  },
  {
    id: 2,
    text: "Working with Wisbato has been a game-changer for our online business. Their expertise in building ecommerce websites is exceptional. They created a user-friendly, visually appealing platform that has significantly enhanced our online presence and customer experience. From seamless navigation to secure payment processing, every aspect of our website reflects their attention to detail and commitment to excellence. Thanks to Wisbato, we've seen a noticeable increase in sales and customer satisfaction.",
    author: "Rebella",
    role: "Founder & CTO",
    avatar: "/rebella.webp",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const measureHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    if (expandedCardId !== null) {
      measureHeight();
      window.addEventListener('resize', measureHeight);
      return () => window.removeEventListener('resize', measureHeight);
    }
  }, [expandedCardId, activeIndex]);

  // Auto cycle testimonials every 5 seconds, paused when a card is expanded
  useEffect(() => {
    if (expandedCardId !== null) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [expandedCardId]);

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
    setExpandedCardId(null); // Collapse when cycling
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
    <section id="testimonials" className="w-full bg-[#EAE6DD] py-16 sm:py-20 px-4 md:px-8 lg:px-[50px] flex flex-col items-center justify-center overflow-hidden select-none">
      
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
          className="relative w-full max-w-[620px] transition-all duration-300 flex items-center justify-center cursor-pointer"
          style={{
            height: expandedCardId !== null && contentHeight > 0
              ? `${contentHeight + 50}px`
              : (isMobile ? '310px' : '420px'),
          }}
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

            const isExpanded = expandedCardId === item.id;
            const cardHeight = isExpanded
              ? (contentHeight > 0 ? `${contentHeight}px` : (isMobile ? '330px' : '490px'))
              : (isMobile ? '260px' : '370px');

            return (
              <div
                key={item.id}
                className="absolute w-full transition-all duration-500 ease-out"
                style={{
                  transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex: depth,
                  opacity: isTop ? 1 : 0.9,
                  height: cardHeight,
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
              <div 
                ref={isTop ? contentRef : null}
                className="absolute inset-0 p-4 sm:p-10 z-20 flex flex-col justify-between"
              >
                {/* Card Top: Dots */}
                <div className="flex justify-end items-center">
                  {/* Horizontal dots (selected card is black, others are grey) */}
                  <div className="flex gap-1">
                    {TESTIMONIALS.map((t) => (
                      <div
                        key={t.id}
                        className={`w-[7px] h-[7px] rounded-full transition-colors duration-300 ${
                          item.id === t.id ? 'bg-black' : 'bg-black/25'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Quotes & Text Content */}
                <div className="flex-1 flex flex-col justify-center mt-2 sm:mt-8 mb-1 sm:mb-6">
                  {/* Custom Slanted Quote Mark SVG */}
                  <svg viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90 mb-1 sm:mb-4 w-[18px] sm:w-[24px] h-[13px] sm:h-[17px]">
                    <path d="M8 0L2 16H0L5.5 0H8ZM20 0L14 16H12L17.5 0H20Z" fill="white" />
                  </svg>

                  <p 
                    onClick={(e) => {
                      if (isTop) {
                        e.stopPropagation();
                        setExpandedCardId(expandedCardId === item.id ? null : item.id);
                      }
                    }}
                    className={`text-[#FFFDF9] font-normal leading-relaxed tracking-wide ${isTop ? 'cursor-pointer' : ''}`}
                    style={{
                      fontFamily: "'Montreal Serial', sans-serif",
                      fontSize: 'clamp(10.5px, 2.7vw, 17px)',
                      display: expandedCardId === item.id ? 'block' : '-webkit-box',
                      WebkitLineClamp: expandedCardId === item.id ? 'none' : 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: expandedCardId === item.id ? 'visible' : 'hidden',
                    }}
                  >
                    {item.text}
                  </p>

                  {isTop && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCardId(expandedCardId === item.id ? null : item.id);
                      }}
                      className="text-white/85 hover:text-white text-[11px] sm:text-xs font-semibold mt-2 sm:mt-3 underline decoration-white/30 hover:decoration-white transition-all cursor-pointer self-start focus:outline-none"
                    >
                      {expandedCardId === item.id ? "Read Less" : "Read More..."}
                    </button>
                  )}
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




