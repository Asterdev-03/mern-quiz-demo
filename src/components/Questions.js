import React, { useEffect, useState } from "react";
import data from "../database/data";

/**Custom hooks */
import { useFetchQuestion } from "../hooks/FetchQuestion";

export default function Questions() {
  const [checked, setChecked] = useState(undefined);
  const [{ isloading, apiData, serverError }] = useFetchQuestion();
  const question = data[0];

  useEffect(() => {
    //console.log(isloading);
    console.log(apiData);
    // console.log(serverError);
  });

  function onSelect() {
    // console.log("radio btn change");
  }

  return (
    <div className="questions">
      <h1 className="text-light">{question.question}</h1>

      <ul key={question.id}>
        {question.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={onSelect()}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
