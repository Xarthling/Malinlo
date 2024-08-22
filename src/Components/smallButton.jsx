import React from 'react';
import PropTypes from 'prop-types';

const SmallButton = ({ children, onClick, type = 'button', className = '' }) => {
  const defaultClasses = {
    padding: 'p-2',
    background: 'bg-n-3',
    textColor: 'text-white',
    borderRadius: 'rounded-md',
    hover: 'hover:opacity-50',
    transition: 'transition duration-300',
  };

  const hasCustomClass = (cls) => className.split(' ').some(c => c.startsWith(cls));

  const finalClasses = [
    hasCustomClass('px') ? '' : defaultClasses.padding,
    hasCustomClass('bg-') ? '' : defaultClasses.background,
    hasCustomClass('text-') ? '' : defaultClasses.textColor,
    hasCustomClass('rounded') ? '' : defaultClasses.borderRadius,
    hasCustomClass('hover:') ? '' : defaultClasses.hover,
    hasCustomClass('transition') ? '' : defaultClasses.transition,
    className, 
  ].join(' ').trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={finalClasses}
    >
      {children}
    </button>
  );
};

SmallButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default SmallButton;
