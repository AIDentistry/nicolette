import React from "react";
import { products } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import financialadvisor from "../assets/financialadvisor.jpg";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";

const OurProducts = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <h1
        className={`${styles.heading1} m-4 font-poppins font-semibold text-gray-800 text-center`}
      >
        Our Products
      </h1>
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}

      <div className="flex flex-wrap sm:justify-between justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
