import RateCard from "./RateCard";

const RatesList = ({ special_rates, itemsPerPage }) => {
  return (
    <>
      {special_rates.slice(0, itemsPerPage).map((rate, idx) => (
        <RateCard
          key={idx}
          amountUsd={rate.total_amount_usd}
          carrier_name={rate.carrier_name}
          demurrage_days={rate.demurrage_days}
          destination_port_code={rate.destination_port_code}
          detention_days={rate.demurrage_days}
          origin_port_code={rate.origin_port_code}
          sailing_date={rate.sailing_date}
          transit_time={rate.transit_time}
        />
      ))}
    </>
  );
};

export default RatesList;
