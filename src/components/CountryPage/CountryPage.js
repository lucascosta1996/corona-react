import React from 'react'
import Country from '../CountryDetected.js/Country'
import Button from '../Button/Button'
import { Redirect } from 'react-router-dom'
import './assets/styleCountryPage.scss'

function CountryPage( { location } ) {
  if ( location.state === undefined ) {
    return <Redirect to="/" />
  }

  const { country } = location.state

  return (
    <div className="country-page">
      <Button className="back" pathName="/" label="&#8592; Back" />
      <Country country={ country } />
    </div>
  )
}

export default CountryPage