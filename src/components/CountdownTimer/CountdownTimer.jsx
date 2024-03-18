import React, { useState, useEffect, useRef } from 'react';
import styles from "./CountdownTimer.module.scss";

const CountdownTimer = () => {
    console.log("Ads");
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');
    const [sec, setSec] = useState('');
    const countdownTimerRef = useRef(null);

    const startTimer = () => {
        if (hour === '0' && min === '0' && sec === '0') return;

        clearInterval(countdownTimerRef.current); // Clear any previous timer

        countdownTimerRef.current = setInterval(() => {
            timer();
        }, 1000);

        startBtn.disabled = true;
        stopBtn.disabled = false;
    };

    const stopTimer = (state = 'pause') => {
        clearInterval(countdownTimerRef.current);
        startBtn.disabled = false;
        stopBtn.disabled = true;
        startBtn.innerText = state === 'pause' ? 'Continue' : 'Start';
    };

    const timer = () => {
        let updatedSec = parseInt(sec) - 1;
        let updatedMin = parseInt(min);
        let updatedHour = parseInt(hour);

        if (updatedSec < 0) {
            updatedSec = 59;
            updatedMin--;
        }

        if (updatedMin < 0) {
            updatedMin = 60;
            updatedHour--;
        }

        updatedSec = `${updatedSec < 10 ? '0' : ''}${updatedSec}`;
        updatedMin = `${updatedMin < 10 ? '0' : ''}${updatedMin}`;
        updatedHour = `${updatedHour < 10 ? '0' : ''}${updatedHour}`;

        setSec(updatedSec);
        setMin(updatedMin);
        setHour(updatedHour);

        if (updatedHour === '0' && updatedMin === '0' && updatedSec === '0') {
            stopTimer();
            setHour('');
            setMin('');
            setSec('');
        }
    };

    const resetTimer = () => {
        stopTimer();
        setHour('');
        setMin('');
        setSec('');
    };

    useEffect(() => {
        return () => clearInterval(countdownTimerRef.current); // Cleanup
    }, []);

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
                    maxLength="2"
                    value={hour}
                    onChange={(e) => setHour(e.target.value.slice(0, 2))}
                    placeholder="00"
                    className="container__inputs--time hour"
                />
                <p className="container__inputs--colon">:</p>
                <input
                    type="number"
                    maxLength="2"
                    value={min}
                    onChange={(e) => setMin(e.target.value.slice(0, 2))}
                    placeholder="00"
                    className="container__inputs--time minute"
                />
                <p className="container__inputs--colon">:</p>
                <input
                    type="number"
                    maxLength="2"
                    value={sec}
                    onChange={(e) => setSec(e.target.value.slice(0, 2))}
                    placeholder="00"
                    className="container__inputs--time sec"
                />
            </div>

            <div className="container__btns">
                <button className="btn start" disabled={!hour && !min && !sec} onClick={startTimer}>
                    Start
                </button>
                <button className="btn stop" disabled={true} onClick={() => stopTimer()}>
                    Pause
                </button>
                <button className="btn reset" onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CountdownTimer;
