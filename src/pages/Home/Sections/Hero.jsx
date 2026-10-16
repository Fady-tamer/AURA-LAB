// img
import HeroImg from "../../../assets/Frosted-perfume-bottle.png";

// components
import Button from "../../../components/Button";

const Hero = () => {
  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="p-20 pt-12 flex items-center gap-22">
      <div className="flex flex-col items-start gap-10">
        <p className="text-[11px]">INDEPENDENT PERFUMERY · SMALL BATCHES</p>
        <div className="flex flex-col gap-6">
          <p className="max-w-138 text-[96px] font-display leading-[98%]">
            Scent in its purest form.
          </p>
          <p className="max-w-90 text-[16px] text-text-secondary leading-[175%]">
            Handcrafted, slow-matured extrait de parfum formulated in small
            batches.
          </p>
        </div>
        <Button
          text={"Explore Fragrances"}
          onClickFn={() => scrollToSection("Fragrances")}
        />
      </div>
      <div className="w-160 h-160">
        <img src={HeroImg} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
