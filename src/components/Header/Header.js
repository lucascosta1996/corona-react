import React from "react";
import "./assets/styleHeader.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>Coronavirus (COVID-19)</h1>
      </Link>
    </header>
  );
}

export default React.memo(Header);
