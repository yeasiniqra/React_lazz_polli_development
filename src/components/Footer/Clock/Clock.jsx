import { useState } from "react";

const Clock = () => {
    const [tick, setTick] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setTick(new Date().toLocaleTimeString())
    }, 1000);
   

    return (
        <div>
            <h1 className="timer__time" id="current-time">{tick}</h1>
        </div>
    );
};

export default Clock;