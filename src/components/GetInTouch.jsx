import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import LottieRobot from "./LottieRobot"; // Import the Lottie animation for the robot
import Chatbot from "./Chatbot";
import { BubbleChat } from "flowise-embed-react";
// Import the Lottie animation for the chatbot

const GetInTouch = () => {
  const [showChatbot, setShowChatbot] = useState(false); // State to track whether to show the chatbot

  // Function to toggle between showing the chatbot
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <section className="flex justify-center flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#08ADC2]  md:mr-4 rounded-xl cursor-default">
        <h1 className="font-poppins font-semibold text-white mb-4 text-3xl text-center p-8">
          Meet Lulu, My PA, Just A Click And She's Connecting Us! <br />{" "}
          <br></br>
          <span className="font-poppins font-semibold text-white mb-4 text-lg text-center">
            {" "}
            Need tips? Lulu can help you with:
            <ul>
              <br></br>
              <li>How to finish your bond repayments faster</li>
              <li>To Balloon payment or NOT to Balloon?</li>
              <li>Tips for South African home buyers</li>
              <li>How to get that raise</li>
            </ul>
          </span>
        </h1>
      </div>
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center justify-center cursor-pointer"
        whileTap={{ scale: 0.95 }} // Reduce the scale of the div when tapped
        onClick={toggleChatbot} // Toggle the chatbot when the div is clicked
      >
        <BubbleChat />
        <LottieRobot />
      </motion.div>
    </section>
  );
};

export default GetInTouch;
