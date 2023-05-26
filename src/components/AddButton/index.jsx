import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className="add-button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;

