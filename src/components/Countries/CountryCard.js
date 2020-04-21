import React, { Fragment } from 'react';
import useCovid from '../../hooks/useCovid';
import { formatNumberWithComma } from '../../utils/helpers';
import "./assets/countriesStyle.scss";

function CountryCard( { country } ) {
  const { countryCovid } = useCovid( country );

  return (
    <li className="country-card">
      <img alt={ `${country.name} flag` } className="country-card-flag" src={ country.flag } />
      <section className="country-card-info-wrapper">
        <h2 className="country-card-title">{ country.name }</h2>
        <div className="info-wrapper">
          <span className="info-label">Population: </span>
          <span className="info-content">{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</span>
        </div>
       {
         ( countryCovid && !countryCovid.error ) && (
           <Fragment>
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
           </Fragment>
         )
       }
      </section>
    </li>
  );
};

export default React.memo( CountryCard );