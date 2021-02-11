//ref: https://www.youtube.com/watch?v=-bmdf1oATQo
import React, { useState } from "react";

export default function Testing() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>This is counter app</h1>
      <div data-test="counter-value">{counter}</div>
      <button
        data-test="increment-btn"
        onClick={() => setCounter((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button
        data-test="decrement-btn"
        onClick={() =>
          setCounter((prevCount) => (counter > 0 ? prevCount - 1 : 0))
        }
      >
        Decrement
      </button>
    </div>
  );
}
