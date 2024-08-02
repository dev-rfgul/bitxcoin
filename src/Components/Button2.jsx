

// import React, { useState } from "react";
// import { CoolMode } from "@/components/magicui/cool-mode";
// import { useDispatch } from "react-redux";
// import { addTimeStamp, updateCountdown, totalToken } from "../feature/timeStamp/timeSlice";

// const Button2 = ({ text }) => {
//   const [token, setToken] = useState(10);
//   const dispatch = useDispatch();

//   const getTimeStamp = () => {
//     const now = new Date();
//     const hour = `${now.getHours().toString().padStart(2, "0")} :`;
//     const min = `${now.getMinutes().toString().padStart(2, "0")} :`;
//     const sec = `${now.getSeconds().toString().padStart(2, "0")} `;

//     const timeStamp = {
//       hour,
//       min,
//       sec,
//     };

//     dispatch(addTimeStamp(timeStamp));
//     console.log(timeStamp);
//   };

//   const updatedCountdown = () => {
//     const countdown = {
//       min: 59,
//       sec: 60,
//     };
//     dispatch(updateCountdown(countdown));
//     console.log(countdown);
//   };

//    const incrementToken = () => {
//      setToken((prevToken) => {
//        const newToken = prevToken + 1;
//        dispatch(totalToken(newToken));
//        console.log("totalTokens", newToken);
//        return newToken;
//      });
//    };


//   return (
//     <div>
//       <CoolMode>
//         <button
//           onClick={() => {
//             incrementToken();
//             updatedCountdown();
//             getTimeStamp();
//           }}
//           className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out"
//         >
//           {text}
//         </button>
//       </CoolMode>
//     </div>
//   );
// };

// export default Button2;



import React, { useState, useEffect } from "react";
import { CoolMode } from "@/components/magicui/cool-mode";
import { useDispatch, useSelector } from "react-redux";
import { addTimeStamp, updateCountdown, totalToken } from "../feature/timeStamp/timeSlice";

const Button2 = ({ text }) => {
  const dispatch = useDispatch();
  const totalTokenFromState = useSelector((state) => state.totalToken);
  const [token, setToken] = useState(totalTokenFromState || 0);

  useEffect(() => {
    // Update local state when the Redux state changes
    setToken(totalTokenFromState);
  }, [totalTokenFromState]);

  const getTimeStamp = () => {
    const now = new Date();
    const hour = `${now.getHours().toString().padStart(2, "0")} :`;
    const min = `${now.getMinutes().toString().padStart(2, "0")} :`;
    const sec = `${now.getSeconds().toString().padStart(2, "0")} `;

    const timeStamp = { hour, min, sec };

    dispatch(addTimeStamp(timeStamp));
    console.log(timeStamp);
  };

  const updatedCountdown = () => {
    const countdown = { min: 59, sec: 60 };
    dispatch(updateCountdown(countdown));
    console.log(countdown);
  };

  const incrementToken = () => {
    setToken((prevToken) => {
      const newToken = (prevToken || 0) + 1;
      dispatch(totalToken(newToken));
      console.log("totalTokens", newToken);
      return newToken;
    });
  };

  return (
    <div>
      <CoolMode>
        <button
          onClick={() => {
            incrementToken();
            updatedCountdown();
            getTimeStamp();
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out"
        >
          {text}
        </button>
      </CoolMode>
    </div>
  );
};

export default Button2;
