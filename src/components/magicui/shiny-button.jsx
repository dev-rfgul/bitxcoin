"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

//redux-toolkit
import { useDispatch, useSelector } from "react-redux";
import {
  addTimeStamp,
  updateCountdown,
} from "../../feature/timeStamp/timeSlice";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },

  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};
const ShinyButton = ({ text = "shiny-button", className }) => {
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
    // console.log(timeStamp);
  };

  const updatedCountdown = (e) => {
    // e.preventDefault();
    const countdown = {
      min: 0,
      sec: 10,
    };
    dispatch(updateCountdown(countdown));
    // console.log(countdown);
  };

  const msg = useSelector((state) => state.countdown.msg);

  console.log("console from Button:", msg);



  return (
    <motion.button
      onClick={() => {
        updatedCountdown();
        getTimeStamp();
      }}
      {...animationProps}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--blue-500)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--blue-500)/10%)]",
        className
      )}
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--blue-500)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--blue-500)) calc(var(--x) + 100%))",
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--blue-500)/10%)_calc(var(--x)+20%),hsl(var(--blue-500)/50%)_calc(var(--x)+25%),hsl(var(--blue-500)/10%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
