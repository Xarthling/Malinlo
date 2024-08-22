import React from 'react'
import Logo from "../assets/logo.svg";

const logo = () => {
    return (
        <div className="flex flex-col justify-center items-center sm:items-start">
<img
    src={Logo}
    className="w-[30vw] sm:w-[15vw] md:w-[20vw] lg:w-[15vw]"
    alt="Logo"
/>
        </div>
    )
}

export default logo
