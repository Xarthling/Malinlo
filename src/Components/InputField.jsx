import React from 'react'

function InputField({ label, type, placeholder, name }) {
    return (
      <div className="w-full mb-4 xl:mb-8">
      <p className="text-black font-medium mb-2 text-sm sm:text-base md:text-lg lg:text-lg lg:mb-1 xl:text-xl">
        {label}
      </p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-black p-2 sm:p-3 md:p-4 rounded-md w-full text-black text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl lg:p-2"
      />
    </div>
    );
  }

export default InputField
