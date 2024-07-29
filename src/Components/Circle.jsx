import React from "react";

const Circle = () => {
  return (
    <div className="relative w-full h-screen  flex justify-center items-center">
      <div className="relative w-full h-full max-w-[24rem] max-h-[24rem] aspect-w-1 aspect-h-1">
        <div className="absolute inset-0 rounded-full bg-white flex justify-center items-center text-6xl">
          <div className="absolute inset-0 rounded-full border-2 border-transparent animate-borderAnimation z-10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent z-0" />
          {2 + 2}
        </div>
      </div>
    </div>
  );
};

export default Circle;
