import FAQ from "../../components/FAQ";
import Title from "../../components/Title";

const Faq = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center scroll-smooth">
      <Title text="سوالات متداول" />
      <div className="flex-1 px-3 lg:px-16  w-full">
        <FAQ />
      </div>
    </section>
  );
};

export default Faq;
