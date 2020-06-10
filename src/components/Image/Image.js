import React from "react";

function Image({ className, countryName, src }) {
  return <img alt={`${countryName} flag`} className={className} src={src} />;
}

export default React.memo(Image);
