import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      {/* Orange CTA Section */}
      <div className="w-full bg-[#F79135] py-14 sm:py-20 flex flex-col items-center justify-center">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <img
              src="/wis_logo.png"
              alt="Wisbato Logo"
              className="w-8 h-6 object-contain brightness-0 invert"
            />
            <img
              src="/wislogo_text.png"
              alt="Wisbato"
              className="w-[130px] sm:w-[146px] h-[19px] sm:h-[21px] object-contain brightness-0 invert"
            />
          </div>

          {/* Heading */}
          <h2 className="text-white text-[24px] sm:text-[28px] font-medium mb-3 sm:mb-4 font-montreal leading-snug sm:leading-normal max-w-[90%] sm:max-w-none">
            Ready To Grow Your Business Online?
          </h2>

          {/* Subheading */}
          <p className="text-[#EDEDED] text-[15px] sm:text-[18px] font-light mb-8 sm:mb-10 max-w-[90%] sm:max-w-none">
            Let’s discuss the right digital solution for your business
          </p>

          {/* Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#F79135] h-[52px] sm:h-[56px] pl-1.5 pr-4 sm:pr-6 rounded-[15px] font-medium flex items-center gap-2.5 sm:gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-md"
          >
            <div className="w-[50px] sm:w-[60.917px] h-[36px] sm:h-[41.58px] rounded-[15px] bg-[#F79135] flex items-center justify-center text-white text-lg sm:text-xl font-normal shrink-0">
              →
            </div>
            <span className="text-[#FF911E] text-[16px] sm:text-[18px] font-normal font-montreal leading-normal whitespace-nowrap">
              Get Free Consultation
            </span>
          </button>

        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="w-full bg-[#EFEAE2] py-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Text */}
          <p className="text-[#666666] text-[13px] sm:text-[14px] font-light text-center lg:text-left leading-relaxed">
            Wisbato Technologies Pvt. Ltd. Calicut, Kerala, India <br />
            © {new Date().getFullYear()} Wisbato. All Rights Reserved.
          </p>

          {/* Right Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-5 gap-y-2.5 sm:gap-8">
            <a
              href="/privacy-policy"
              className="text-[#666666] text-[13px] sm:text-[14px] font-light hover:text-black transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[#666666] text-[13px] sm:text-[14px] font-light hover:text-black transition-colors duration-300"
            >
              Terms of Service
            </a>
            <p className="text-[#666666] text-[13px] sm:text-[14px] font-light">
              Made with innovation by Wisbato
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
