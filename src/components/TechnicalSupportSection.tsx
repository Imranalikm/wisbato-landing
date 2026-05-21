import FadeInScroll from "./FadeInScroll";

export default function TechnicalSupportSection() {
  return (
    <section className="w-full bg-[#EAE6DD] px-4 md:px-8 lg:px-[50px] py-10 flex justify-center">
      <div className="max-w-[1300px] w-full bg-[#F79135] rounded-[30px] px-8 py-6 md:px-12 md:py-10 lg:px-16 lg:py-12 flex flex-col xl:flex-row items-center xl:items-center justify-between gap-12 xl:gap-24 overflow-hidden">
        
        {/* Left Content */}
        <FadeInScroll direction="right" className="flex flex-col gap-8 xl:gap-[30px] max-w-[500px] w-full">
          <div className="flex flex-col gap-4 xl:gap-[10px]">
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
                lineHeight: "1.5",
              }}
            >
              Reliable technical assistance and maintenance solutions designed to
              ensure seamless business operations, system stability, security, and
              uninterrupted digital performance.
            </p>
          </div>

          {/* Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative w-[186.3px] h-[48px] bg-white rounded-[15px] flex items-center shadow-sm hover:scale-105 transition-transform"
          >
            <div className="absolute left-[5px] top-[5px] w-[60.92px] h-[38px] bg-[#F79135] rounded-[15px] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <span 
              className="absolute left-[80px] text-[#333333]"
              style={{
                fontFamily: "'Montreal Serial', sans-serif",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Explore more
            </span>
          </button>
        </FadeInScroll>

        {/* Right Content */}
        <FadeInScroll direction="left" className="flex flex-col gap-6 xl:gap-[20px] max-w-[616px] w-full" delay={0.15}>
          <img
            className="w-full h-auto xl:h-[347px] object-cover rounded-[20px]"
            src="/technical support.png"
            alt="technical-support"
          />
          <p
            className="text-[#EDEDED]"
            style={{
              fontFamily: "'Montreal Serial', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "1.5",
            }}
          >
            At Wisbato, we combine creativity and technology to craft impactful
            digital experiences. Watch how we transform ideas into powerful solutions
            that help businesses grow and succeed.
          </p>
        </FadeInScroll>

      </div>
    </section>
  );
}
