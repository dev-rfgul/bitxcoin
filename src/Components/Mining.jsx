import React from "react";
import Ripple from "../components/magicui/ripple";
import CountdownTimer from "./CountDownTimer";
import Button from "../Components/Button";
import Button2 from "./Button2";
import { useSelector } from "react-redux";
import VisitCounter from "./VisitCounter";
import { CoolMode } from "@/components/magicui/cool-mode";
import Blog from "../../src/ads/Blog";
import Sidebar from "../../src/ads/Sidebar"
import Banner from "../../src/ads/Banner"


const Mining = () => {
  const msgFromCountdown = useSelector((state) => state.countdown.msg);
  // console.log("msgFromCountdown", msgFromCountdown)

  return (
    <div>
      {/* <CountdownTimer /> */}
      <VisitCounter/>
      <div className="">

      <Blog/>
      </div>
      <div className="flex justify-center items-center mt-3">
        {/* <Button btnText="Claim Your Token Now" /> */}

        <Button2  text="Claim Your Token Now"/>
      </div>

      
      <Ripple />
    </div>
  );
};

export default Mining;
