import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import FadeInScroll from "./FadeInScroll";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    company_name: "",
    email: "",
    service_interested: "Website",
    business_type: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceOptions = [
    "Website",
    "Mobile App",
    "Digital Marketing",
    "Branding",
    "Technical Support",
    "Video editing",
    "Others"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.first_name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields (First Name, Email, Message).");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await axios.post(
        "https://backend.wisbato.com/api/save-contacts",
        {
          first_name: formData.first_name,
          company_name: formData.company_name || null,
          email: formData.email,
          service_interested: formData.service_interested,
          business_type: formData.business_type || null,
          message: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setStatus("success");
      setFormData({
        first_name: "",
        company_name: "",
        email: "",
        service_interested: "Website" ,
        business_type: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      const serverMessage = err.response?.data?.message || err.message || "Something went wrong. Please try again.";
      setStatus("error");
      setErrorMsg(serverMessage);
    }
  };

  return (
    <div id="contact" className="w-full flex flex-col items-center pt-0 pb-10 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      <FadeInScroll direction="up" className="w-full max-w-[1196px]">
        <div className="w-full bg-white shadow-[0_15px_50px_-15px_rgba(0,0,0,0.06)] rounded-[12px] flex flex-col xl:flex-row overflow-hidden border border-[#ECECEC]">
        
        {/* Left Info Panel */}
        <div className="w-full xl:w-[491px] bg-[#F79135] p-8 sm:p-10 shrink-0 relative overflow-hidden flex flex-col justify-between gap-12 min-h-[500px] xl:min-h-[639px] m-0 sm:m-2 rounded-none sm:rounded-[10px] xl:w-[calc(491px-16px)]">
          <div>
            <h3 className="max-w-[370px] text-white text-[24px] sm:text-[28px] font-medium mb-4 sm:mb-6 font-montreal leading-snug">
              Ready To Grow Your Business Online?
            </h3>
            <p className="max-w-[337px] text-[#EDEDED] text-[15px] sm:text-[18px] font-normal mb-8 sm:mb-12 font-montreal leading-relaxed">
              Let's discuss the right digital solution for your business
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 p-2 bg-white/10 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-white text-[15px] sm:text-[16px] font-normal font-montreal leading-normal flex items-center h-full">
                  <a href="tel:+918714650111" className="hover:underline">+918714650111</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 p-2 bg-white/10 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-white text-[15px] sm:text-[16px] font-normal font-montreal leading-normal flex items-center h-full">
                  <a href="mailto:sales@wisbato.com" className="hover:underline">sales@wisbato.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 p-2 bg-white/10 rounded-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-white text-[15px] sm:text-[16px] font-normal font-montreal leading-relaxed flex items-center h-full">
                  <span>
                    4th Floor, City Corner Building, West Nadakkave,
                    <br />
                    Vandipetta, West Hill, Kozhikode, Kerala 673011
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 z-10">
            <a href="https://www.linkedin.com/company/wisbato/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition-colors duration-200 cursor-pointer shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/wisbatosoftware/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-black/80 transition-colors duration-200 cursor-pointer shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          {/* Decorative overlapping circles */}
          <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-black/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -right-28 w-48 h-48 bg-black/15 rounded-full pointer-events-none" />
        </div>

        {/* Right Form Panel */}
        <div className="flex-1 p-6 sm:p-8 md:p-10 xl:p-12 flex flex-col justify-center">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-10 px-4 animate-[fadeIn_0.5s_ease-out]">
              <div className="w-16 h-16 bg-[#F79135]/15 text-[#F79135] rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-[24px] font-medium text-[#222222] mb-3 font-montreal">
                Message Sent Successfully!
              </h4>
              <p className="text-[#8D8D8D] text-[15px] max-w-[360px] mb-8 font-montreal leading-relaxed">
                Thank you for reaching out. Our team will review your message and get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="bg-[#F79135] text-white px-6 py-2.5 rounded-lg font-medium text-[15px] font-montreal hover:scale-105 transition duration-300 shadow-md cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 lg:gap-x-10">
                
                {/* First Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#8D8D8D] text-[13px] font-medium leading-5 font-montreal">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    placeholder="Enter first name"
                    className="border border-[#8D8D8D]/50 focus:border-[#F79135] transition-colors rounded-lg px-[14px] py-[10px] text-[#222222] placeholder-[#8D8D8D]/60 text-[14px] font-medium bg-white outline-none w-full font-montreal"
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#8D8D8D] text-[13px] font-medium leading-5 font-montreal">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="border border-[#8D8D8D]/50 focus:border-[#F79135] transition-colors rounded-lg px-[14px] py-[10px] text-[#222222] placeholder-[#8D8D8D]/60 text-[14px] font-medium bg-white outline-none w-full font-montreal"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#8D8D8D] text-[13px] font-medium leading-5 font-montreal">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="border border-[#8D8D8D]/50 focus:border-[#F79135] transition-colors rounded-lg px-[14px] py-[10px] text-[#222222] placeholder-[#8D8D8D]/60 text-[14px] font-medium bg-white outline-none w-full font-montreal"
                  />
                </div>

                {/* Service Interested In */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#8D8D8D] text-[13px] font-medium leading-5 font-montreal">
                    Service Interested In
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <div
                      className={`border ${isDropdownOpen ? 'border-[#F79135] ring-1 ring-[#F79135]/20' : 'border-[#8D8D8D]/50'} transition-all duration-300 rounded-lg px-[14px] py-[10px] text-[#222222] text-[14px] font-medium bg-white w-full font-montreal flex justify-between items-center cursor-pointer`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span>{formData.service_interested}</span>
                      <svg 
                        className={`w-4 h-4 text-[#8D8D8D] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-[#F79135]' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute z-50 w-full mt-2 bg-white border border-[#E5E5E5] rounded-lg shadow-xl overflow-hidden py-1"
                        >
                          {serviceOptions.map((option) => (
                            <div
                              key={option}
                              className={`px-[14px] py-[10px] text-[14px] font-medium font-montreal cursor-pointer transition-colors ${formData.service_interested === option ? 'bg-[#F79135]/10 text-[#F79135]' : 'text-[#222222] hover:bg-[#F9F9F9] hover:text-[#F79135]'}`}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, service_interested: option }));
                                setIsDropdownOpen(false);
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Business Type */}
                <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2">
                  <label className="text-[#8D8D8D] text-[13px] font-medium leading-5 font-montreal">
                    Business type
                  </label>
                  <input
                    type="text"
                    name="business_type"
                    value={formData.business_type}
                    onChange={handleChange}
                    placeholder="Enter business type"
                    className="border border-[#8D8D8D]/50 focus:border-[#F79135] transition-colors rounded-lg px-[14px] py-[10px] text-[#222222] placeholder-[#8D8D8D]/60 text-[14px] font-medium bg-white outline-none w-full font-montreal"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 col-span-1 md:col-span-2">
                  <label className="text-[#8D8D8D] text-[13px] font-medium leading-5 font-montreal">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message.."
                    className="border border-[#8D8D8D]/50 focus:border-[#F79135] transition-colors rounded-lg px-[14px] py-[10px] text-[#222222] placeholder-[#8D8D8D]/60 text-[14px] font-medium bg-white outline-none w-full resize-y min-h-[100px] font-montreal"
                  />
                </div>
              </div>

              {status === "error" && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-montreal animate-[fadeIn_0.3s_ease-out]">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-8 bg-[#F79135] text-white h-[42px] sm:h-[46px] pl-[4px] pr-4 sm:pr-6 rounded-[12px] font-medium flex items-center gap-2 sm:gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-md w-fit disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="w-[32px] sm:w-[36px] h-[32px] sm:h-[36px] rounded-[10px] bg-[#FEFEFE] flex items-center justify-center text-[#F79135] shrink-0">
                    {status === "loading" ? (
                      <svg className="animate-spin h-5 w-5 text-[#F79135]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
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
                    )}
                  </div>
                  <span className="text-[#FEFEFE] text-[13px] sm:text-[15px] font-normal font-montreal leading-normal whitespace-nowrap">
                    {status === "loading" ? "Sending..." : "Get Free Consultation"}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      </FadeInScroll>
    </div>
  );
};

export default ContactForm;
