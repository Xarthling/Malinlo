import React from 'react'
import Logo from "./../../assets/logo.svg";

const logo = () => {
    return (
        <div className="flex flex-col justify-center items-center sm:items-start">
            <img src={Logo} alt="Logo"  />
        </div>
    )
}

export default logo
