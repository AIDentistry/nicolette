import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import LottieRobot from "./LottieRobot"; // Import the Lottie animation for the robot
import Chatbot from "./Chatbot";
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
        <h1 className="font-poppins font-semibold text-white mb-4 text-2xl text-center">
          Meet Lulu, My PA, Just A Click And She's Connecting Us!
        </h1>
      </div>
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center cursor-pointer"
        whileTap={{ scale: 0.95 }} // Reduce the scale of the div when tapped
        onClick={toggleChatbot} // Toggle the chatbot when the div is clicked
      >
        {showChatbot ? <Chatbot /> : <LottieRobot />}
      </motion.div>
    </section>
  );
};

export default GetInTouch;
