export function getUniqueLiners(rates) {
  // Create a Set to store unique carrier names
  const uniqueLinerNames = new Set();

  // Iterate over the rates and add each name to the Set
  rates.forEach((rate) => {
    uniqueLinerNames.add(rate.carrier_name);
    console.log(uniqueLinerNames);
  });

  // Convert the Set back to an array
  const uniqueLinerNamesArray = [...uniqueLinerNames];

  return uniqueLinerNamesArray;
}
