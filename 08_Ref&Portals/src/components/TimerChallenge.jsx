import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

// let timer; variable is shared across all component instances so not the solution.

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerOn, setTimerOn] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
    setTimerOn(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  // function handleClick() {
  //   setTimeout(
  //     () => {
  //       setTimerOn(false);
  //     },
  //     Number(targetTime) * 1000,
  //   );
  //   if (!timerOn) {
  //     setTimerOn(true);
  //   } else {
  //     setTimerOn(false);
  //   }
  // }
  return (
    <>
      {/* ResultModal is always rendered because since it's invisible and not really part of the visible dom anyways. */}
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerOn ? handleStop : handleStart}>
            {timerOn ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerOn ? "active" : ""}>
          {timerOn ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
