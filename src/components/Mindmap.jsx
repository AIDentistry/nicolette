import React, { useState } from "react";
import { motion } from "framer-motion";
import nicolette from "../assets/nicolette.png";
import { services } from "../constants";
import styles, { layout } from "../style";

const Mindmap = () => {
  const [hoveredColor, setHoveredColor] = useState(null);
  const [mainCircleColor, setMainCircleColor] = useState(nicolette);
  const [serviceId, setServiceId] = useState(null);

  return (
    <section
      className={`${layout.sectionInfo} flex-row flex-wrap sm:mt-2 mt-2 rounded-2xl max-md:p-2 p-2`}
    >
      <h1
        className={`${styles.heading1} mb-8 mt-0 font-poppins font-semibold text-gray-800 text-center`}
      >
        Our Services
      </h1>

      <div className="md:h-[420px] md:w-[420px] h-[380px] w-[300px] p-6 relative">
        {/* Four circles placed at each corner */}
        <motion.div
          className="md:w-[140px] md:h-[140px] w-[120px] h-[120px] bg-[#1DAB9F] rounded-full absolute top-0 left-0 flex items-center justify-center"
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          onMouseEnter={() => {
            setHoveredColor("#1DAB9F");
            setServiceId(services[0].id);
          }}
          onMouseLeave={() => {
            setHoveredColor(null);
            setServiceId(null);
          }}
          onClick={() => setMainCircleColor("#1DAB9F")}
        >
          <p className="text-white text-center">{services[0].title}</p>
        </motion.div>

        {/* Remaining small circles */}
        {/* Modify onMouseEnter to set isHovered to true */}
        <motion.div
          className="md:w-[140px] md:h-[140px] w-[120px] h-[120px] bg-[#E38831]  rounded-full absolute top-0 right-0 flex items-center justify-center"
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          onMouseEnter={() => {
            setHoveredColor("#E38831");
            setServiceId(services[0].id);
          }}
          onMouseLeave={() => {
            setHoveredColor(null);
            setServiceId(null);
          }}
          onClick={() => setMainCircleColor("#F59D49")}
        >
          <p className="text-white font-medium text-center">
            {services[1].title}
          </p>
        </motion.div>
        <motion.div
          className="md:w-[140px] md:h-[140px] w-[120px] h-[120px] bg-[#08ADC2]  rounded-full absolute bottom-0 left-0 flex items-center justify-center"
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          onMouseEnter={() => {
            setHoveredColor("#08ADC2");
            setServiceId(services[2].id);
          }}
          onMouseLeave={() => {
            setHoveredColor(null);
            setServiceId(null);
          }}
          onClick={() => setMainCircleColor("#49E0F5")}
        >
          <p className="text-white font-medium text-center">
            {services[2].title}
          </p>
        </motion.div>
        <motion.div
          className="md:w-[140px] md:h-[140px] w-[120px] h-[120px] bg-[#B52A86] rounded-full absolute bottom-0 right-0 flex items-center justify-center" // Added flexbox utility classes
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          onMouseEnter={() => {
            setHoveredColor("#B52A86");
            setServiceId(services[3].id);
          }}
          onMouseLeave={() => {
            setHoveredColor(null);
            setServiceId(null);
          }}
          onClick={() => setMainCircleColor("#F549BB")}
        >
          <p className="text-white font-medium text-center">
            {services[3].title}
          </p>
        </motion.div>

        {/* Bigger circle in the center */}
        <motion.div
          className="md:w-[250px] md:h-[250px] h-[160px] w-[160px] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={
            hoveredColor === null
              ? {
                  backgroundImage: `url(${mainCircleColor})`,
                  backgroundSize: "cover", // Ensure the background image covers the container
                }
              : { backgroundColor: hoveredColor }
          }
        >
          {/* Position the 'True' statement inside the main circle */}
          {serviceId !== null ? (
            <p className="text-white font-medium text-center absolute inset-0 flex items-center justify-center m-4">
              {services.find((item) => item.id === serviceId)?.content}
            </p>
          ) : (
            ""
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Mindmap;
