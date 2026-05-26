import FadeInScroll from "./FadeInScroll";

const PAIN_POINTS = [
  {
    title: <>Instagram Alone Is Not <br /> Enough</>,
    img: "/section_2_image1.png",
    alt: "Instagram Alone Is Not Enough",
    imgClass: "w-[120px] h-[90px]"
  },
  {
    title: <>No Online System for <br /> Customer Inquiries</>,
    img: "/section_2_image2.png",
    alt: "No Online System for Customer Inquiries",
    imgClass: "w-[150px] h-[95px]"
  },
  {
    title: <>Poor Branding Reduces <br /> Trust</>,
    img: "/section_2_image3.svg",
    alt: "Poor Branding Reduces Trust",
    imgClass: "w-[110px] h-[85px]"
  },
  {
    title: <>Slow Websites Lose <br /> Visitors</>,
    img: "/section_2_image4.svg",
    alt: "Slow Websites Lose Visitors",
    imgClass: "w-[120px] h-[80px]"
  },
  {
    title: <>Customers can't find your <br /> services online</>,
    img: "/section_2_image5.png",
    alt: "Customers can't find your services online",
    imgClass: "w-[160px] h-[82px]"
  }
];

const PainPoints = () => {
  return (
    <div className="relative w-full overflow-hidden pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px]">
      <FadeInScroll>
        <h2 className="max-w-[850px] w-full text-[#222] text-[32px] sm:text-[48px] md:text-[68px] font-light leading-[1.1] mb-[30px] md:mb-[50px] font-montreal px-5 md:px-[30px] xl:px-[40px]">
          Losing Customers Because <br className="hidden md:inline" />
          Your Business Isn't Strong <br className="hidden md:inline" />
          Online?
        </h2>
      </FadeInScroll>

      {/* Marquee Container */}
      <FadeInScroll direction="up" delay={0.15}>
        <div className="relative w-full mt-[30px] md:mt-[50px] overflow-hidden">
          {/* Shadow overlays for smooth fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[#E8DFD1] via-[#E8DFD1]/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[#E8DFD1] via-[#E8DFD1]/50 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee-pain py-4 hover:[animation-play-state:paused] flex flex-row flex-nowrap">
            {/* Duplicate array to form a seamless infinite loop */}
            {[...PAIN_POINTS, ...PAIN_POINTS].map((card, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-[230px] h-[203px] bg-[rgba(237,237,237,0.50)] border border-white/60 rounded-[8px] flex flex-col justify-between items-center pt-[24px] pb-0 px-[16px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 hover:translate-y-[-6px] mx-[8px] hover:shadow-[0_8px_30px_rgba(247,145,53,0.08)] hover:bg-[rgba(237,237,237,0.70)]"
              >
                <span className="text-[18px] font-normal text-[#222] font-montreal leading-[22px] max-w-[200px]">
                  {card.title}
                </span>
                <div className="flex-grow flex items-end justify-center w-full overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className={`${card.imgClass} object-contain object-bottom`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInScroll>
    </div>
  );
};

export default PainPoints;
