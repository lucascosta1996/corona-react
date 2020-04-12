import React from 'react'
import "./assets/countriesStyle.scss"

function CountryCard( { country } ) {
  return (
    <li className="country-card">
      <img className="country-card-flag" src={ country.flag } />
      <section className="country-card-info-wrapper">
        <h2 className="country-card-title">{ country.name }</h2>
        <div className="info-wrapper">
          <span className="info-label">Population: </span>
          <span className="info-content">{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</span>
        </div>
        <div className="info-wrapper">
          <span className="info-label">Region: </span>
          <span className="info-content">{ country.region }</span>
        </div>
        <div className="info-wrapper">
          <span className="info-label">Capital: </span>
          <span className="info-content">{ country.capital || '—' }</span>
        </div>
      </section>
    </li>
  )
}

export default CountryCard