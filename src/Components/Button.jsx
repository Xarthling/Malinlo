import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'button', title, onClick, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-n-3 w-3/4 text-white rounded m-2 
        hover:opacity-50 transition-opacity ${className}`}
>
      {title}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired, 
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
