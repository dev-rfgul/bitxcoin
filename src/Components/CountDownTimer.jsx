import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        const miliseconds = String(time.getMilliseconds()).padStart(3, '0');
        return `${hours}:${minutes}:${seconds}:${miliseconds}`;
    };

    return (
        <div className="flex  flex-col items-center justify-center">
            <div className="text-black p-4 rounded-lg shadow-lg flex flex-col items-center">
                <h1 className="font-bold mb-2 text-center ">Token Release Countdown</h1>
                <div className="text-4xl font-mono animate-pop">
                    {formatTime(time)}
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;






