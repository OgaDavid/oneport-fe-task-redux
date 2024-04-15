import { useEffect, useState } from "react";
import { getSpecialRate } from "@/store/rates/action";
import { connect } from "react-redux";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import RatesContainer from "./RatesContainer";
import RatesList from "./RatesList";

/* eslint-disable @typescript-eslint/no-explicit-any */
const RatesComponent = (props: any) => {
  const { error, getting_special_rates, special_rates, getSpecialRate } = props;

  console.log(special_rates.rates);

  const [size] = useState<string>("20FT");
  const [type] = useState<string>("dry");

  //fetches the special rates
  useEffect(() => {
    getSpecialRate({
      container_type: type.toLowerCase(),
      container_size: size,
    });
  }, [size, type]);

  return (
    <>
      <div></div>

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
