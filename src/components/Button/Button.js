import React from 'react'
import { Link } from 'react-router-dom'

function Button( { className, label, route } ) {
  return (
    <Link className={ className } to={ route } id="back">
      { label }
    </Link>
  )
}

export default Button