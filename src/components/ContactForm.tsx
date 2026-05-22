import React, { useState } from "react";
import axios from "axios";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.first_name || !formData.company_name || !formData.email || !formData.business_type) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields (First Name, Company Name, Email, Business Type).");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      await axios.post(
        "https://backend.wisbato.com/api/save-contacts",
        {
          first_name: formData.first_name,
          company_name: formData.company_name,
          email: formData.email,
          service_interested: formData.service_interested,
          business_type: formData.business_type,
          message: formData.message || null,
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
        service_interested: "Website",
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
        <div className="w-full xl:w-[491px] bg-[#F79135] p-8 sm:p-10 shrink-0 relative overflow-hidden flex flex-col justify-between gap-12 min-h-[500px] xl:min-h-[647px]">
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
                <div className="text-white text-[15px] sm:text-[16px] font-normal font-montreal leading-normal">
                  <div className="text-[12px] text-white/70 font-light mb-0.5">No</div>
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
                <div className="text-white text-[15px] sm:text-[16px] font-normal font-montreal leading-normal">
                  <div className="text-[12px] text-white/70 font-light mb-0.5">Mail</div>
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
                <div className="text-white text-[15px] sm:text-[16px] font-normal font-montreal leading-relaxed">
                  <div className="text-[12px] text-white/70 font-light mb-0.5">Address</div>
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
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center text-white hover:bg-black/30 transition-colors duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center text-white hover:bg-black/30 transition-colors duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center text-white hover:bg-black/30 transition-colors duration-200 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
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
              <p className="text-[#555555] text-[14px] sm:text-[15px] font-normal font-montreal leading-relaxed mb-6">
                Fill the form and our team will contact you within 24 hours to understand your requirement and provide suitable pricing.
              </p>
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
                    required
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
                  <select
                    name="service_interested"
                    value={formData.service_interested}
                    onChange={handleChange}
                    className="border border-[#8D8D8D]/50 focus:border-[#F79135] transition-colors rounded-lg px-[14px] py-[10px] text-[#222222] text-[14px] font-medium bg-white outline-none w-full font-montreal"
                  >
                    <option value="Website">Website</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Branding">Branding</option>
                    <option value="Technical Support">Technical Support</option>
                  </select>
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
                    required
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
