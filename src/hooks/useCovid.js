import { useState, useEffect } from 'react';

export default function useCovid( country ) {
  const [countryCovid, setCountryCovid] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      if ( country === undefined ) {
        return
      } else {
        setLoading(true)
        setError()
   
        const data = await fetch( `https://covid19.mathdro.id/api/countries/${country.alpha2Code}` )
          .then(res => res.json())
          .catch(err => {
            setError(err)
          })
        setCountryCovid( data )
        setLoading(false)
      }

    }
    fetchData()
  }, [ country ])

  return {
    countryCovid,
    loading,
    error,
  }
}
