import FragranceNotes from "./Sections/FragranceNotes";
import Fragrances from "./Sections/Fragrances";
import Hero from "./Sections/Hero";
import OurPhilosophy from "./Sections/OurPhilosophy";

const Home = () => {
  return (
    <div className="max-w-360 mx-auto">
      <Hero />
      <Fragrances />
      <FragranceNotes />
      <OurPhilosophy />
    </div>
  );
};

export default Home;
