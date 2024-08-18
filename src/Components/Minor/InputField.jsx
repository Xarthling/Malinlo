import React from 'react'

function InputField({ label, type, placeholder, name }) {
    return (
      <div className="w-full mb-3">
      <p className="text-black font-medium">{label}</p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border-solid border border-black p-3 rounded-md w-full text-black"
      />
      </div>
    );
  }

export default InputField
