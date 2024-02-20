import { useState } from "react";

export default function TimerChallange({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimerStarted(true);

    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired ? <p>You lost</p> : ""}
      <p>
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? "Stop" : "Start"} Challange
        </button>
      </p>
      <p className={ timerStarted ? 'active' : undefined}>
        {timerStarted ? "Time is running..." :  "Time is inactive"}
      </p>
    </section>
  );
}
