import React, { Fragment, lazy, Suspense } from "react";
import useCovid from "../../hooks/useCovid";
import { formatNumberWithComma } from "../../utils/helpers";
import "./assets/countriesStyle.scss";

const ImageLazy = lazy(() => import("../Image/Image"));

const ImageReplace = () => <div className="country-card-flag" />;

function CountryCard({ country }) {
  const { countryCovid } = useCovid(country);
  const hasCovidInfo = countryCovid && !countryCovid.error;

  return (
    <li className="country-card">
      <Suspense fallback={<ImageReplace />}>
        <ImageLazy
          className="country-card-flag"
          src={country.flag}
          countryName={country.name}
        />
      </Suspense>
      <section className="country-card-info-wrapper">
        <h2 className="country-card-title">{country.name}</h2>
        <div className="info-wrapper">
          <span className="info-label">Population: </span>
          <span className="info-content">
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
        <Fragment>
          <div className="info-wrapper">
            <span className="info-label">Confirmed cases: </span>
            <span className="info-content">
              {hasCovidInfo
                ? formatNumberWithComma(countryCovid.confirmed.value)
                : "-"}
            </span>
          </div>
          <div className="info-wrapper">
            <span className="info-label">Recovered: </span>
            <span className="info-content">
              {hasCovidInfo
                ? formatNumberWithComma(countryCovid.recovered.value)
                : "-"}
            </span>
          </div>
          <div className="info-wrapper">
            <span className="info-label">Deaths: </span>
            <span className="info-content">
              {hasCovidInfo
                ? formatNumberWithComma(countryCovid.deaths.value)
                : "-"}
            </span>
          </div>
        </Fragment>
      </section>
    </li>
  );
}

export default React.memo(CountryCard);
