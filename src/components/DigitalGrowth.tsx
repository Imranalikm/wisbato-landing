import FadeInScroll from "./FadeInScroll";

const DigitalGrowth = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-2 md:pt-4 pb-6 md:pb-8 px-4">
      <FadeInScroll>
        <h2 className="text-center text-black text-[32px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-light leading-tight font-montreal">
          Digital Growth That
        </h2>
      </FadeInScroll>
      <FadeInScroll delay={0.15}>
        <div
          className="text-center text-[64px] sm:text-[110px] md:text-[160px] lg:text-[200px] font-bold font-montreal leading-[0.9] sm:leading-[0.8] tracking-tight bg-[url('/convertus_bg.jpg')] bg-cover bg-center"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Converts
        </div>
      </FadeInScroll>
      <FadeInScroll delay={0.3}>
        <p className="max-w-[576px] w-full text-center text-[#222222] text-[15px] sm:text-[18px] font-normal mt-6 md:mt-8 font-montreal leading-relaxed px-4">
          We help businesses generate more leads with custom websites, mobile
          apps, and digital marketing services.
        </p>
      </FadeInScroll>
    </div>
  );
};

export default DigitalGrowth;
