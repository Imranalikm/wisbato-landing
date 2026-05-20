const PainPoints = () => {
  return (
    <div
      className="relative w-full bg-[#E8DFD1] pt-[80px] pb-[60px]"
      style={{ padding: "80px clamp(20px, 5vw, 50px) 60px" }}
    >
      <h2 className="w-[814px] text-[#222] text-[70px] font-light leading-[70px] mb-[50px] font-montreal">
        Losing Customers Because Your Business Isn't Strong Online?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[20px] xl:gap-[30px] mt-[50px]">
        {/* Card 1 */}
        <div className="w-full min-h-[203px] bg-[rgba(237,237,237,0.50)] rounded-lg flex flex-col items-center justify-center p-5 gap-4 text-center">
          <span
            className="text-[18px] font-normal text-black"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Instagram Alone Is Not Enough
          </span>
          <img
            src="/section_2_image1.png"
            alt=""
            className="w-[150px] h-[107px] object-contain"
          />
        </div>

        {/* Card 2 */}
        <div className="w-full min-h-[203px] bg-[rgba(237,237,237,0.50)] rounded-lg flex flex-col items-center justify-center p-5 gap-4 text-center">
          <span
            className="text-[18px] font-normal text-black"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            No Online System for Customer Inquiries
          </span>
          <img
            src="/section_2_image2.png"
            alt=""
            className="w-[190px] h-[111px] object-contain"
          />
        </div>

        {/* Card 3 */}
        <div className="w-full min-h-[203px] bg-[rgba(237,237,237,0.50)] rounded-lg flex flex-col items-center justify-center p-5 gap-4 text-center">
          <span
            className="text-[18px] font-normal text-black"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Poor Branding Reduces Trust
          </span>
          <img
            src="/section_2_image3.svg"
            alt=""
            className="w-[130px] h-[100px] object-contain"
          />
        </div>

        {/* Card 4 */}
        <div className="w-full min-h-[203px] bg-[rgba(237,237,237,0.50)] rounded-lg flex flex-col items-center justify-center p-5 gap-4 text-center">
          <span
            className="text-[18px] font-normal text-black"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Slow Websites Lose Visitors
          </span>
          <img
            src="/section_2_image4.svg"
            alt=""
            className="w-[150px] h-[90px] object-contain"
          />
        </div>

        {/* Card 5 */}
        <div className="w-full min-h-[203px] bg-[rgba(237,237,237,0.50)] rounded-lg flex flex-col items-center justify-center p-5 gap-4 text-center">
          <span
            className="text-[18px] font-normal text-black"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Customers can't find your services online
          </span>
          <img
            src="/section_2_image5.png"
            alt=""
            className="w-[199px] h-[98px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PainPoints;
