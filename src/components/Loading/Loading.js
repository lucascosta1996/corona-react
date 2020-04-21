import React from 'react';
import ReactLoading from 'react-loading';
import "./assets/styleLoading.scss"

function Loading( { type } ) {
  return (
    <div className="loading-wrapper">
      <ReactLoading type={ type } color="#fff" /> 
    </div>
  )
}

export default Loading;
