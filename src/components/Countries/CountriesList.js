import React, { useContext, useEffect } from 'react'
import { RegionContext } from '../../context/RegionContext'
import CountryCard from './CountryCard'
import { Link } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

export default function CountriesList() {
  const context = useContext( RegionContext )
  const countries = context.countriesByRegion.get
  const loading = context.loading.get

  useEffect( () => {
    if ( window.scrollY > 1000 ) {
      console.log( window.scrollY )
    }
  }, [window] )

  if ( loading || countries === undefined ) return null

  return ( 
    <ul className="countries-list-wrapper">
      {
        countries.map( country => (
          <Link
            key={ country.name }
            to={ {
              pathname: `/${country.name}`,
              state: {
                country
              } }
            }
          >
            <CountryCard country={ country }></CountryCard>
          </Link>
        ) )
      }
    </ul>
  )
}