import React, { Fragment, useContext, useEffect } from 'react'
import Select from '../Select/Select'
import { RegionContext } from '../../context/RegionContext'
import Country from '../CountryDetected.js/Country'
import { detectCountry, getCountryInfo } from '../../utils/helpers'
import './assets/styleFilterContainer.scss'

function FilterContainer() {
  const context = useContext( RegionContext )
  
  const regions = [
    { name: 'Africa', alpha2code: 'Africa' },
    { name: 'Americas', alpha2code: 'Americas' },
    { name: 'Asia', alpha2code: 'Asia' },
    { name: 'Europe', alpha2code: 'Europe' },
    { name: 'Oceania', alpha2code: 'Oceania' }
  ]
  
  useEffect( () => {
    if ( !context.userCountry.get ) {
      detectRegion()
    }
  }, [ context.region.get ] )

  async function detectRegion() {
    const countryDetected = await detectCountry()
    const country = await getCountryInfo( countryDetected.country_code2 )
    
    context.region.set( country.region )
    context.userCountry.set( country )
  }

  const onChange = ( event ) => {
    context.region.set( event.target.value )
  }

  return (
    <RegionContext.Consumer>
      { ( context ) => (
        <Fragment>
          <Country
            country={ context.userCountry.get }
          />
          <nav className="search-container-wrapper">
            <Select
              data={ regions }
              defaultValue={ context.region.get }
              loading={ context.loading.get }
              onChange={ onChange }
            />
          </nav>
        </Fragment>
      ) }
    </RegionContext.Consumer>
  )
}

export default React.memo( FilterContainer )
