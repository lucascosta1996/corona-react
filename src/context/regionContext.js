import React, { useState } from 'react'

export const RegionContext = React.createContext()

function RegionContextProvider( { children } ) {
  const [ region, setRegion ] = useState( 'europe' )
  const [ countries, setCountries ] = useState()

  async function getCountries( region ) {
    const data = await fetch( `https://restcountries.eu/rest/v2/${region}` )
    .then( ( response ) => response.json() )
    .catch( ( error ) => setError( error ) )

    setCountries( data )
    setRegion( region )
    setLoading( false )
  }

  const store = {
    countries: {
      get: countries,
      set: getCountries
    },
    region: {
      get: region,
      setRegion: setRegion
    }
  }

  return (
    <RegionContext.Provider value={ store }>
      { children }
    </RegionContext.Provider>
  )
}

export default RegionContextProvider
