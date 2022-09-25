import React from 'react';
import {useStopwatch} from 'react-timer-hook';

function Timer() {
    const {
        seconds,
        minutes,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true });

    if (minutes < 1) {
        return (
            <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '90px', color: 'grey', fontFamily: 'Century Gothic'}}>
                    <span>{seconds}</span>
                </div>
                <button className="Timer-button" onClick={start}>Reprendre</button>
                <button className="Timer-button" onClick={pause}>Pause</button>
                <button className="Timer-button" onClick={reset}>Réinitialiser</button>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default Timer;