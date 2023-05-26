import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ value, isChecked, handleChange }) => {
  return (
    <input
      value={value}
      checked={isChecked}
      onChange={handleChange}
      type="checkbox"
      className="cursor-pointer checkbox-input"
    />
  );
};

Checkbox.propTypes = {
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default Checkbox;
