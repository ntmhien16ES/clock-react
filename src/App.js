import React, { useState, useEffect } from 'react';
import AnalogClock from './components/AnalogClock';
import DigitalClock from './components/DigitalClock';
import './styles/app.scss';

function App() {
    let [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date(Date.now()));
        }, 1000);
    }, []);

    return (
        <>
            <AnalogClock date={date} size="small" />
            <DigitalClock date={date} />
        </>
    );
}

export default App;
