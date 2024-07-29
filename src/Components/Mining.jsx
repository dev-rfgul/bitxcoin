import React from "react";
import Ripple from "../components/magicui/ripple";
import ShinyButton from "../components/magicui/shiny-button";   

const Mining = () => {
  return (
    <div>
      <Ripple />
      {/* Button */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <ShinyButton className="bg-gray-400" text="click to collect token" />
      </div>
    </div>
  );
};

export default Mining;
