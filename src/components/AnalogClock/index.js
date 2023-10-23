import React, { useState, useMemo } from 'react';
import './AnalogClock.scss';


export default function AnalogClock({ date, size }) {
    let [hourStyle, setHourStyle] = useState({});
    let [minuteStyle, setMinuteStyle] = useState({});
    let [secondStyle, setSecondStyle] = useState({});

    const calculateHourHandAngle = (hour, minute) => {
        return 0.5 * (60 * hour + minute);
    };
    const calculateMinuteHandAngle = (minute) => {
        return 6 * minute;
    };
    const calculateSecondHandAngle = (second) => {
        return second * 6;
    };


    useMemo(() => {
        const hours = date.getHours() % 12;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        setHourStyle({
            transform: `rotate(${calculateHourHandAngle(hours, minutes)}deg)`,
        });
        setMinuteStyle({
            transform: `rotate(${calculateMinuteHandAngle(minutes)}deg)`,
        });
        setSecondStyle({
            transform: `rotate(${calculateSecondHandAngle(seconds)}deg)`,
        });
    }, [date]);

    return (
        <div className={`analog-clock ${size}`}>
            <div style={hourStyle} className="hour-hand">
            </div>
            <div style={minuteStyle} className="minute-hand">
            </div>
            <div style={secondStyle} className="second-hand">
            </div>
            <div className="semi-clock"></div>
        </div>
    )
};

AnalogClock.defaultProps = {
    date: new Date(),
    size: "large",
}
