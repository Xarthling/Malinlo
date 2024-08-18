import React from 'react';
import PropTypes from 'prop-types';

const smallButton = ({ children, onClick, type = 'button', className = '' }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 bg-n-3 text-white rounded  hover:opacity-50 transition-DEFAULT ${className}`}
      >
        {children}
      </button>
    );
  };
export default smallButton;
