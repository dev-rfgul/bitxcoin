import { CoolMode } from "@/components/magicui/cool-mode";
import React from "react";

//redux-toolkit
import { useDispatch } from "react-redux";
import {
  addTimeStamp,
  updateCountdown,
} from "../feature/timeStamp/timeSlice"


const Button2 = ({ text }) => {

  const dispatch = useDispatch();

  const getTimeStamp = (e) => {
    // e.preventDefault();

    const now = new Date();
    const hour = `${now.getHours().toString().padStart(2, "0")} :`;
    const min = `${now.getMinutes().toString().padStart(2, "0")} :`;
    const sec = `${now.getSeconds().toString().padStart(2, "0")} `;

    const timeStamp = {
      hour,
      min,
      sec,
    };

    dispatch(addTimeStamp(timeStamp));
    console.log(timeStamp);
  };

  const updatedCountdown = (e) => {
    // e.preventDefault();
    const countdown = {
      min: 59,
      sec: 60,
    };
    dispatch(updateCountdown(countdown));
    console.log(countdown);
  };
  return (
    <div>
      <CoolMode>
        <button 
          onClick={() => {
            updatedCountdown();
            getTimeStamp();
          }}
        className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out">
          {text}
        </button>
      </CoolMode>
    </div>
  );
};

export default Button2;
