import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/lottie_robot.json"; // Replace 'your-animation.json' with the path to your animation JSON file

const LottieRobot = () => {
  return (
    <div className="w-[500px]">
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LottieRobot;
