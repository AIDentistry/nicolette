import React from "react";
import styles from "../style";
import GetStarted from "./GetStarted";
// import AnimationContainer from "../constants/AnimationContainer";
import NicoletteVideo from "./NicoletteVideo";

{
  /* screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    }, */
}

const Hero = () => (
  <section
    id="#home"
    className={`flex md:flex-row flex-col justify-between items-start sm:py-4 py-2  ${styles.boxesContainer}`}
  >
    <div
      className={`md:mr-5 px-8 py-4 max-md:mb-4 w-full h-full rounded-xl bg-red-300 flex flex-col justify-center items-center`}
    >
      <p
        className={`${styles.paragraph} font-poppins font-semibold text-white text-center`}
      >
        I&apos;m Nicolette Mashile, The Financial Bunny
      </p>

      <h1
        className={`${styles.heading1} m-2 font-poppins font-semibold text-white text-center`}
      >
        Of Course I Am Your Financial Fitness Trainer!
      </h1>
      {/* <AnimationContainer /> */}
      <p
        className={`${styles.paragraph} font-poppins font-semibold text-white text-center`}
      >
        Let&apos;s Start With Your Financial Biceps
      </p>
    </div>
    <div
      className={`md:ml-5 max-md:mb-5 w-full h-full rounded-xl bg-[#DFF1E6]flex justify-center`}
    >
      {/* <img src={nicolette} alt="Description of the image" /> */}
      <NicoletteVideo />
    </div>
  </section>
);

export default Hero;
