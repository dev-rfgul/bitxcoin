import React from "react";
import NumberTicker from "./number-ticker";
import ShinyButton from "./shiny-button";

const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.9,
  numCircles = 5,
}) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Ripple Effect */}
      <div className="absolute inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] z-20">
        {Array.from({ length: numCircles }, (_, i) => {
          const size = mainCircleSize + i * 70;
          const opacity = mainCircleOpacity - i * 0.03;
          const animationDelay = `${i * 0.06}s`;
          const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
          const borderOpacity = 5 + i * 5;

          return (
            <div
              key={i}
              className={`absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border [--i:${i}]`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              }}
            />
          );
        })}

        <div className="relative text-6xl font-bold text-cyan-200 z-10">
          <NumberTicker value={98} direction="up" />
        </div>
      </div>

     
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
