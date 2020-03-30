import React from 'react'

function Select( { data, defaultValue, onChange } ) {
  if ( data === undefined ) {
    return <div>Loading</div>
  } 

  const list = data.map( item => {
    return (
      <option key={ item.name }>{item.name}</option>
    )
  } )

  return (
    <select
      defaultValue={ defaultValue }
      disabled={ data === undefined }
      onChange={ onChange }
    >
      { list }
    </select>
  )
}

export default Select
