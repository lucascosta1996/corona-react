import React from "react"
import RegionContextProvider from "../context/regionContext"
import SearchContainer from "../components/layout/SearchContainer"
import CountriesList from "../components/Countries/CountriesList"

export default () => {
  return (
    <RegionContextProvider>
      <SearchContainer />
      <CountriesList />
    </RegionContextProvider>
  )
}
