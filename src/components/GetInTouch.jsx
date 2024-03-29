import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import LottieRobot from "./LottieRobot"; // Import the Lottie animation for the robot
import Chatbot from "./Chatbot";
import { BubbleChat } from "flowise-embed-react";
import Button from "./Button";
// Import the Lottie animation for the chatbot

const GetInTouch = () => {
  const [showChatbot, setShowChatbot] = useState(false); // State to track whether to show the chatbot

  // Function to toggle between showing the chatbot
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <section className="flex justify-center items-center flex-col md:flex-row h-[500px]">
      <div className="w-full md:w-1/3 flex items-center justify-center bg-[#08ADC2]  md:mr-4 rounded-xl cursor-default">
        <h1 className="font-poppins font-semibold text-white mb-4 text-3xl text-center p-8">
          Please give Lulu your details, and I'll be touch <br /> <br></br>
          <span className="font-poppins font-semibold text-white mb-4 text-lg text-center">
            {" "}
            Need urgent finance tips? Lulu got Ya!
            {/* <ul>
              <br></br>
              <li>How to finish your bond repayments faster</li>
              <li>To Balloon payment or NOT to Balloon?</li>
              <li>Tips for South African home buyers</li>
              <li>How to get that raise</li>
            </ul> */}
          </span>
        </h1>
      </div>
      <motion.div
        className="w-full md:w-1/3 h-[300px] flex flex-col items-center justify-center cursor-pointer"
        whileTap={{ scale: 0.95 }} // Reduce the scale of the div when tapped
        // onClick={toggleChatbot}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <LottieRobot />
          <BubbleChat />
          <Button className="w-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
