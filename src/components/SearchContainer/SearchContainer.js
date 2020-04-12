import React, { useContext, useEffect, Fragment, useState } from 'react'
import Select from '../Select/Select'
import { RegionContext } from '../../context/RegionContext'
import Country from '../CountryDetected.js/Country'
import './assets/styleSearchContainer.scss'

function SearchContainer() {
  const context = useContext( RegionContext )
  const [ firstRender, setFirstRender ] = useState( false )
  const [ realRegion, setRealRegion ] = useState()
  const [ countryDetected, setCountryDetected ] = useState()
  
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
  
  async function detectRegion() { 
    const data = await fetch( 'http://ip-api.com/json' ).then( ( response ) => response.json() )
    setRealRegion( data )
    setRegion( data.countryCode )
  }

  useEffect( () => {
    if ( !firstRender ) {
      detectRegion()
      setFirstRender( true )
    }
  }, [ context.region.get ] )


  async function setRegion( countryCode ) {
    const country = await fetch( `https://restcountries.eu/rest/v2/alpha/${countryCode}` ).then( ( response ) => response.json() )
    //const region = regions.filter( region => region.name === country.region )
    context.region.set( country.region )
    setCountryDetected( country )
  }

  return (
    <RegionContext.Consumer>
      { ( context ) => (
        <Fragment>
          <Country country={ countryDetected } countries={ context.countriesByRegion.get } />
          <nav className="search-container-wrapper">
            <Select data={ context.countriesByRegion.get } loading={ context.loading.get } defaultValue="Select a country" />
            <Select data={ regions } loading={ context.loading.get } defaultValue={ context.region.get } onChange={ onChange } />
          </nav>
        </Fragment>
      ) }
    </RegionContext.Consumer>
  )
}

export default SearchContainer
