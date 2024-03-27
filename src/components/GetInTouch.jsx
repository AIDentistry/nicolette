import React from "react";
import { services } from "../constants";
import styles, { layout } from "../style";
import FeatureCard from "./FeatureCard";
import financialadvisor from "../assets/financialadvisor.jpg";
import Chatbot from "./Chatbot";

const GetInTouch = () => {
  return (
    <section id="features" className={layout.sectionReverse}>
      <div className={layout.sectionInfo}>
        <h2>My kind AI assistant here, Lulu is ready to take your contacts</h2>
        <Chatbot />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {services.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;
