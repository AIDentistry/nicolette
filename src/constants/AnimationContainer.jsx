import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import animationData from "./lottie_growth_chart.json"; // Import your animation data

const AnimationContainer = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      animationData: animationData,
      loop: false,
      autoplay: true,
    });

    // Cleanup function to unload the animation when the component unmounts
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div
      ref={animationContainer}
      style={{ width: '60px', height: '60px' }}
    ></div>
  );
};

export default AnimationContainer;
