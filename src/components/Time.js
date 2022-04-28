import React from 'react';

function Time({ startTime, isActive, handleStartStop }) {
  
  return (
    <div className="pomo-timer">
      <h1>{startTime}</h1>
      <button variant="outline-secondary"
        className={
          !isActive ? "up" : "down"
        }
        onClick={handleStartStop}
      >{!isActive ? "Start" : "Stop"}</button>
    </div>
  )
}

export default Time;
