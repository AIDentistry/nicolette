import React from "react";
import { services } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import financialadvisor from "../assets/financialadvisor.jpg";
import Mindmap from "./Mindmap";

const OurServices = () => {
  return (
    <section
      className={`flex-row flex-wrap  md:mt-12 mt:8 mx-2 rounded-2xl max-md:p-4 p-8`}
    >
      <section id="features" className={layout.sectionReverse}>
        <Mindmap />
        {/* <Mindmap /> */}
      </section>
    </section>
  );
};

export default OurServices;
