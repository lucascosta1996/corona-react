import React from "react";
import { Link } from "react-router-dom";

function Button({ className, label, pathName }) {
  return (
    <Link className={className} to={pathName} id="back">
      {label}
    </Link>
  );
}

export default Button;
