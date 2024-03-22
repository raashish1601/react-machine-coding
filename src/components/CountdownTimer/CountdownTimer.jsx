import React, { useState, useEffect, useRef } from 'react';
import "./CountdownTimer.css";

export default function CountdownTimer() {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    useEffect(() => {
        let hr = parseInt(hours)
        let min = parseInt(minutes)
        let sec = parseInt(seconds) 
        
        let timer = setInterval(() => {
            if(min >= 1 && sec <= 0) {
                setMinutes('59')
            }

        }, 1000)

        return () => clearInterval(timer);
    }, [hours, minutes, seconds]);

    const startTimer = () => {
        if (hours === '' && minutes === '' && seconds === '') return;
    };

    const updateTimer = () => {
        let newHours = parseInt(hours);
        let newMinutes = parseInt(minutes);
        let newSeconds = parseInt(seconds);

        if (newSeconds > 0 || newMinutes > 0 || newHours > 0) {
            // Update state with callback to ensure UI update
            setHours(newHours.toString().padStart(2, '0'), () => {
                setMinutes(newMinutes.toString().padStart(2, '0'), () => {
                    setSeconds(newSeconds.toString().padStart(2, '0'));
                });
            });
        } else {
            clearInterval(intervalId);
        }
    };

    const stopTimer = () => {
        clearInterval(intervalId);
    };

    const resetTimer = () => {
        clearInterval(intervalId);
        setHours('');
        setMinutes('');
        setSeconds('');
    };

    return (
        <div className="container">
            <span className="container__title">Countdown Timer</span>

            <div className="container__labels">
                <p className="container__labels--label">Hours</p>
                <p className="container__labels--label">Minutes</p>
                <p className="container__labels--label">Seconds</p>
            </div>

            <div className="container__inputs">
                <input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    placeholder="00"
                    className="container__inputs--time hour"
                />
                <p className="container__inputs--colon">:</p>
                <input
                    type="number"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    placeholder="00"
                    className="container__inputs--time minute"
                />
                <p className="container__inputs--colon">:</p>
                <input
                    type="number"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    placeholder="00"
                    className="container__inputs--time sec"
                />
            </div>

            <div className="container__btns">
                <button className="btn start" onClick={startTimer}>
                    Start
                </button>
                <button className="btn stop" onClick={stopTimer}>
                    Pause
                </button>
                <button className="btn reset" onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    );
}