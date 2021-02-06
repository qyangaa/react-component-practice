// Reference: https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3

import { React, useEffect, useState } from "react";
import "./TrackMouse.css";

export default function TrackMouse() {
  const [mousePosition, setMousePosition] = useState([]);

  useEffect(() => {
    const setPosition = (e) => {
      setMousePosition([e.x, e.y]);
    };
    window.addEventListener("mousemove", setPosition);
    return () => {
      window.removeEventListener("mousemove", setPosition);
    };
  }, []);

  return (
    <div>
      Track mouse: Mouse position: {mousePosition.toString()}{" "}
      <div
        className="cursor"
        style={{
          left: `${mousePosition[0]}px`,
          right: `${mousePosition[1]}px`,
        }}
      />
    </div>
  );
}
