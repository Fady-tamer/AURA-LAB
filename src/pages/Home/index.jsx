import Fragrances from "./Sections/Fragrances";
import Hero from "./Sections/Hero";

const Home = () => {
  return (
    <div className="max-w-360 mx-auto">
      <Hero />
      <Fragrances />
    </div>
  );
};

export default Home;
