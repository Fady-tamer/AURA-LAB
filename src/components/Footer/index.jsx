import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="max-w-360 mx-auto px-20 pt-16 pb-8 flex flex-col gap-16 border-t border-border-subtle bg-surface-secondary">
      <div className="flex gap-16">
        <div className="min-w-120 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-[32px] font-display">Notes from AURA LAB</p>
            <p className="max-w-90 text-[13px] text-text-secondary">
              New compositions, quiet stories, and a closer look at the
              materials that move us.
            </p>
          </div>
          {/* 
          //! make input component
           */}
          <input type="text" />
        </div>
        <div className="grow flex flex-col gap-6">
          <p className="text-[11px] text-text-secondary">Shop</p>
          <div className="flex flex-col gap-4">
            <NavLink className="w-fit text-[13px]">Fragrances</NavLink>
            <NavLink className="w-fit text-[13px]">Discovery Sets</NavLink>
            <NavLink className="w-fit text-[13px]">Stockists</NavLink>
          </div>
        </div>
        <div className="grow flex flex-col gap-6">
          <p className="text-[11px] text-text-secondary">Story</p>
          <div className="flex flex-col gap-4">
            <NavLink className="w-fit text-[13px]">Our Philosophy</NavLink>
            <NavLink className="w-fit text-[13px]">Journal</NavLink>
            <NavLink className="w-fit text-[13px]">Contact</NavLink>
          </div>
        </div>
        <div className="grow flex flex-col gap-6">
          <p className="text-[11px] text-text-secondary">CARE & LEGAL</p>
          <div className="flex flex-col gap-4">
            <NavLink className="w-fit text-[13px]">Shipping & Returns</NavLink>
            <NavLink className="w-fit text-[13px]">Fragrance Care</NavLink>
            <NavLink className="w-fit text-[13px]">Privacy Policy</NavLink>
            <NavLink className="w-fit text-[13px]">Terms & Conditions</NavLink>
          </div>
        </div>
      </div>
      <div className="pt-6 flex justify-between border-t border-border-subtle">
        <p className="text-[11px] text-text-secondary">
          © 2026 AURA LAB. All rights reserved.
        </p>
        <NavLink to={"/"} className="text-[16px] font-semibold">
          AURA LAB
        </NavLink>
        <p className="text-[11px] text-text-secondary">United States · USD $</p>
      </div>
    </div>
  );
};

export default Footer;
