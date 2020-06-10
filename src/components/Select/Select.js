import React from "react";
import "./assets/styleSelect.scss";

function Select({ data, defaultValue, loading, onChange }) {
  if (data === undefined || loading) {
    return null;
  }

  const list = data.map((item) => {
    return (
      <option className="option" key={item.name} value={item.alpha2code}>
        {item.name}
      </option>
    );
  });

  return (
    <select
      className="select"
      defaultValue={defaultValue}
      disabled={data === undefined}
      onChange={onChange}
    >
      {list}
    </select>
  );
}

export default Select;
