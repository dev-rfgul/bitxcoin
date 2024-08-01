import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCountdown } from "../feature/timeStamp/timeSlice";


{/*Adjust the import path if needed*/ }

const CountdownTimer = () => {
    const dispatch = useDispatch();
    const timeStamps = useSelector((state) => state.timeStamps);
    const countdown = useSelector((state) => state.countdown);

    const [minutes, setMinutes] = useState(countdown.min);
    const [seconds, setSeconds] = useState(countdown.sec);
    const [message, setMessage] = useState(countdown.msg);
    // let message = countdown.msg;
    // console.log("Message from line no 17: ", message);

    useEffect(() => {
        {/*Update local state when Redux state changes*/ }

        setMinutes(countdown.min);
        setSeconds(countdown.sec);
    }, [countdown]);

    // useEffect(() => {
    //     const timerInterval = setInterval(() => {
    //         setMinutes(prevMinutes => {
    //             if (prevMinutes === 0 && seconds === 0) {
    //                 console.log("time is up");
    //                 console.log("Message: ", message);
    //                 clearInterval(timerInterval);
    //                 setMessage("Release Token");
    //                 return prevMinutes;
    //             } else if (seconds === 0) {
    //                 setSeconds(59);
    //                 return prevMinutes - 1;
    //             } else {
    //                 setSeconds(prevSeconds => prevSeconds - 1);
    //                 return prevMinutes;
    //             }
    //         });

    //         dispatch(updateCountdown({ min: minutes, sec: seconds, msg: message }));
    //         console.log("Countdown Timer: ", minutes, seconds);
    //     }, 1000);

    //     return () => clearInterval(timerInterval);
    // }, [seconds, dispatch, message]);



    useEffect(() => {
        const timerInterval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0) {
                    if (minutes === 0) {
                        console.log("time is up");
                        setMessage("Release Token");
                        // console.log("hello world " + message);
                        // console.log("Message from line no 60: ", message);
                        clearInterval(timerInterval);
                        return 0;
                    } else {
                        setMinutes((prevMinutes) => prevMinutes - 1);
                        return 59;
                    }
                } else {
                    return prevSeconds - 1;
                }
            });

            dispatch(updateCountdown({ min: minutes, sec: seconds, msg: message }));
            //   console.log("Countdown Timer: ", minutes, seconds);
        }, 500);

        return () => clearInterval(timerInterval);
    }, [minutes, seconds, dispatch, message]);


    return (
        <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-10">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold mb-4 sm:mb-6 lg:mb-8 text-center relative">
                    Token Details
                    <div className="absolute inset-0 bg-opacity-30 rounded-3xl bg-white -z-10"></div>
                </h1>
                <ul className="space-y-4 sm:space-y-6 lg:space-y-8 mb-4 sm:mb-6 lg:mb-8">
                    {timeStamps.map((time) => (
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
                                    {`${countdown.min}:${countdown.sec} Mins`}
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


