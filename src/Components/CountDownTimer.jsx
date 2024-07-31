// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const CountdownTimer = () => {
//     const [time, setTime] = useState(new Date());

//     const timeStamp = useSelector((state) => state.timeStamps);

//     const [hours, setHours] = useState("00");
//     const [minutes, setMinutes] = useState("59");
//     const [seconds, setSeconds] = useState("59");

//     useEffect(() => {
//         let timerInterval = setInterval(() => {
//             if (hours === 0 && minutes === 0 && seconds === 0) {
//                 clearInterval(timerInterval);
//             } else if (minutes === 0 && seconds === 0) {
//                 setHours(hours - 1);
//                 setMinutes(59);
//                 setSeconds(59);
//             } else if (seconds === 0) {
//                 setMinutes(minutes - 1);
//                 setSeconds(59);
//             } else {
//                 setSeconds(seconds - 1);
//             }
//         }, 1000);

//         return () => clearInterval(timerInterval);
//     }, [hours, minutes, seconds]);


//     const formatTime = (time) => {
//         return time.toString().padStart(2, '0');
//     };
//     return (
//         <div className="bg-gradient-to-r from-purple-600 to-blue-400 text-white p-10 rounded-3xl shadow-2xl max-w-lg mx-auto">
//             <h1 className="text-4xl font-extrabold mb-8 text-center relative">
//                 Next Token will be available soon
//                 <div className="absolute inset-0 bg-opacity-30 rounded-3xl bg-white -z-10"></div>
//             </h1>
//             <ul className="space-y-6">
//                 {timeStamp.map((time) => (
//                     <li
//                         key={time.id}
//                         className="bg-white bg-opacity-20 p-6 rounded-xl flex justify-between items-center shadow-lg transition-transform transform hover:scale-110 hover:bg-opacity-30"
//                     >
//                         <div className="flex flex-col">
//                             <span className="text-gray-300 text-md mt-1">
//                                 Token Collected at:
//                             </span>
//                             <span className="text-2xl font-bold">{`${time.hour}${time.min}${time.sec}${time.milisec}`}</span>
//                         </div>
//                         <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse"></div>
//                     </li>
//                 ))}
//             </ul>

//             <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//             <div className="text-4xl text-black font-bold">
//                 {`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`}
//             </div>
//         </div>

//         </div>


//     );
// };

// export default CountdownTimer;
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CountdownTimer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(59);
    const [seconds, setSeconds] = useState(59);

    const timeStamp = useSelector((state) => state.timeStamps);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (hours === 0 && minutes === 0 && seconds === 0) {
                clearInterval(timerInterval);
            } else if (minutes === 0 && seconds === 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            } else if (seconds === 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [hours, minutes, seconds]);

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    return (
        <div className="flex flex-col items-center justify-center p-10">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full">
                <h1 className="text-4xl font-extrabold mb-8 text-center relative">
                    Next Token will be available soon
                    <div className="absolute inset-0 bg-opacity-30 rounded-3xl bg-white -z-10"></div>
                </h1>
                <ul className="space-y-6 mb-8">
                    {timeStamp.map((time) => (
                        <li
                            key={time.id}
                            className="bg-white bg-opacity-20 p-6 rounded-xl flex justify-between items-center shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-30"
                        >
                            <div className="flex flex-col">
                                <span className="text-gray-300 text-md mt-1">
                                    Token Collected at:
                                </span>
                                <span className="text-2xl font-bold">
                                    {`${time.hour}${time.min}${time.sec}${time.milisec}`}
                                </span>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 animate-pulse"></div>
                        </li>
                    ))}
                </ul>
                <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg">
                    <div className="text-4xl text-black font-bold mb-2">
                        {`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`}
                    </div>
                    <div className="text-gray-500 text-sm text-center">Countdown Timer</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
