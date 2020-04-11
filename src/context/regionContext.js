import React, { useState } from 'react'

export const RegionContext = React.createContext()

function RegionContextProvider( { children } ) {
  const [ region, setRegion ] = useState( 'europe' )
  const [ countries, setCountries ] = useState()
  const [ loading, setLoading ] = useState( true )
  const [ error, setError ] = useState()

  async function getCountries( region ) {
    setLoading( true )

    const data = await fetch( `https://restcountries.eu/rest/v2/region/${region}` )
    .then( ( response ) => response.json() )
    .catch( ( error ) => setError( error ) )

    setCountries( data )
    setRegion( region )
    setLoading( false )
  }

  const store = {
    countriesByRegion: {
      get: countries
    },
    region: {
      get: region,
      set: getCountries
    },
    loading: {
      get: loading
    },
    error: {
      get: error
    }
  }

  return (
    <RegionContext.Provider value={ store }>
      { children }
    </RegionContext.Provider>
  )
}

export default RegionContextProvider
