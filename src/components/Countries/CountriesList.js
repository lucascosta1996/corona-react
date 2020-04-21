import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RegionContext } from '../../context/RegionContext';
import CountryCard from './CountryCard';
import Loading from '../Loading/Loading';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function CountriesList() {
  const context = useContext( RegionContext )
  const countries = context.countriesByRegion.get
  const loading = context.loading.get

  useEffect( () => {
    if ( window.scrollY > 1000 ) {
      console.log( window.scrollY )
    }
  }, [ window ] )

  if ( loading || countries === undefined ) {
    return <Loading type="bubbles" />
  }

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

export default React.memo( CountriesList )