const RatesFilter = ({linerList, selectedLiner, setSelectedLiner}) => {
  return (
    <div className="flex scrollbar items-center gap-x-3 max-w-[520px] lg:max-w-[750px] overflow-auto">
      {linerList.length > 0 &&
        linerList.map((liner, idx) => (
          <div
            key={idx}
            className={`${selectedLiner === liner ? "bg-custom-blue text-white" : ""} flex items-center gap-x-2 px-4 py-3 border-solid border-[1px] rounded w-auto min-w-fit cursor-pointer border-[#9CA3AF] text-[#1F2937]`}
            onClick={() => setSelectedLiner(liner)}
          >
            {liner}
          </div>
        ))}
    </div>
  );
};

export default RatesFilter;
