import React from 'react';
import useCovid from '../../hooks/useCovid';
import { formatNumberWithComma } from '../../utils/helpers';
import './assets/styleCountry.scss';

function Country( { country } ) {
  const { countryCovid } = useCovid( country );
  
  if ( country === undefined ) {
    return null;
  };

  //country.borders.map( country => countries.find( code => { if(country == code.alpha3code) {} console.log( 'alpha3code', code.alpha3code ); console.log( 'country', country ); debugger} )  )
  //console.log( country )
  return (
    <div className="country-detected-wrapper">
      <img className="country-flag" src={ country.flag } />
      <div className="country-info-container">
        <header>
          <h2 className="country-title">
            { country.name }
          </h2>
        </header>
        <section className="main-info-columns">
          <div className="left-column">
            <div className="info-wrapper">
              <span className="info-label">Native name: </span>
              <span className="info-content">{ country.nativeName }</span>
            </div>
            <div className="info-wrapper">
              <span className="info-label">Population: </span>
              <span className="info-content">{ country.population }</span>
            </div>
            <div className="info-wrapper">
              <span className="info-label">Region: </span>
              <span className="info-content">{ country.region }</span>
            </div>
            <div className="info-wrapper">
              <span className="info-label">Sub Region: </span>
              <span className="info-content">{ country.subregion }</span>
            </div>
            <div className="info-wrapper">
              <span className="info-label">Capital: </span>
              <span className="info-content">{ country.capital }</span>
            </div>
          </div>
          <div className="right-column">
            <div className="info-wrapper">
              <span className="info-label">Top Level Domain: </span>
              <span className="info-content">{ country.topLevelDomain }</span>
            </div>
            <div className="info-wrapper">
              <span className="info-label">Currencies: </span>
              <span className="info-content">{ country.currencies[0].name }</span>
            </div>
            <div className="info-wrapper">
              <span className="info-label">Languages: </span>
              <span className="info-content">{ country.languages[0].name }</span>
            </div>
         </div>
        </section>
        {
          ( countryCovid && !countryCovid.error ) ? (
            <section className="corona-stats">
              <h2 className="corona-title">COVID-19 status:</h2>
              <div className="info-wrapper">
                <span className="info-label">Confirmed cases: </span>
                <span className="info-content">{ formatNumberWithComma( countryCovid.confirmed.value ) || '-' }</span>
              </div>
              <div className="info-wrapper">
                <span className="info-label">Recovered: </span>
                <span className="info-content">{ formatNumberWithComma( countryCovid.recovered.value ) || '-' }</span>
              </div>
              <div className="info-wrapper">
                <span className="info-label">Deaths: </span>
                <span className="info-content">{ formatNumberWithComma( countryCovid.deaths.value ) || '-' }</span>
              </div>
            </section>
          ) : (
            <section className="corona-stats">
              <h2 className="corona-title"> It was not possible to retrieve any data about Covid-19 in this country :( </h2>
            </section>
          )
        }
      </div>
    </div>
  );
};

export default Country;
