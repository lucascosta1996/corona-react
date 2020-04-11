import React, { useContext, useEffect, Fragment } from 'react'
import Select from '../Select/Select'
import { RegionContext } from '../../context/regionContext'

function SearchContainer() {
  const context = useContext( RegionContext )
  
  const regions = [ { name: 'Europe', alpha2code: 'europe' }, { name: 'Asia', alpha2code: 'asia' } ]

  const onChange = ( event ) => {
    context.region.set( event.target.value )
  }
  
  useEffect( () => {
    context.region.set( context.region.get )
  }, [] )

  return (
    <RegionContext.Consumer>
      { ( context ) => (
        <Fragment>
          <Select data={ context.countriesByRegion.get } loading={ context.loading.get } defaultValue="Select a country" />
          <Select data={ regions } defaultValue="Select a region" onChange={ onChange } />
        </Fragment>
      ) }
    </RegionContext.Consumer>
  )
}

export default SearchContainer
