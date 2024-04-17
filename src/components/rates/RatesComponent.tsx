import { useEffect, useRef, useState } from "react";
import { getSpecialRate } from "@/store/rates/action";
import { connect } from "react-redux";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import RatesContainer from "./RatesContainer";
import RatesList from "./RatesList";
import { getUniqueLiners } from "@/helpers/utils";
import RatesHeader from "./RatesHeader";
import RatesPagination from "./RatesPagination";
import RatesFilter from "./RatesFilter";
import RateOptions from "./RateOptions";

/* eslint-disable @typescript-eslint/no-explicit-any */
const RatesComponent = (props: any) => {
  const { error, getting_special_rates, special_rates, getSpecialRate } = props;

  const [size, setSize] = useState<string>("20FT");
  const [type, setType] = useState<string>("DRY");

  const [linerList, setLinerList] = useState([]);
  const [selectedLiner, setSelectedLiner] = useState("");

  const [itemsPerPage, setItemsPerPage] = useState(9);

  const [specialRates, setSpecialRates] = useState([]);

  const scrollref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [itemsPerPage]);

  //fetches the special rates
  useEffect(() => {
    getSpecialRate({
      container_type: type.toLowerCase(),
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
      <div className="py-14 container" ref={scrollref}>
        <div className="relative">
          <h1 className="text-[40px] satoshi text-custom-black font-medium">
            Special Rates
          </h1>
        </div>
        <RatesHeader>
          <RateOptions
            size={size}
            type={type}
            setSize={setSize}
            setType={setType}
          />
          <RatesFilter
            linerList={linerList}
            selectedLiner={selectedLiner}
            setSelectedLiner={setSelectedLiner}
          />
        </RatesHeader>

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
      </div>
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
