export function formatNumberWithComma( number ) {
  return number.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," );
};

export async function detectCountry() {
  const data = await fetch( `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IP_FIND_KEY}` ).then( ( response ) => response.json() );
  return data;
};

export async function getCountryInfo( countryCode ) {
  const country = await fetch( `https://restcountries.eu/rest/v2/alpha/${countryCode}` ).then( ( response ) => response.json() );
  return country;
}