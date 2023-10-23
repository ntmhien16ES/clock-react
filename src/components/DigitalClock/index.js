import React, { useState, useMemo } from "react";
import "./DigitalClock.scss";
import Number from './Number';

export default function DigitalClock({ date }) {
    let [classNumber, setClassNumber] = useState({});

    const digitToNameClass = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    const getTimeString = (time) => {
        const timeString = time.toString()
        return timeString.length === 1 ? `0${timeString}` : timeString;
    }

    useMemo(() => {
        const hour = getTimeString(date.getHours());
        const minutes = getTimeString(date.getMinutes());
        const seconds = getTimeString(date.getSeconds());
        setClassNumber({
            h1: digitToNameClass[hour[0]],
            h2: digitToNameClass[hour[1]],
            m1: digitToNameClass[minutes[0]],
            m2: digitToNameClass[minutes[1]],
            s1: digitToNameClass[seconds[0]],
            s2: digitToNameClass[seconds[1]],
        });
    }, [date]);

    return (
        <div id="digitalClock" className="digital-clock">
            <div className="display">
                <div className="digits">
                    {/* hours*/}
                    <Number classNumber={classNumber.h1} />
                    <Number classNumber={classNumber.h2} />

                    <div className="dots"></div>

                    {/* minutes */}
                    <Number classNumber={classNumber.m1} />
                    <Number classNumber={classNumber.m2} />

                    <div className="dots"></div>

                    {/* seconds */}
                    <Number classNumber={classNumber.s1} />
                    <Number classNumber={classNumber.s2} />
                </div>
            </div>
        </div>
    );
}

DigitalClock.defaultProps = {
    date: new Date(),
}
