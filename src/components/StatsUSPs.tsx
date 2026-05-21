
import FadeInScroll from "./FadeInScroll";

const ArrowIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] shrink-0"
  >
    <path
      d="M14 34L34 14M34 14H18M34 14V30"
      stroke="#F79135"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StatsUSPs = () => {
  return (
    <div className="w-full flex flex-col items-center pt-0 pb-0 px-4 sm:px-6 md:px-12 lg:px-12 xl:px-20 overflow-hidden">
      <div className="max-w-[1196px] w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12 lg:gap-8 xl:gap-12">
        
        {/* Left Column: USP Card and Button */}
        <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-[438px] lg:ml-6 xl:ml-20 2xl:ml-[140px] shrink-0 my-6 md:my-10">
          {/* USP List Card */}
          <FadeInScroll direction="up" className="w-full">
            <div 
              className="border border-white/60 p-6 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 lg:gap-0 lg:justify-between shadow-sm w-full lg:w-[438px] lg:h-[389px]"
              style={{
                borderRadius: "10px",
                background: "rgba(255, 255, 255, 0.40)"
              }}
            >
              {["100+ Projects", "Fast Support", "Mobile Friendly", "SEO Ready"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 sm:gap-6 text-[#222] text-[20px] sm:text-[32px] lg:text-[42px] font-normal font-montreal leading-normal"
                  >
                    <ArrowIcon />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </FadeInScroll>
          
          {/* Get Free Consultation Button */}
          <FadeInScroll delay={0.15}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#F79135] text-white h-[42px] sm:h-[46px] pl-[4px] pr-4 sm:pr-6 rounded-[12px] font-medium flex items-center gap-2 sm:gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-md self-center lg:self-start"
            >
              <div className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px] rounded-[10px] bg-[#FEFEFE] flex items-center justify-center text-[#F79135] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 sm:w-4 h-4 text-[#F79135]"
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
              <span className="text-[#FEFEFE] text-[13px] sm:text-[15px] font-normal font-montreal leading-normal whitespace-nowrap">
                Get Free Consultation
              </span>
            </button>
          </FadeInScroll>
        </div>

        {/* Right Column: VR Illustration */}
        <FadeInScroll direction="left" className="flex justify-center items-end w-full lg:max-w-[400px] xl:max-w-[480px] shrink">
          <img
            src="/section2_contact image.png"
            alt="VR Character Illustration"
            className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-full h-auto object-contain block"
            style={{
              transform: "scaleX(-1)",
              filter: "drop-shadow(0px 15px 30px rgba(0,0,0,0.08))",
            }}
          />
        </FadeInScroll>

      </div>
    </div>
  );
};

export default StatsUSPs;
