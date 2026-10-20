import Button from "../../../components/Button";

const OurPhilosophy = () => {
  return (
    <div className="py-30 flex flex-col justify-center items-center gap-8">
      <p className="text-[11px] text-text-secondary">THE ART OF LESS</p>
      <p className="max-w-212 text-[56px] text-center font-display">
        “Crafted without synthetics, shaped by time.”
      </p>
      <p className="max-w-148 text-[14px] text-center text-text-secondary">
        We work with nature’s most expressive ingredients, giving each
        composition the time it needs to become itself. Made slowly and in small
        batches, our fragrances are an invitation to find beauty in the
        essential.
      </p>
      <Button text={"Read our Journal →"} />
    </div>
  );
};

export default OurPhilosophy;
