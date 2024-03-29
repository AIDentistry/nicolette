import { motion } from "framer-motion";
import { useState, useRef } from "react";

const FeedbackCard = ({ title, content, img }) => {
  const imageContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    scaled: {
      scale: 1.2,
    },
    normal: {
      scale: 1,
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleHoverStart = () => {
    setIsHovered(true);
    // setIsScaledUp(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    // setIsScaledUp(false);
  };

  const handleTap = () => {
    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      imageContainer.style.backgroundImage = 'url("")';
    }
    setIsHovered(!isHovered);
  };

  return (
    <motion.div
      ref={imageContainerRef}
      className="productCard flex justify-center items-end rounded-lg"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.5 },
        backgroundImage: `url("")`,
      }}
      variants={variants}
      animate={isHovered ? "scaled" : "normal"}
      onTap={handleTap}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {isHovered && (
        <motion.div
          className="textContainer flex justify-center items-center h-full w-full bg-[#08ADC2] rounded-2xl mt-0 shadow-2xl shadow-black"
          variants={textVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <div className="flex flex-col px-2">
            <div className="flex flex-col">
              <div className="title text-center font-poppins font-bold text-[0.8rem]  text-white mb-[0.8rem]">
                {title}
              </div>
              <div className="body font-poppins text-center text-[0.8rem] leading-4 text-white">
                {content}
              </div>
              <button className="button bg-[#DFF1E6] rounded-2xl text-[0.8rem] h-8 mt-[0.8rem]">
                See More
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {!isHovered && (
        <div className="flex-row justify-center items-center h-full w-full rounded-2xl mt-2">
          <div>
            <img src={img} className="flex-1 h-[10rem] w-full rounded-2xl" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default FeedbackCard;
