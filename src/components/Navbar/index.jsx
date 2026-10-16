import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="px-20 py-7 flex justify-between items-center">
      <div className="flex gap-8">
        <NavLink>Fragrances</NavLink>
        <NavLink>Discovery Sets</NavLink>
        <NavLink>About</NavLink>
      </div>
      <div>
        <NavLink>AURA LAB</NavLink>
      </div>
      <div className="flex gap-8">
        <NavLink>Search</NavLink>
        <NavLink>Cart(0)</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
