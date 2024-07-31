// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const CountdownTimer = () => {
//     const [hours, setHours] = useState(0);
//     const [minutes, setMinutes] = useState(59);
//     const [seconds, setSeconds] = useState(59);

//     const timeStamp = useSelector((state) => state.timeStamps);

//     useEffect(() => {
//         const timerInterval = setInterval(() => {
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
//         return time.toString().padStart(2, "0");
//     };

//     return (
//         <div className="flex flex-col items-center justify-center p-10 ">
//             <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full  bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 u">
//                 <h1 className="text-4xl text-white font-extrabold mb-8 text-center relative">
//                     Token Details
//                     <div className="absolute inset-0 bg-opacity-30 rounded-3xl bg-white -z-10"></div>
//                 </h1>
//                 <ul className="space-y-6 mb-8">
//                     {timeStamp.map((time) => (
//                         <li
//                             key={time.id}
//                             className="bg-white bg-opacity-20 p-6 rounded-xl flex justify-between items-center shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-30"
//                         >
//                             <div className="flex flex-col items-center">
//                                 <span className="text-gray-100 text-md mt-1">
//                                     Token Collected at:
//                                 </span>
//                                 <span className="text-2xl font-bold">
//                                     {`${time.hour}${time.min}${time.sec}`}
//                                 </span>
//                             </div>
//                             <div className="flex flex-col items-center">
//                                 <span className="text-gray-100 text-md mt-1">
//                                     Next Token Available in:
//                                 </span>
//                                 <span className="text-2xl font-bold">
//                                     {`${formatTime(minutes)}:${formatTime(seconds)} mins`}
//                                 </span>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
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
        return time.toString().padStart(2, "0");
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-10">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold mb-4 sm:mb-6 lg:mb-8 text-center relative">
                    Token Details
                    <div className="absolute inset-0 bg-opacity-30 rounded-3xl bg-white -z-10"></div>
                </h1>
                <ul className="space-y-4 sm:space-y-6 lg:space-y-8 mb-4 sm:mb-6 lg:mb-8">
                    {timeStamp.map((time) => (
                        <li
                            key={time.id}
                            className="bg-white bg-opacity-20 p-4 sm:p-6 rounded-xl flex flex-col sm:flex-row justify-between items-center shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-30"
                        >
                            <div className="flex flex-col items-center mb-4 sm:mb-0">
                                <span className="text-gray-100 text-sm sm:text-md mt-1">
                                    Token Collected at:
                                </span>
                                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                                    {`${time.hour}${time.min}${time.sec}`}
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-gray-100 text-sm sm:text-md mt-1">
                                    Next Token Available in:
                                </span>
                                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                                    {`${formatTime(minutes)}:${formatTime(seconds)} mins`}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CountdownTimer;
