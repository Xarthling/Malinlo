import React from 'react'

const Button = ({title}) => {
  return (
    <>
    <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 bg-n-3 w-3/4 text-white rounded  hover:opacity-50 transition-DEFAULT ${className}`}
      >
        {title}
      </button>
</>
  )
}

export default Button

