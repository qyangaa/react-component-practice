import { React, useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isOn) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isOn, time]);

  const resetTimer = () => {
    setIsOn(false);
    setTime(0);
  };

  const getMinutes = () => {
    return Math.floor(time / 60);
  };

  const getSeconds = () => {
    return time % 60;
  };

  return (
    <div>
      Timer:
      <span className="minute">{getMinutes()}</span>
      <span>:</span>
      <span className="second">{getSeconds()}</span>
      <button className="toggle-timer" onClick={() => setIsOn(!isOn)}>
        {isOn ? "Pause" : "Start"}
      </button>
      <button className="reset" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}
