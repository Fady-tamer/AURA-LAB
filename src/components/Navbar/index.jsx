import { NavLink } from "react-router";

const Navbar = () => {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section.scrollTo({ behavior: "smooth" });
  };

  return (
    <header className="px-20 py-7 flex justify-between items-center border border-border-subtle">
      <div className="flex gap-8 text-[13px]">
        <NavLink
          to={"#Fragrances"}
          onClick={() => {
            scrollTo(e, "Fragrances");
          }}
        >
          Fragrances
        </NavLink>
        <NavLink to={"/sets"}>Discovery Sets</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div>
        <NavLink className={`text-2xl font-medium tracking-wide`}>
          AURA LAB
        </NavLink>
      </div>
      <div className="flex gap-8 text-[13px]">
        <NavLink>Search</NavLink>
        {
          // todo
          //! . cart preview
          //! . cart items number
        }
        <NavLink to={"/cart"}>Cart (0)</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
