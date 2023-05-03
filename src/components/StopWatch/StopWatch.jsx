import React, { useEffect, useState } from 'react'
import "./stopwatch.css";
import Timer from './Timer';
import ControlButtons from './ControlButtons';

const StopWatch = () => {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
        setLaps([]);
    };

    const addLap = () => {
        setLaps((prevLaps) => [...prevLaps, time]);
    }
    
  return (
    <div className='stop-watch'>
        <Timer time = {time} />
        <ControlButtons
            active = {isActive}
            isPaused = {isPaused}
            handleStart = {handleStart}
            handlePauseResume = {handlePauseResume}
            handleReset = {handleReset}
        />
        <button className='btnLap' onClick={addLap} >Lap</button>
        <ul>
            {
                laps.map((lapTime) => (
                    <li>{lapTime}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default StopWatch
