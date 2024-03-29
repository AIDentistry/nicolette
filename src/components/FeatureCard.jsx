import PropTypes from "prop-types";
import { services } from "../constants";
import styles from "../style";

const FeatureCard = ({ icon, title, content, index }) => {
  const contentItems = content.split(",").map((item, i) => (
    <span key={i} className="big-dot">
      {item}
    </span>
  ));

  return (
    <div
      className={`flex flex-row p-2 rounded-2xl ${
        index !== services.length - 1 ? "mb-2" : "mb-0"
      } feature-card bg-[#1DAB9F] text-white`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] mb-3">
          {title}
        </h4>
        <div className="flex-1 flex flex-col">
          <p className="font-poppins font-semibold text-sm leading-[24px]">
            {contentItems}
          </p>
        </div>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
  index: PropTypes.number,
};

export default FeatureCard;
