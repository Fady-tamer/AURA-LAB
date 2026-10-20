import img from "../../../assets/Raw-botanical-ingredients.png";

const FragranceNotes = () => {
  return (
    <div className="p-20 flex gap-30 bg-[#F3F2EF]">
      <div>
        <img src={img} alt="" />
        <div className="pt-4 flex justify-between">
          <p className="text-[10px] text-text-secondary">
            A STUDY IN RAW MATERIALS
          </p>
          <p className="text-[10px] text-text-secondary">SANTAL DUSK / 01</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-[11px] text-text-secondary">
            THE ANATOMY OF A SCENT
          </p>
          <p className="max-w-136 text-[56px] font-display leading-[105%]">
            From first light to lasting warmth.
          </p>
          <p className="text-[13px] text-text-secondary leading-[175%]">
            Discover Santal Dusk. A bright opening unfolds into a smoky heart,
            settling into a quiet, skin-close warmth.
          </p>
        </div>
        <div>
          <div className="py-6 flex flex-col gap-2 border-t border-border-subtle">
            <div className="flex justify-between items-center">
              <p className="text-[26px] font-display">Top Notes</p>
              <p className="text-[10px] text-text-secondary">Bright · Spiced</p>
            </div>
            <p className="text-[13px] text-text-secondary">
              Italian Bergamot, Pink Peppercorn
            </p>
          </div>
          <div className="py-6 flex flex-col gap-2 border-t border-border-subtle">
            <div className="flex justify-between items-center">
              <p className="text-[26px] font-display">Top Notes</p>
              <p className="text-[10px] text-text-secondary">Bright · Spiced</p>
            </div>
            <p className="text-[13px] text-text-secondary">
              Italian Bergamot, Pink Peppercorn
            </p>
          </div>
          <div className="py-6 flex flex-col gap-2 border-t border-border-subtle">
            <div className="flex justify-between items-center">
              <p className="text-[26px] font-display">Top Notes</p>
              <p className="text-[10px] text-text-secondary">Bright · Spiced</p>
            </div>
            <p className="text-[13px] text-text-secondary">
              Italian Bergamot, Pink Peppercorn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FragranceNotes;
