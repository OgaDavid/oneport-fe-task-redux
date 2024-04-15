import { useEffect, useState } from "react";
import { getSpecialRate } from "@/store/rates/action";
import { connect } from "react-redux";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import RatesContainer from "./RatesContainer";
import RatesList from "./RatesList";
import { getUniqueLiners } from "@/helpers/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
const RatesComponent = (props: any) => {
  const { error, getting_special_rates, special_rates, getSpecialRate } = props;

  console.log(special_rates.rates);

  const [size] = useState<string>("20FT");
  const [type] = useState<string>("dry");

  const uniqueLiners = getUniqueLiners(special_rates.rates);
  const [currentLiner, setCurrentLiner] = useState(uniqueLiners[0])

  //fetches the special rates
  useEffect(() => {
    getSpecialRate({
      container_type: type.toLowerCase(),
      container_size: size,
    });
  }, [size, type]);

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
      {uniqueLiners.map((liner, i) => (
        <div
          onClick={() => {
            setCurrentLiner(liner);
          }}
          key={i}
          className={`${currentLiner === liner ? "bg-custom-blue text-white" : ""} flex items-center gap-x-2 px-4 py-3 border-solid border-[1px] rounded w-auto min-w-fit cursor-pointer border-[#9CA3AF] text-[#1F2937]`}
        >
          {liner as string}
        </div>
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
            {special_rates.length === 0 || error ? (
              <p>No Rates to Display</p>
            ) : (
              <RatesList rates={special_rates.rates} />
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
