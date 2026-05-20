const StatsUSPs = () => {
  return (
    <div
      className="relative w-full bg-[#E8DFD1]"
      style={{ padding: "40px clamp(20px, 5vw, 50px) 60px" }}
    >
      <div className="bg-white/40 rounded-[10px] p-10 inline-flex flex-col gap-[14px]">
        {["100+ Projects", "Fast Support", "Mobile Friendly", "SEO Ready"].map(
          (item) => (
            <div
              key={item}
              className="flex items-center gap-5 text-[#222] text-[50px] font-light font-montreal"
            >
              <span className="w-4 h-4 border-4 border-[#F79135] rounded-none inline-block shrink-0" />
              {item}
            </div>
          )
        )}
      </div>
      <br />
      <div className="inline-flex items-center mt-[30px] w-[247px] h-[58px] bg-[#F79135] rounded-[15px] cursor-pointer overflow-hidden">
        <div className="w-[60.92px] h-[41.58px] bg-[#FEFEFE] rounded-[15px] shrink-0 m-2" />
        <span className="text-[#FEFEFE] text-[18px] font-normal font-montreal">
          Get Free Consultation
        </span>
      </div>
    </div>
  );
};

export default StatsUSPs;
