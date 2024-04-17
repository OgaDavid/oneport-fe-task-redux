import RatesFilter from "./RatesFilter";

const RatesHeader = ({ linerList, selectedLiner, setSelectedLiner }) => {
  return (
    <div className="mt-10 pb-8 border-b border-custom-border-grey flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:items-center gap-x-3 relative">
      <div className="flex items-center gap-x-3">20FT</div>
      <RatesFilter
        linerList={linerList}
        selectedLiner={selectedLiner}
        setSelectedLiner={setSelectedLiner}
      />
    </div>
  );
};

export default RatesHeader;
