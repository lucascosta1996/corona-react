import React from 'react'

function Select( { data, defaultValue, loading, onChange } ) {
  if ( data === undefined || loading ) {
    return <div>Loading</div>
  }

  const list = data.map( item => {
    return (
      <option
        key={ item.name }
        value={ item.alpha2code }
      >
        {item.name}
      </option>
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
