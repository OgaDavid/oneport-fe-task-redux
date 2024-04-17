const RatesPagination = ({ itemsPerPage, setItemsPerPage, special_rates }) => {
  return (
    <div className="mt-10">
      <p className="text-center mb-4 text-sm text-custom-black">
        Viewing {itemsPerPage} of {special_rates.length} special rates
      </p>
      <button
        className="border-solid flex px-12 mx-auto border-[1px] border-[#374151] rounded py-3"
        onClick={() => {
          setItemsPerPage(() =>
            itemsPerPage > 9
              ? setItemsPerPage(9)
              : setItemsPerPage(special_rates?.length)
          );
        }}
      >
        {itemsPerPage > 9 ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default RatesPagination;
