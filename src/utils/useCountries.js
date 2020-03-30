import { useContext, useEffect, useState } from 'react'

export default function useCountries( region ) {
  const [ loading, setLoading ] = useState( true )
  const [ countries, setCountries ] = useState()
  const [ countriesByRegion, setCountriesByRegion ] = useState()
  const [ error, setError ] = useState( false )

  useEffect( () => {
    if ( region ) {
      getCountriesByRegions( region )
    } else {
      getAllCountries()
    }
  }, [] )

  async function getAllCountries() {
    const data = await fetch( 'https://restcountries.eu/rest/v2/all' )
    .then( ( response ) => response.json() )
    .catch( ( error ) => setError( error ) )

    setCountries( data )
    setLoading( false )
  }

  async function getCountriesByRegions( regionalParam ) {
    const data = await fetch( `https://restcountries.eu/rest/v2/region/${regionalParam}` )
    .then( ( response ) => response.json() )
    .catch( ( error ) => setError( error ) )

    setCountriesByRegion( data )
    setLoading( false )
  }

  return {
    countries,
    countriesByRegion,
    loading,
    error
  }
} 