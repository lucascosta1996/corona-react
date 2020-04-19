import React, { useState } from 'react'

export const RegionContext = React.createContext()

function RegionContextProvider( { children } ) {
  const [ region, setRegion ] = useState( '' );
  const [ countries, setCountries ] = useState();
  const [ userCountry, setUserCountry ] = useState();
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState();

  async function getCountries( region, countryCode ) {
    setLoading( true );
    const data = await fetch( `https://restcountries.eu/rest/v2/region/${region}` )
    .then( ( response ) => response.json() )
    .catch( ( error ) => setError( error ) );

    changeRegion( region );
    setCountries( data );
    setLoading( false );
  };

  function changeRegion( regionInput ) {
    if ( regionInput !== region ) {
      setRegion( regionInput );
    };
  };

  const store = {
    countriesByRegion: {
      get: countries
    },
    region: {
      get: region,
      set: getCountries
    },
    userCountry: {
      get: userCountry,
      set: setUserCountry
    },
    loading: {
      get: loading
    },
    error: {
      get: error
    }
  };

  return (
    <RegionContext.Provider value={ store }>
      { children }
    </RegionContext.Provider>
  )
};

export default RegionContextProvider;
