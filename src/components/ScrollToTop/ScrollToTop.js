import React, { useLayoutEffect  } from 'react'
import './assets/styleScroll.scss'

function ScrollToTop() {

  function goToTop() {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }

  return (
    <button className="scroll-top-button" onClick={ () => goToTop() }>
      Back to top
    </button>
  )
}

export default ScrollToTop
