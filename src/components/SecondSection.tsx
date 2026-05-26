import PainPoints from "./PainPoints";
import StatsUSPs from "./StatsUSPs";
import DigitalGrowth from "./DigitalGrowth";
import ContactForm from "./ContactForm";



const SecondSection = () => {
  return (
    <section className="relative bg-[#E8DFD1] w-full pt-4 lg:pt-10 pb-0 flex flex-col overflow-x-hidden">
      <PainPoints />
      
      {/* Wrapper for DigitalGrowth and StatsUSPs with curvy SVG background */}
      <div className="relative w-full">
        {/* Curvy background SVG (Desktop only) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 614"
            preserveAspectRatio="none"
            className="w-full h-full min-h-[614px] lg:scale-y-[0.65] lg:origin-top"
          >
            {/* Cream Wave */}
            <path
              d="M0 233.269C0 233.269 464.893 538.111 761 534.931C1037.15 531.966 1440 233.269 1440 233.269V0C1440 0 1042.34 606.007 761 613.909C449.331 622.662 0 0 0 0V233.269Z"
              fill="#F3EBDF"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col">
          <DigitalGrowth />
          <StatsUSPs />
        </div>
      </div>

      <ContactForm />
    </section>
  );
};




export default SecondSection;
