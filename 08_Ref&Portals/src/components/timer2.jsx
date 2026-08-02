import { useState } from "react";

let timer;

export default function TimerChallenge({ title, targetTime }) {
  const [timerOn, setTimerOn] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerOn(true);
  }

  function handleStop() {
    clearTimeout(timer);
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
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerOn ? "Stop" : "Start"} challenge
        </button>
      </p>
      <p className={timerOn ? "active" : ""}>
        {timerOn ? "Timer is running" : "Timer inactive"}
      </p>
    </section>
  );
}
