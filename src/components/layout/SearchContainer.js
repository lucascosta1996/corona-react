import React, { useContext, useEffect, Fragment, useState } from 'react'
import Select from '../Select/Select'
import { RegionContext } from '../../context/regionContext'

function SearchContainer() {
  const context = useContext( RegionContext )
  const [ firstRender, setFirstRender ] = useState( false )
  const [ realRegion, setRealRegion ] = useState()
  
  const regions = [
    { name: 'Africa', alpha2code: 'Africa' },
    { name: 'Americas', alpha2code: 'Americas' },
    { name: 'Asia', alpha2code: 'Asia' },
    { name: 'Europe', alpha2code: 'Europe' },
    { name: 'Oceania', alpha2code: 'Oceania' }
  ]

  const onChange = ( event ) => {
    context.region.set( event.target.value )
  }
  
  useEffect( () => {
    if ( !firstRender ) {
      detectRegion()
      setFirstRender( true )
    }
  }, [ context.region.get ] )

  async function detectRegion() { 
    const data = await fetch( 'http://ip-api.com/json' ).then( ( response ) => response.json() )
    setRealRegion( data )
    setRegion( data.countryCode )
  }

  async function setRegion( countryCode ) {
    const data = await fetch( `https://restcountries.eu/rest/v2/alpha/${countryCode}` ).then( ( response ) => response.json() )
    const region = regions.filter( region => region.name === data.region )
    context.region.set( data.region )
  }

  return (
    <RegionContext.Consumer>
      { ( context ) => (
        <Fragment>
          <Select data={ context.countriesByRegion.get } loading={ context.loading.get } defaultValue="Select a country" />
          <Select data={ regions } loading={ context.loading.get } defaultValue={ context.region.get } onChange={ onChange } />
        </Fragment>
      ) }
    </RegionContext.Consumer>
  )
}

export default SearchContainer
