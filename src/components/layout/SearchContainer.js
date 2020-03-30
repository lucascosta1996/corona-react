import React, { useContext } from 'react'
import useCountries from '../../utils/useCountries'
import Select from '../Select/Select'
import { RegionContext } from '../../context/regionContext'

function SearchContainer() {
  const context = useContext( RegionContext )
  const { countries } = useCountries()

  return (
    <div>
      <Select data={ countries } defaultValue="Select a country" />
    </div>
  )
}

export default SearchContainer
