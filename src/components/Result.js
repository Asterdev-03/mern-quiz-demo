import React from "react";
import { Link } from "react-router-dom";

import ResultTable from "./ResultTable";

export default function Result() {
  function onRestart() {
    console.log("on restart");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz App</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold"> Aster</span>
        </div>
        <div className="flex">
          <span>Points</span>
          <span className="bold"> Aster</span>
        </div>
        <div className="flex">
          <span>Total qstn</span>
          <span className="bold"> Aster</span>
        </div>
        <div className="flex">
          <span>Attempts</span>
          <span className="bold"> Aster</span>
        </div>
        <div className="flex">
          <span>Earn points</span>
          <span className="bold"> Aster</span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        {/* result table */}
        <ResultTable />
      </div>
    </div>
  );
}
