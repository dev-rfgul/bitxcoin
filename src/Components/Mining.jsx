import React from "react";
import Ripple from "../components/magicui/ripple";
import CountdownTimer from "./CountDownTimer";
import Button from "../Components/Button";

const Mining = () => {
  const timeStamp = () => {
    console.log("You clicked me at " + new Date().toLocaleTimeString());
  };
  return (
    <div>
      <CountdownTimer />
      <div className="flex justify-center items-center mt-3">
        <Button btnText="Claim Your Token Now" />
      </div>

      <Ripple />
    </div>
  );
};

export default Mining;
