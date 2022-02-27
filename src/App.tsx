import React, { useEffect, useState } from "react";
import { toggleDarkMode } from "./scripts/DarkToggle";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
const App: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [timeController, changeTimeController] = useState<number>(1);
  const [mode, setMode] = useState<boolean>(false);
  useEffect(() => {
    if (timeController == 0) {
      setTimeout(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    if (timeController == -1) {
      setSeconds(0);
    }
  }, [seconds, timeController]);

  return (
    <main className="counter ">
      <span
        className="absolute top-2 left-2"
        onClick={() => {
          toggleDarkMode();
          setMode(!mode);
        }}
      >
        {mode ? <BsFillMoonFill /> : <BsSunFill />}
      </span>
      <h1>{`${String(Math.floor(seconds / (60 * 60))).padStart(
        2,
        "0"
      )}:${String(
        Math.floor(seconds / 60) - 60 * Math.floor(seconds / 60 / 60)
      ).padStart(2, "0")}:${String(
        seconds - Math.floor(seconds / 60) * 60
      ).padStart(2, "0")}`}</h1>
      <div className="commanders">
        <button onClick={() => changeTimeController(0)}>Start</button>
        <button onClick={() => changeTimeController(1)}>Pause</button>
        <button onClick={() => changeTimeController(-1)}>Reset</button>
      </div>
    </main>
  );
};

export default App;
