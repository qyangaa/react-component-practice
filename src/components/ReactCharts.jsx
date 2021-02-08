// reference: https://www.npmjs.com/package/react-charts#quick-example
import React, { useState, useMemo } from "react";

import { Chart } from "react-charts";

export default function ReactCharts() {
  const [curData, setCurData] = useState([
    [0, 1],
    [1, 2],
    [2, 4],
    [3, 2],
    [4, 7],
  ]);

  let data = useMemo(
    () => [
      {
        label: "Series 1",
        data: curData,
      },
    ],
    [curData]
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} tooltip primaryCursor secondaryCursor />
    </div>
  );

  const handleInput = (e) => {
    const inputString = e.target.value.split(",");

    const newData = [];
    let x = 0;
    for (let n of inputString) {
      if (n) {
        newData.push([x, parseInt(n)]);
        x++;
      }
    }
    setCurData(newData);
  };

  return (
    <div>
      {lineChart}
      y input:
      <input
        type="text"
        placeholder="0,1,2,3,4,5"
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
}
