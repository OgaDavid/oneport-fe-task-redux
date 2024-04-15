import { useEffect, useState } from "react";
import { getSpecialRate } from "@/store/rates/action";
import { connect } from "react-redux";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import RatesContainer from "./RatesContainer";
import RatesList from "./RatesList";
import { getUniqueLiners } from "@/helpers/utils";

const SingleLiner = ({ liner, selectedLiner, setSelectedLiner }) => (
  <div
    className={`${selectedLiner === liner ? "bg-custom-blue text-white" : ""} flex items-center gap-x-2 px-4 py-3 border-solid border-[1px] rounded w-auto min-w-fit cursor-pointer border-[#9CA3AF] text-[#1F2937]`}
    onClick={() => setSelectedLiner(liner)}
  >
    {liner}
  </div>
);

/* eslint-disable @typescript-eslint/no-explicit-any */
const RatesComponent = (props: any) => {
  const { error, getting_special_rates, special_rates, getSpecialRate } = props;

  const [size] = useState<string>("20FT");
  const [type] = useState<string>("dry");

  const [linerList, setLinerList] = useState([]);
  const [selectedLiner, setSelectedLiner] = useState("");

  const [specialRates, setSpecialRates] = useState([]);

  //fetches the special rates
  useEffect(() => {
    getSpecialRate({
      container_type: type.toLowerCase(),
      container_size: size,
    });
  }, [size, type]);

  useEffect(() => {
    const _uniqueLiners = getUniqueLiners(special_rates.rates);
    setLinerList(_uniqueLiners);
    setSelectedLiner(_uniqueLiners[0]);

    setSpecialRates(
      special_rates.rates
        ? special_rates.rates.filter(
            (rate) => rate.carrier_name === _uniqueLiners[0]
          )
        : []
    );
  }, [special_rates]);

  return (
    <>
      <div>
        <div className="mt-10 pb-8 border-b border-custom-border-grey flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:items-center gap-x-3 relative">
          <div className="flex items-center gap-x-3">
            {/* <RateSelect type="size" />
        <RateSelect type="type" /> */}
            HELLO
          </div>
          <div className="flex scrollbar items-center gap-x-3 max-w-[520px] lg:max-w-[750px] overflow-auto">
            {linerList.length > 0 &&
              linerList.map((liner, idx) => (
                <SingleLiner
                  key={idx}
                  liner={liner}
                  selectedLiner={selectedLiner}
                  setSelectedLiner={setSelectedLiner}
                />
              ))}
          </div>
        </div>
      </div>

      {getting_special_rates ? (
        <div className="flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <RatesContainer>
            {specialRates.length === 0 || error ? (
              <p>No Rates to Display</p>
            ) : (
              <RatesList rates={specialRates} />
            )}
          </RatesContainer>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { error, getting_special_rates, special_rates } = state.rates;

  return { error, getting_special_rates, special_rates };
};

const ConnectedRatesComponent = connect(mapStateToProps, { getSpecialRate })(
  RatesComponent
);

export default ConnectedRatesComponent;
