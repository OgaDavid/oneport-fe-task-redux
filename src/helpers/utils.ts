export function getUniqueLiners(rates) {
  if (!rates) {
    return [];
  }

  const uniqueLinerNames = [];
  rates.forEach((rate) => {
    // @ts-expect-error error
    uniqueLinerNames.push(rate.carrier_name as string);
  });
  const uniqueLinerNamesArray = [...new Set(uniqueLinerNames)];

  return uniqueLinerNamesArray;
}
