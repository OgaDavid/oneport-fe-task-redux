import { useEffect, useState } from "react";
import { getSpecialRate } from "@/store/rates/action";
import { connect } from "react-redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
const RatesComponent = (props: any) => {
  const { error, loading, special_rates, getSpecialRate } = props;

  console.log(error, loading, special_rates);

  const [size] = useState<string>("20FT");
  const [type] = useState<string>("dry");

  //fetches the special rates
  useEffect(() => {
    getSpecialRate({
      container_type: type.toLowerCase(),
      container_size: size,
    });
  }, [size, type]);
  return <div>RatesComponent</div>;
};

const mapStateToProps = (state) => {
  const { error, loading, getting_special_rates, special_rates } = state.rates;

  return { error, loading, getting_special_rates, special_rates };
};

const ConnectedRatesComponent = connect(mapStateToProps, { getSpecialRate })(
  RatesComponent
);

export default ConnectedRatesComponent;
