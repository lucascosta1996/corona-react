import React, { useLayoutEffect, useState } from "react";
import arrowUp from "./assets/iconmonstr-angel-up-thin.svg";
import "./assets/styleScroll.scss";

function ScrollToTop() {
  const [hideScroll, setHideScroll] = useState(true);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });

  function handleScroll() {
    const shouldAppear = window.scrollY < 400;
    setHideScroll(shouldAppear);
  }

  function goToTop() {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }

  if (hideScroll) {
    return null;
  } else {
    return (
      <button className="scroll-top-button" onClick={() => goToTop()}>
        <img src={arrowUp} alt="Scroll to top Button" />
      </button>
    );
  }
}

export default ScrollToTop;
