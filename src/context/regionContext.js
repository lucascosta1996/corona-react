import React, { useState } from 'react'

export const RegionContext = React.createContext()

function RegionContextProvider( { children } ) {
  const [ region, setRegion ] = useState( 'eu' )
  const store = {
    region: { 
      get: region,
      set: setRegion
    }
  }

  return (
    <RegionContext.Provider value={ store }>
      { children }
    </RegionContext.Provider>
  )
}

export default RegionContextProvider
