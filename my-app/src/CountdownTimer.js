import './CountdownTimer.css';

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(60); // countdown from 60 seconds
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let timer;
      if (isActive && timeLeft > 0) {
        timer = setInterval(() => {
          setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);
      }
  
      return () => clearInterval(timer); // Cleanup timer on unmount
    }, [isActive, timeLeft]);
  
    const startTimer = () => {
      setIsActive(true);
    };
  
    const resetTimer = () => {
      setIsActive(false);
      setTimeLeft(60); // Reset to 60 seconds
    };
  
    return (
      <div className="countdown-timer">
        <h1 className={timeLeft > 0 ? "timer" : "timer-up"}>{timeLeft > 0 ? timeLeft : 'Time’s up!'}</h1>
        <div className="buttons">
          <button onClick={startTimer} disabled={isActive}>
            Start
          </button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    );
  };
  
  export default CountdownTimer;
