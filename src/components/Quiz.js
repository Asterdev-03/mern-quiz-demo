import React from "react";

export default function Quiz() {
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
