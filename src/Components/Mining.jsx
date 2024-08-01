import React from "react";
import Ripple from "../components/magicui/ripple";
import CountdownTimer from "./CountDownTimer";
import Button from "../Components/Button";
import Button2 from "./Button2";

const Mining = () => {
  return (
    <div>
      <CountdownTimer />
      <div className="flex justify-center items-center mt-3">
        <Button btnText="Claim Your Token Now" />

        {/* <Button2 text="Claim Your Token Now"/> */}
      </div>
      <Ripple />
    </div>
  );
};

export default Mining;
