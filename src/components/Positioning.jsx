import React, { useState } from "react";

export default function Positioning() {
  const [position, setPosition] = useState("static");
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const explaination = {
    static:
      "Static positioned elements are not affected by the top, bottom, left, and right properties.",
    relative: "relative to its parent",
    fixed: "relative to the viewport",
    absolute:
      "positioned relative to the nearest positioned ancestor. A positioned element is one whose position is anything except static.",
    sticky: "based on the user's scroll position",
  };
  return (
    <div>
      <button onClick={() => setPosition("static")}>static</button>
      <button onClick={() => setPosition("relative")}>relative</button>
      <button onClick={() => setPosition("fixed")}>fixed</button>
      <button onClick={() => setPosition("absolute")}>absolute</button>
      <button onClick={() => setPosition("sticky")}>sticky</button>
      x:{" "}
      <input
        style={{ width: "50px" }}
        type="text"
        onChange={(e) => setX(e.target.value)}
      />
      y:{" "}
      <input
        type="text"
        style={{ width: "50px" }}
        onChange={(e) => setY(e.target.value)}
      />
      <div>{explaination[position]}</div>
      <div
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid",
        }}
      >
        <div
          style={{
            top: y + "px",
            left: x + "px",
            width: "50px",
            height: "50px",
            backgroundColor: "black",
            position: position,
          }}
        ></div>
      </div>
    </div>
  );
}
