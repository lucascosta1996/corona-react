import React, { useEffect } from 'react'
import Country from '../Country/Country'
import Button from '../Button/Button'
import { Redirect } from 'react-router-dom'
import './assets/styleCountryPage.scss'

function CountryPage( { location } ) {
  useEffect( () => {
    window.scrollTo( 0, 0 );
  } )

  if ( location.state === undefined ) {
    return <Redirect to="/" />
  }

  const { country } = location.state

  return (
    <div className="country-page">
      <section className="back-wrapper">
        <Button className="back" pathName="/" label="&#8592; Back" />
      </section>
      <Country country={ country } />
    </div>
  )
}

export default CountryPage