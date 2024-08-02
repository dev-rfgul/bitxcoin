//  "use client";

//  import { useEffect, useRef,useState } from "react";
//  import { useInView, useMotionValue, useSpring } from "framer-motion";

//  import { cn } from "@/lib/utils";




// //  redux toolkit


//  import {  useSelector } from "react-redux";
//  import { totalToken } from "../../feature/timeStamp/timeSlice";


//  const totalTokens = useSelector((state) => state.totalToken);
//  console.log("totalToken", totalTokens)


//  export default function NumberTicker({
//    value,
//    direction = "up",
//    delay = 0,
//    className,
//  }) {
//    const ref = useRef(null);
//    const motionValue = useMotionValue(direction === "down" ? value : 0);
//    const springValue = useSpring(motionValue, {
//      damping: 60,
//      stiffness: 100,
//    });
//    const isInView = useInView(ref, { once: true, margin: "0px" });

//  const totalTokens=useSelector((state) => state.timeStamp.totalToken);

  

//    useEffect(() => {
//      isInView &&
//        setTimeout(() => {
//          motionValue.set(direction === "down" ? 0 : value);
//        }, delay * 1000);
//    }, [motionValue, isInView, delay, value, direction]);

//    useEffect(
//      () =>
//        springValue.on("change", (latest) => {
//          if (ref.current) {
//            ref.current.textContent = Intl.NumberFormat("en-US").format(
//              latest.toFixed(0)
//            );
//          }
//        }),
//      [springValue]
//    );

//    return (
//      <span
//        className={cn(
//          "inline-block tabular-nums text-black dark:text-white tracking-wider",
//          className
//        )}
//        ref={ref}
//      />
//    );
//  }




"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });
  
  // Moved inside the component
  const totalTokens = useSelector((state) => state.totalToken);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : totalTokens);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, totalTokens, direction]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
    return () => unsubscribe(); // Clean up subscription on unmount
  }, [springValue]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-blue-700  tracking-wider",
        className
      )}
      ref={ref}
    />
  );
}
