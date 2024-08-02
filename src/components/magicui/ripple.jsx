import React from "react";
import NumberTicker from "./number-ticker";

import { useSelector } from "react-redux";
import { totalToken } from "../../feature/timeStamp/timeSlice";

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.9,
  numCircles = 6,
}) {


  const totalTokens = useSelector((state) => state.totalToken);
  console.log("totalToken", totalTokens)
  return (
    <div className="h-80 md:h-96 lg:h-160">
      <div className="relative flex flex-col items-center justify-center h-160">
        {/* Ripple Effect */}
        <div className="absolute inset-0 flex items-center justify-center [mask-image:linear-gradient(to_bottom,white,transparent)]">
          {Array.from({ length: numCircles }, (_, i) => {
            const size = mainCircleSize + i * 70;
            const opacity = mainCircleOpacity - i * 0.03;
            const animationDelay = `${i * 0.06}s`;
            const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
            const borderOpacity = 5 + i * 5;

            return (
              <div
                key={i}
                className={`absolute animate-ripple rounded-full bg-blue-500/25 shadow-xl border [--i:${i}]`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity,
                  animationDelay,
                  borderStyle,
                  borderWidth: "1px",
                  borderColor: `hsl(207, 90%, 54%)`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1)",
                }}
              />
            );
          })}

          <div className="relative text-6xl font-bold text-blue-500 z-10">
            {console.log("totalTokens from ripple.jsx ", totalTokens)}
            {console.log("totalTokens from ripple.jsx ", typeof(totalTokens) )}
            <NumberTicker  direction="up" />
          </div>
        </div>
      </div>
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;

