// src/CountdownTimer.js
import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = () => {
  const [inputDays, setInputDays] = useState(0);
  const [inputHours, setInputHours] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    const totalSeconds = 
      parseInt(inputDays) * 86400 + 
      parseInt(inputHours) * 3600 + 
      parseInt(inputMinutes) * 60 + 
      parseInt(inputSeconds);
    setTime(totalSeconds);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setInputDays(0);
    setInputHours(0);
    setInputMinutes(0);
    setInputSeconds(0);
  };

  const formatTime = (time) => {
    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <div>
        <input
          type="number"
          value={inputDays}
          onChange={(e) => setInputDays(e.target.value)}
          placeholder="Days"
        />
        <input
          type="number"
          value={inputHours}
          onChange={(e) => setInputHours(e.target.value)}
          placeholder="Hours"
        />
        <input
          type="number"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
          placeholder="Minutes"
        />
        <input
          type="number"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(e.target.value)}
          placeholder="Seconds"
        />
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
