//Ref: https://www.w3schools.com/js/js_htmldom_animate.asp

import React, { useRef } from "react";

export default function BasicAnimation() {
  const animateItem = useRef(null);
  const startAnimation = () => {
    animateItem.current.style.backgroundColor = "grey";
    animateItem.current.style.visibility = "visible";
    console.log({ animateItem });
    let pos = 0;
    let id = setInterval(frame, 5);
    function frame() {
      if (pos == 700) {
        clearInterval(id);
        animateItem.current.style.visibility = "hidden";
      } else {
        pos++;
        animateItem.current.style.top = pos + "px";
        animateItem.current.style.left = pos + "px";
      }
    }
  };
  console.log(animateItem);
  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => startAnimation()}>Start Animation</button>
      <div
        id="basic-animation"
        style={{
          width: "50px",
          height: "50px",
          position: "fixed",
          visibility: "hidden",
        }}
        ref={animateItem}
      >
        Basic Animation
      </div>
    </div>
  );
}
