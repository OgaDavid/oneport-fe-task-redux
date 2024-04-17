import { useEffect, useState } from "react";
import { getSpecialRate } from "@/store/rates/action";
import { connect } from "react-redux";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import RatesContainer from "./RatesContainer";
import RatesList from "./RatesList";
import { getUniqueLiners } from "@/helpers/utils";
import RatesHeader from "./RatesHeader";
import RatesPagination from "./RatesPagination";

/* eslint-disable @typescript-eslint/no-explicit-any */
const RatesComponent = (props: any) => {
  const { error, getting_special_rates, special_rates, getSpecialRate } = props;

  const [size] = useState<string>("20FT");
  const [type] = useState<string>("dry");

  const [linerList, setLinerList] = useState([]);
  const [selectedLiner, setSelectedLiner] = useState("");

  const [itemsPerPage, setItemsPerPage] = useState(9);

  const [specialRates, setSpecialRates] = useState([]);

  //fetches the special rates
  useEffect(() => {
    getSpecialRate({
      container_type: type,
      container_size: size,
    });
  }, [size, type]);

  // set special rate and liners to an array
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

  // sorts the special rates
  useEffect(() => {
    setSpecialRates(
      special_rates.rates
        ? special_rates.rates.filter(
            (rate) => rate.carrier_name === selectedLiner
          )
        : []
    );
  }, [selectedLiner]);

  return (
    <>
      <RatesHeader
        linerList={linerList}
        selectedLiner={selectedLiner}
        setSelectedLiner={setSelectedLiner}
      />

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
              <RatesList
                itemsPerPage={itemsPerPage}
                special_rates={specialRates as any}
              />
            )}
          </RatesContainer>
          {specialRates.length >= itemsPerPage && (
            <RatesPagination
              special_rates={specialRates}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
            />
          )}
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
