// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import PomoControls from './components/PomoControls'
import Time from './components/Time'
// import Todo from './components/Todo'
import './App.css';

function App() {
  const minutesRef = useRef(25);
  let [totalSeconds, setTotalSeconds] = useState((minutesRef.current * 60));
  const [time, setTime] = useState(minutesRef.current + ':00');
  const [isActive, setIsActive] = useState(false);

  const padLeft = (minutes, seconds) => {
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    return m + ':' + s;
  }
  const handleStartStop = () => {
    if (!isActive) {
      setTotalSeconds(prev => prev - 1)
    }
     setIsActive(!isActive)
  }
  const changeTime = (min) => {
    minutesRef.current = min;
    if (isActive) {
      let text = "The timer is running! Still proceed?";
      if (window.confirm(text)) {
        setIsActive(!isActive)
        setTotalSeconds(minutesRef.current * 60);
        setTime(padLeft(minutesRef.current, 0))
      }
    } else {
      setTotalSeconds(minutesRef.current * 60);
      setTime(padLeft(minutesRef.current, 0))
    }
  }
  const reset = () => {
    setIsActive(false);
    setTotalSeconds(minutesRef.current * 60);
    setTime(padLeft(minutesRef.current, 0))
  }

  useEffect(() => {
    let interval = null;
    if (isActive && totalSeconds >= 0) {
      interval = setInterval(() => {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        setTime(padLeft(minutes, seconds))
        setTotalSeconds(prev => prev - 1)
      }, 1000);
    } else if (isActive && totalSeconds < 0) {
      clearInterval(interval);
      setIsActive(false)
    } else if (!isActive && totalSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, totalSeconds]);

  return (
    <div className={`container 
      ${minutesRef.current === 25 && "background-red"}
      ${minutesRef.current === 5 && "background-light-blue"}
      ${minutesRef.current === 15 && "background-blue"}`}>
      <h1>Pomodoro Timer</h1>
      {/*<div className="site-visits">Site visits: { 100 }</div>*/}
      <div className={`pomo-card 
      ${minutesRef.current === 25 && "background-red-lighter"}
      ${minutesRef.current === 5 && "background-light-blue-lighter"}
      ${minutesRef.current === 15 && "background-blue-lighter"}`}>
        <PomoControls isActive={isActive} changeTime={changeTime} handleReset={reset} />
        <Time startTime={time} isActive={isActive} handleStartStop={handleStartStop} />
      </div>
      <div className="focus-break">
        <p>{minutesRef.current === 25 ? "Time to focus!" : "Time for a break"}</p>
      </div>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
