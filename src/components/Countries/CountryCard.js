import React from 'react'
import "./assets/countriesStyle.scss"

function CountryCard( { country } ) {
  return (
    <li className="country-card">
      <img className="country-card-flag" src={ country.flag } />
      <section>
        <h2 className="country-card-title">{country.name}</h2>
      </section>
    </li>
  )
}

export default CountryCard