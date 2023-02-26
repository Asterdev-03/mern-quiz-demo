import React, { useState } from "react";

export default function Questions() {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log("radio btn change");
  }

  return (
    <div className="questions">
      <h1 className="text-light">Qstn 1</h1>

      <ul>
        <li>
          <input
            type="radio"
            value={false}
            name="options"
            id="q1-option"
            onChange={onSelect()}
          />
          <label className="text-primary" htmlFor="q1-option">
            option
          </label>
          <div className="check checked"></div>
        </li>
      </ul>
    </div>
  );
}
