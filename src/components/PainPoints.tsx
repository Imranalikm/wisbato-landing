import FadeInScroll from "./FadeInScroll";

const PainPoints = () => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto pt-[40px] pb-[40px] md:pt-[60px] md:pb-[60px]">
      <FadeInScroll>
        <h2 className="max-w-[850px] w-full text-[#222] text-[32px] sm:text-[48px] md:text-[68px] font-light leading-[1.1] mb-[30px] md:mb-[50px] font-montreal px-5 md:px-[30px] xl:px-[40px]">
          Losing Customers Because <br className="hidden md:inline" />
          Your Business Isn't Strong <br className="hidden md:inline" />
          Online?
        </h2>
      </FadeInScroll>

      <div className="flex flex-row flex-nowrap xl:justify-center justify-start gap-3 mt-[30px] md:mt-[50px] overflow-x-auto xl:overflow-x-visible no-scrollbar w-full pb-4 xl:pb-0 px-5 md:px-[30px] xl:px-[40px]">
        {/* Card 1 */}
        <FadeInScroll delay={0} className="flex-shrink-0">
          <div className="w-[230px] h-[203px] bg-[rgba(237,237,237,0.50)] border border-white/60 rounded-[8px] flex flex-col justify-between items-center pt-[24px] pb-0 px-[16px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform duration-300 hover:translate-y-[-4px]">
            <span className="text-[18px] font-normal text-[#222] font-montreal leading-[22px] max-w-[190px]">
              Instagram Alone Is Not <br /> Enough
            </span>
            <div className="flex-grow flex items-end justify-center w-full overflow-hidden">
              <img
                src="/section_2_image1.png"
                alt="Instagram Alone Is Not Enough"
                className="w-[120px] h-[90px] object-contain object-bottom"
              />
            </div>
          </div>
        </FadeInScroll>

        {/* Card 2 */}
        <FadeInScroll delay={0.1} className="flex-shrink-0">
          <div className="w-[230px] h-[203px] bg-[rgba(237,237,237,0.50)] border border-white/60 rounded-[8px] flex flex-col justify-between items-center pt-[24px] pb-0 px-[16px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform duration-300 hover:translate-y-[-4px]">
            <span className="text-[18px] font-normal text-[#222] font-montreal leading-[22px] max-w-[200px]">
              No Online System for <br /> Customer Inquiries
            </span>
            <div className="flex-grow flex items-end justify-center w-full overflow-hidden">
              <img
                src="/section_2_image2.png"
                alt="No Online System for Customer Inquiries"
                className="w-[150px] h-[95px] object-contain object-bottom"
              />
            </div>
          </div>
        </FadeInScroll>

        {/* Card 3 */}
        <FadeInScroll delay={0.2} className="flex-shrink-0">
          <div className="w-[230px] h-[203px] bg-[rgba(237,237,237,0.50)] border border-white/60 rounded-[8px] flex flex-col justify-between items-center pt-[24px] pb-0 px-[16px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform duration-300 hover:translate-y-[-4px]">
            <span className="text-[18px] font-normal text-[#222] font-montreal leading-[22px] max-w-[190px]">
              Poor Branding Reduces <br /> Trust
            </span>
            <div className="flex-grow flex items-end justify-center w-full overflow-hidden">
              <img
                src="/section_2_image3.svg"
                alt="Poor Branding Reduces Trust"
                className="w-[110px] h-[85px] object-contain object-bottom"
              />
            </div>
          </div>
        </FadeInScroll>

        {/* Card 4 */}
        <FadeInScroll delay={0.3} className="flex-shrink-0">
          <div className="w-[230px] h-[203px] bg-[rgba(237,237,237,0.50)] border border-white/60 rounded-[8px] flex flex-col justify-between items-center pt-[24px] pb-0 px-[16px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform duration-300 hover:translate-y-[-4px]">
            <span className="text-[18px] font-normal text-[#222] font-montreal leading-[22px] max-w-[190px]">
              Slow Websites Lose <br /> Visitors
            </span>
            <div className="flex-grow flex items-end justify-center w-full overflow-hidden">
              <img
                src="/section_2_image4.svg"
                alt="Slow Websites Lose Visitors"
                className="w-[120px] h-[80px] object-contain object-bottom"
              />
            </div>
          </div>
        </FadeInScroll>

        {/* Card 5 */}
        <FadeInScroll delay={0.4} className="flex-shrink-0">
          <div className="w-[230px] h-[203px] bg-[rgba(237,237,237,0.50)] border border-white/60 rounded-[8px] flex flex-col justify-between items-center pt-[24px] pb-0 px-[16px] text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-transform duration-300 hover:translate-y-[-4px]">
            <span className="text-[18px] font-normal text-[#222] font-montreal leading-[22px] max-w-[200px]">
              Customers can't find your <br /> services online
            </span>
            <div className="flex-grow flex items-end justify-center w-full overflow-hidden">
              <img
                src="/section_2_image5.png"
                alt="Customers can't find your services online"
                className="w-[160px] h-[82px] object-contain object-bottom"
              />
            </div>
          </div>
        </FadeInScroll>

        {/* Spacer for horizontal scroll padding on mobile */}
        <div className="w-[20px] md:w-[50px] flex-shrink-0 lg:hidden" />
      </div>
    </div>
  );
};

export default PainPoints;
