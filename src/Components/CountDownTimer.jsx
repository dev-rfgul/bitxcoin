import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CountdownTimer = () => {
    const [time, setTime] = useState(new Date());


    const timeStamp = useSelector(state => state.timeStamps);

    console.log("timeStamp text " + timeStamp.time);
    console.log("timeStamp id " + timeStamp.id);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTime(new Date());
    //     }, 1);

    //     return () => clearInterval(timer);
    // }, []);



    // const formatTime = (time) => {
    //     const hours = String(time.getHours()).padStart(2, "0");
    //     const minutes = String(time.getMinutes()).padStart(2, "0");
    //     const seconds = String(time.getSeconds()).padStart(2, "0");
    //     const miliseconds = String(time.getMilliseconds()).padStart(3, "0");
    //     return `${hours}:${minutes}:${seconds}:${miliseconds}`;
    // };

    // return (
    //     <div className="flex  flex-col items-center justify-center">
    //         <div className="text-black p-4 rounded-lg shadow-lg flex flex-col items-center">
    //             <h1 className="font-bold mb-2 text-center ">Token Release Countdown</h1>
    //             <div className="text-4xl font-mono animate-pop">{formatTime(time)}</div>
    //         </div>
    //     </div>
    // );


    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-400 text-white p-10 rounded-3xl shadow-2xl max-w-lg mx-auto">
            <h1 className="text-4xl font-extrabold mb-8 text-center relative">
                Next Token will be available soon
                <div className="absolute inset-0 bg-opacity-30 rounded-3xl bg-white -z-10"></div>
            </h1>
            <ul className="space-y-6">
                {timeStamp.map((time) => (
                    <li
                        key={time.id}
                        className="bg-white bg-opacity-20 p-6 rounded-xl flex justify-between items-center shadow-lg transition-transform transform hover:scale-110 hover:bg-opacity-30"
                    >
                        <div className="flex flex-col">
                            <span className="text-gray-300 text-md mt-1">Next Token will be available in:</span>
                            <span className="text-2xl font-bold">{time.time}</span>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse"></div>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default CountdownTimer;



