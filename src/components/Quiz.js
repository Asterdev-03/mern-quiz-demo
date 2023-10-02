/** Displays the quiz page */

import React, { useEffect } from "react";
import Questions from "./Questions";

import { moveNextQuestion, movePrevQuestion } from "../hooks/FetchQuestion";

/** create store input */
import { useSelector, useDispatch } from "react-redux";

export default function Quiz() {
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace);
  });

  /** next button event handler */
  function onNext() {
    console.log("next click");
    /** update the trace value by one using moveNextAction */
    if (trace < queue.length) {
      dispatch(moveNextQuestion());
    }
  }

  /** prev button event handler */
  function onPrev() {
    console.log("prev click");
    /** update the trace value by one using movePrevAction */
    if (trace > 0) {
      dispatch(movePrevQuestion());
    }
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
