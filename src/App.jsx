import React from "react";
import style from "./style";
import {
  Navbar,
  Hero,
  OurProductsHeading,
  OurServicesHeading,
  OurServices,
  OurProducts,
  GetInTouch,
  CardDeal,
  Testimonials,
  Clients,
  Cta,
  Footer,
  Mindmap,
} from "./components";

const App = () => {
  return (
    <div className="bg-[#EBFFFD] w-[100%] overflow-hidden h-[100%]">
      {/* {Navigation bar} */}
      <div
        className={`${style.paddingX} ${style.paddingX} ${style.flexCenter} bg-white`}
      >
        <div className={`${style.boxWidth} bg-white`}>
          <Navbar />
        </div>
      </div>

      {/* {Hero} */}
      <div
        className={`${style.paddingX} ${style.paddingX} ${style.flexCenter} bg-white`}
      >
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart} ${style.paddingX}`}>
        <div className={`${style.boxWidth}`}>
          <OurServices />
          <OurProducts />
          {/* <OurServicesHeading /> */}
          <GetInTouch />
          {/* <Testimonials /> */}
          {/* <Clients /> */}
          {/* <Cta /> */} <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
