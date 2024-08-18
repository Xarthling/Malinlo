import React from "react";
import Logo from "./Minor/logo"
import Search from "../assets/search.svg"

const header = () => {
    return (
        <div className="w-full bg-black py-2 px-10 flex flex-row justify-between items-center top-0 sm:px-1  ">
            <div>
                <h2 className="text-white md: ">January 3,2024</h2>
            </div>
           <Logo/>
            <div>
                <img src={Search} className="w-10 hover:opacity-50 transition-DEFAULT" alt=" Search" />
            </div>
        </div>
    );
};

export default header;
