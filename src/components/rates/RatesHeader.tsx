
const RatesHeader = ({ children }) => {
  return (
    <div className="mt-10 pb-8 border-b border-custom-border-grey flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:items-center gap-x-3 relative">
      {children}
    </div>
  );
};

export default RatesHeader;
