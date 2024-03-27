import React from "react";
import styles from "../style";

const OurServicesHeading = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mt-20 mt-6`}
    >
      <h1
        className={`${styles.heading1} m-2 font-poppins font-semibold text-[#112E2B] text-center`}
      >
        Our Services
      </h1>
    </section>
  );
};

export default OurServicesHeading;
