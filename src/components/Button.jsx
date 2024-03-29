import PropTypes from "prop-types";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`w-1/2 rounded-full py-4 px-6 font-medium font-poppins bg-blue-gradient text-[18px] outline-none text-primary`}
    >
      Chat To Me
    </button>
  );
};

Button.propTypes = {
  styles: PropTypes.string,
};

export default Button;
