import testImg from "../../../assets/Product-photograph.png";

const Fragrances = () => {
  return (
    <div id="Fragrances" className="p-20 pt-12 pb-30 flex flex-col gap-12">
      {/* section header */}
      <div className="flex flex-col gap-4">
        <p className="text-[11px] text-text-secondary">THE COLLECTION</p>
        <div className="flex justify-between items-center">
          <p className="text-[56px] font-display">Signature fragrances</p>
          <p className="max-w-70 text-[13px] text-text-secondary">
            Three compositions. Each an intimate expression of the natural
            world.
          </p>
        </div>
      </div>

      {/* section body */}
      <div className="flex gap-10">
        <div className="flex flex-col gap-6">
          <img src={testImg} alt="testImg" />
          <div className="flex flex-col gap-2">
            <p className="text-[28px] font-display">01 — Santal Dusk</p>
            <p className="text-[13px] text-text-secondary">
              Cardamom, Smoked Cedar, Amber
            </p>
            <p className="text-[11px] text-text-secondary">
              50ml · Extrait de Parfum
            </p>
          </div>
          <div className="pt-4 flex justify-between items-center border-t border-border-subtle">
            <p className="text-[13px]">$150</p>
            <button className="text-[13px] cursor-pointer">Quick Add +</button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <img src={testImg} alt="testImg" />
          <div className="flex flex-col gap-2">
            <p className="text-[28px] font-display">01 — Santal Dusk</p>
            <p className="text-[13px] text-text-secondary">
              Cardamom, Smoked Cedar, Amber
            </p>
            <p className="text-[11px] text-text-secondary">
              50ml · Extrait de Parfum
            </p>
          </div>
          <div className="pt-4 flex justify-between items-center border-t border-border-subtle">
            <p className="text-[13px]">$150</p>
            <button className="text-[13px] cursor-pointer">Quick Add +</button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <img src={testImg} alt="testImg" />
          <div className="flex flex-col gap-2">
            <p className="text-[28px] font-display">01 — Santal Dusk</p>
            <p className="text-[13px] text-text-secondary">
              Cardamom, Smoked Cedar, Amber
            </p>
            <p className="text-[11px] text-text-secondary">
              50ml · Extrait de Parfum
            </p>
          </div>
          <div className="pt-4 flex justify-between items-center border-t border-border-subtle">
            <p className="text-[13px]">$150</p>
            <button className="text-[13px] cursor-pointer">Quick Add +</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fragrances;
