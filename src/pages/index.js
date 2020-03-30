import React from "react"
import RegionContextProvider from "../context/regionContext"
import SearchContainer from "../components/layout/SearchContainer"

export default () => {

  return (
    <RegionContextProvider>
      <SearchContainer />
    </RegionContextProvider>
  )
}
