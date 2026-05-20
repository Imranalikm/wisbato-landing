import PainPoints from "./PainPoints";
import StatsUSPs from "./StatsUSPs";
import DigitalGrowth from "./DigitalGrowth";
import ContactForm from "./ContactForm";

const SecondSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#E8DFD1] w-full max-w-[1440px] h-[2573px]">
      <PainPoints />
      <StatsUSPs />
      <DigitalGrowth />
      <ContactForm />
    </section>
  );
};

export default SecondSection;
