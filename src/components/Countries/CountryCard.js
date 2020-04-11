import React from 'react'

function CountryCard( { country } ) {
  return (
    <div>
      <img src={ country.flag } />
      {country.name}
    </div>
  )
}

export default CountryCard