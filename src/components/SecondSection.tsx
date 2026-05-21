import PainPoints from "./PainPoints";
import StatsUSPs from "./StatsUSPs";
import DigitalGrowth from "./DigitalGrowth";
import ContactForm from "./ContactForm";

const SecondSection = () => {
  return (
    <section className="relative bg-[#E8DFD1] w-full py-4 lg:py-10 flex flex-col gap-2 sm:gap-4 overflow-x-hidden">
      <PainPoints />
      <div className="flex flex-col">
        <DigitalGrowth />
        <StatsUSPs />
        <ContactForm />
      </div>
    </section>
  );
};

export default SecondSection;
