import React from "react";
import styles, { layout } from "../style";

import financialadvisor from "../assets/financialadvisor.jpg";
import Chatbot from "./Chatbot";

const GetInTouch = () => {
  return (
    <section id="features" className={layout.sectionReverse}>
      <div className={layout.sectionInfo}>
        <img src={financialadvisor} alt="Family" className={styles.image} />
      </div>

          <div className={`${layout.sectionImg} flex-col`}>
              <Chatbot />
      </div>
    </section>
  );
};

export default GetInTouch;
