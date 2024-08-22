import React from "react";
import Logo from "../logo";
import Search from "../../assets/search.svg";

const header = () => {
    return (
        <div className="w-full bg-black flex flex-row justify-between items-center top-0 py-2 px-4 sm:py-2 sm:px-10 md:py-2 md:px-10 lg:py-4 lg:px-16">
            <div className="hidden sm:block">
                <h2 className="text-lg text-white">
                    January 3, 2024
                </h2>
            </div>
            <Logo />
            <div>
                <img
                    src={Search}
                    className="w-[10vw] sm:w-[10vw] md:w-[5vw] lg:w-[4vw] hover:opacity-50 transition-opacity"
                    alt="Search"
                />
            </div>
        </div>
    );
};

export default header;
