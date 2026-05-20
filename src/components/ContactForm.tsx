const ContactForm = () => {
  return (
    <div
      className="w-full bg-[#E8DFD1]"
      style={{ padding: "60px clamp(20px, 5vw, 50px) 100px" }}
    >
      <div className="w-[1196px] bg-white shadow-[0_0_60px_30px_rgba(0,0,0,0.03)] rounded-[10px] flex overflow-hidden">
        {/* Left Info Panel */}
        <div className="w-[491px] min-h-[647px] bg-[#F79135] p-10 shrink-0 rounded-[10px] relative overflow-hidden">
          <h3 className="w-[370px] text-white text-[28px] font-medium mb-[30px] font-montreal">
            Ready To Grow Your Business Online?
          </h3>
          <p className="w-[337px] text-[#EDEDED] text-[18px] font-normal mb-10 font-montreal">
            Let's discuss the right digital solution for your business
          </p>
          <div className="flex flex-col gap-5">
            <div className="text-white text-[16px] font-normal font-montreal">
              <div className="text-[12px] text-white/70 mb-1">Phone</div>
              0495 490 0077
            </div>
            <div className="text-white text-[16px] font-normal font-montreal">
              <div className="text-[12px] text-white/70 mb-1">Email</div>
              hello@wisbato.com
            </div>
            <div className="text-white text-[16px] font-normal font-montreal">
              <div className="text-[12px] text-white/70 mb-1">Address</div>
              4th Floor, City Corner Building, West Nadakkave,
              <br />
              Vandipetta, West Hill, Kozhikode, Kerala 673011
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="flex-1 pt-10 pr-10 pb-10 pl-[50px]">
          <form>
            <div className="grid grid-cols-2 gap-y-6 gap-x-10">
              {/* First Name */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="text-[#8D8D8D] text-[12px] font-medium leading-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="border border-[#8D8D8D] rounded-lg px-[14px] py-[10px] text-[#8D8D8D] text-[14px] font-medium bg-white outline-none w-full"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="text-black text-[12px] font-medium leading-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="border border-[#8D8D8D] rounded-lg px-[14px] py-[10px] text-[#8D8D8D] text-[14px] font-medium bg-white outline-none w-full"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="text-[#8D8D8D] text-[12px] font-medium leading-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-[#8D8D8D] rounded-lg px-[14px] py-[10px] text-[#8D8D8D] text-[14px] font-medium bg-white outline-none w-full"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
              </div>

              {/* Service Interested In */}
              <div className="flex flex-col gap-[6px]">
                <label
                  className="text-black text-[12px] font-medium leading-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Service Interested In
                </label>
                <select
                  className="border border-[#8D8D8D] rounded-lg px-[14px] py-[10px] text-[#8D8D8D] text-[14px] font-medium bg-white outline-none w-full"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <option>Website</option>
                  <option>Mobile App</option>
                  <option>Digital Marketing</option>
                  <option>Branding</option>
                  <option>Technical Support</option>
                </select>
              </div>

              {/* Business type - full width */}
              <div className="flex flex-col gap-[6px] col-span-2">
                <label
                  className="text-black text-[12px] font-medium leading-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Business type
                </label>
                <input
                  type="text"
                  placeholder="Enter business type"
                  className="border border-[#8D8D8D] rounded-lg px-[14px] py-[10px] text-[#8D8D8D] text-[14px] font-medium bg-white outline-none w-full"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
              </div>

              {/* Message - full width */}
              <div className="flex flex-col gap-[6px] col-span-2">
                <label
                  className="text-[#8D8D8D] text-[12px] font-medium leading-5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Write your message.."
                  className="border border-[#8D8D8D] rounded-lg px-[14px] py-[10px] text-[#8D8D8D] text-[14px] font-medium bg-white outline-none w-full resize-y min-h-[100px]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 w-[247px] h-[58px] bg-[#F79135] rounded-[15px] flex items-center border-none cursor-pointer overflow-hidden"
            >
              <div className="w-[60.92px] h-[41.58px] bg-[#FEFEFE] rounded-[15px] m-2 shrink-0" />
              <span className="text-[#FEFEFE] text-[18px] font-normal font-montreal">
                Get Free Consultation
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
