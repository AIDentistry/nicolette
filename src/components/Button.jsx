import PropTypes from "prop-types";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`${styles} rounded-full py-4 px-6 font-medium font-poppins bg-blue-gradient text-[18px] outline-none text-primary`}
    >
      Get Started
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
};

export default Button;
