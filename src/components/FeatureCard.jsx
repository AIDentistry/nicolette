import PropTypes from "prop-types";
import { services } from "../constants";
import styles from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-4 rounded-[10px] ${
      index !== services.length - 1 ? "mb-6" : "mb-0"
    } feature-card bg-[#DFF1E6] text-[#112E2B]`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
  index: PropTypes.number,
};

export default FeatureCard;
