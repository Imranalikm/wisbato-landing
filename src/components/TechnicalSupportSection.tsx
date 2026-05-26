import FadeInScroll from "./FadeInScroll";

export default function TechnicalSupportSection() {
  return (
    <section className="w-full bg-[#EAE6DD] px-4 md:px-8 lg:px-[50px] py-10 flex justify-center">
      <div className="max-w-[1300px] w-full bg-[#F79135] rounded-[30px] px-8 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-16 overflow-hidden">
        
        {/* Left Content */}
        <FadeInScroll direction="right" className="flex flex-col gap-6 md:gap-8 max-w-[650px] w-full">
          <div className="flex flex-col gap-4">
            <h2 
              className="text-[#EDEDED] leading-[1.1]"
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 400,
              }}
            >
              Technical Support
            </h2>
            <p
              className="text-[#EDEDED]"
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.6",
              }}
            >
              Our dedicated technical support team ensures smooth and hassle-free service management for your business. Based on your business requirements, we provide reliable customer assistance and continuous support to help you operate without interruptions.
            </p>
          </div>

          {/* Bullet Points / Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-2">
            {[
              "24/7 Customer Support",
              "Live Chat Assistance",
              "Quick Response Team",
              "Follow-Up Support Service",
              "Friendly Customer Assistance",
              "Fast Complaint Resolution"
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3.5 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-3 rounded-[15px] hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 group"
                style={{
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.15), 0 0 20px rgba(255, 215, 0, 0.15), 0 0 35px rgba(247, 145, 53, 0.15)"
                }}
              >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-3.5 h-3.5 text-[#F79135]" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span 
                  className="text-white text-[14px] sm:text-[15px] font-medium leading-snug tracking-wide"
                  style={{
                    fontFamily: "'Montreal Serial', sans-serif",
                  }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative flex items-center bg-white h-[48px] w-fit pl-[5px] pr-5 sm:pr-6 rounded-[15px] border-none cursor-pointer transition-transform hover:scale-105 active:scale-[0.97] shadow-sm gap-4"
          >
            <div className="w-[60.92px] h-[38px] bg-[#F79135] rounded-[15px] flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span 
              className="text-[#333333] font-montreal font-medium text-[15px] sm:text-[16px] whitespace-nowrap"
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontWeight: 500,
              }}
            >
              Get free Consultation
            </span>
          </button>
        </FadeInScroll>

        {/* Right Content */}
        <FadeInScroll 
          direction="left" 
          className="flex items-end justify-center max-w-[540px] w-full xl:self-end mt-auto -mb-8 md:-mb-10 lg:-mb-12" 
          delay={0.15}
        >
          <img
            className="w-full h-auto max-h-[420px] xl:max-h-[460px] object-contain hover:scale-[1.03] transition-transform duration-500 origin-bottom animate-glow-ts"
            src="/ts.png"
            alt="Technical Support"
          />
        </FadeInScroll>

      </div>
    </section>
  );
}
