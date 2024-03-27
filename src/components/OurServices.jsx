import React from "react";
import { services } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import financialadvisor from "../assets/financialadvisor.jpg";

const OurServices = () => {
  return (
    <section id="features" className={layout.sectionReverse}>
      <div className={layout.sectionInfo}>
        <img src={financialadvisor} alt="Family" className={styles.image} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {services.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
