import React from 'react';

function PomoControls({ isActive, changeTime, handleReset }) {
  // const promoBtn = useRef();

  // useEffect(() => {
  //   if(promoBtn.current) promoBtn.current.focus(); 
  // }, [promoBtn]);
  
  return (
    <div className="pomo-controls">
      <button className='btn-color-25' variant="outline-secondary" onClick={() => changeTime(25)}>Pomodoro</button>
      <button className='btn-color-5' variant="outline-secondary" onClick={() => changeTime(5)}>Short Break</button>
      <button className='btn-color-15' variant="outline-secondary" onClick={() => changeTime(15)}>Long Break</button>
      <button className={`btn-color-reset ${!isActive ? ' hidden' : ''}`} variant="outline-secondary" onClick={handleReset}>Reset</button>
    </div>
  );
}

export default PomoControls;
