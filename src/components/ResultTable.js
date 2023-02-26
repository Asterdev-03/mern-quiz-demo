import React from "react";

export default function ResultTable() {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>Aster</td>
            <td>5</td>
            <td>2</td>
            <td>Passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
