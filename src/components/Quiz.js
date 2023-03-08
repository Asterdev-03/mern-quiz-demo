/** Displays the quiz page */

import React, { useEffect } from "react";
import Questions from "./Questions";

/** create store input */
import { useSelector } from "react-redux";

export default function Quiz() {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  });

  /** next button event handler */
  function onNext() {
    console.log("next click");
  }

  /** prev button event handler */
  function onPrev() {
    console.log("prev click");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>

      {/* display questions */}
      <Questions />

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
