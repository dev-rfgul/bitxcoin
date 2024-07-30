import React from "react";
import Ripple from "../components/magicui/ripple";
import ShinyButton from "../components/magicui/shiny-button";
import MiningLogic from "../Components/MiningLogic";
import CountdownTimer from "./CountDownTimer";

const Mining = () => {
  return (
    <div>
      <CountdownTimer />
      <Ripple />
      {/* <MiningLogic /> */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <ShinyButton className="bg-gray-400" text="Claim Your Token Now" />
      </div>
    </div>
  );
};

export default Mining;
