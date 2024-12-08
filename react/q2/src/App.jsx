import React, { useState, useEffect } from "react";
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setisRunning] = useState(true);

  function reset() {
    setSeconds(0)
  }
  function toggleTimer() {
    setisRunning(prev => !prev)
  }

  useEffect(() => {
    if (!isRunning) return;
    const timerID = setInterval(() => setSeconds(prev => prev + 1), 1000);

    return () => { clearInterval(timerID) };
  }, [isRunning]); 

  return <div>Elapsed Time: {seconds} seconds
    <div>
      <button onClick={reset}>reset</button>
      <button onClick={toggleTimer}>{isRunning ? "pause" : "resume"}</button>
    </div>

  </div>;
}

export default Timer;

