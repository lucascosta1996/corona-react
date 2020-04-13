import React, { useContext } from 'react'
import { RegionContext } from '../../context/RegionContext'
import CountryCard from './CountryCard'
import { Link } from 'react-router-dom'

export default function CountriesList() {
  const context = useContext( RegionContext )
  const countries = context.countriesByRegion.get
  const loading = context.loading.get

  if ( loading || countries === undefined ) return null

  return ( 
    <ul className="countries-list-wrapper">
      {
        countries.map( country => (
          <Link to={`/country/${country.name}`}>
            <CountryCard country={ country } key={ country.name }></CountryCard>
          </Link>
        ) )
      }
    </ul>
  )
}