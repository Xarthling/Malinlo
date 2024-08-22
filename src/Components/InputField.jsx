import React from 'react'

function InputField({ label, type, placeholder, name }) {
    return (
      <div className="w-full mb-4 sm:mb-5 md:mb-6 lg:mb-8">
      <p className="text-black font-medium mb-2 text-sm sm:text-base md:text-lg lg:text-xl">
        {label}
      </p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-black p-2 sm:p-3 md:p-4 rounded-md w-full text-black text-sm sm:text-base md:text-lg lg:text-xl"
      />
    </div>
    );
  }

export default InputField
