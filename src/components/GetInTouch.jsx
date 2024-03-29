import React, { useState } from "react";
import LottieRobot from "./LottieRobot"; // Import the Lottie animation for the robot
// Import the Lottie animation for the chatbot

const GetInTouch = () => {
  const [showChatbot, setShowChatbot] = useState(false); // State to track whether to show the chatbot

  // Function to toggle between showing the robot and the chatbot
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <section
      className={`flex sm:mt-4 mt-2 md:flex-row flex-col rounded-2xl max-md:p-2 p-2 items-top justify-center w-full`}
    >
      <div className="mr-10 md:mb-0 mb-6 w-full md:w-96 text-center">
        <h1 className="font-poppins font-semibold text-gray-800 mb-4 text-2xl">
          Meet Lulu, My PA, Just A Click And She's Connecting Us!
        </h1>

        <h1 className="font-poppins font-semibold text-gray-800 mb-4 text-md">
          Also, You Can Ask Her About Any Of The Following Topics:
        </h1>
        <ul className="list-disc pl-4 inline-block text-left">
          <li className="text-gray-600 text-lg">First Time Home Buyer</li>
          <li className="text-gray-600 text-lg">Mortgage Refinancing</li>
          <li className="text-gray-600 text-lg">Investment Planning</li>
          <li className="text-gray-600 text-lg">Investment Planning</li>
          <li className="text-gray-600 text-lg">Retirement Planning</li>
          <li className="text-gray-600 text-lg">Investment Planning</li>
        </ul>
      </div>

      {/* Display either the robot or the chatbot based on the state */}
      <div className="ml-10 md:mb-0 mb-6" onClick={toggleChatbot}>
        {showChatbot ? <LottieRobot /> : <LottieRobot />}
      </div>
    </section>
  );
};

export default GetInTouch;
