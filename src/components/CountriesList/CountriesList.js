import React, { useContext } from 'react'
import { RegionContext } from '../../context/regionContext'

export default function CountriesList() {
  const context = useContext( RegionContext )
  const countries = context.countriesByRegion.get
  const loading = context.loading.get

  if ( loading ) return null

  return ( 
    <ul>
      {
        countries.map( country => (
          <p>{country.name}</p>
        ) )
      }
    </ul>
  )
}