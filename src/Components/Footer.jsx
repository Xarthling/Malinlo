import React from "react";
import { footerIcons, footernavigation,footerLinks } from "../constants";
import Logo from "./Minor/logo";

const Footer = () => {
    return (
        <div className="w-full  relative flex flex-col  justify-between items-center  bottom-0 bg-slate-950 h-auto p-5 sm:p-8 md:p-10">
            <div className="flex flex-col justify-around items-center sm:items-start mb-4 sm:mb-0">
                <Logo />
                <div className="text-center sm:text-left my-4">
                    <p className="text-white">Dummy Address Lorem Ipsum, Lincoln Avenue,</p>
                    <p className="text-white">Lorem, London 12, D111111</p>
                </div>
                <div className="flex gap-4">
                {footerLinks.map((links) => (
                        <a className="text-white font-medium  cursor-pointer mb-1 hover:opacity-50 transition-DEFAULT" key={links.id} href={links.url}>
                            {links.title}
                        </a>
                    ))}
                   
                </div>
            </div>
            <div className="text-center sm:text-left mb-4 sm:mb-0">
                <h1 className="text-white font-medium text-lg sm:text-xl mb-2">Explore</h1>
                <div className="flex flex-col">
                    {footernavigation.map((item) => (
                        <a className="text-white cursor-pointer mb-1 hover:opacity-50 transition-DEFAULT" key={item.id} href={item.url}>
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
            <div className="text-center sm:text-left">
                <h2 className="text-white font-medium text-lg sm:text-xl mb-2">Contact Us</h2>
                <p className="text-white mb-1">+1 111-111-111</p>
                <p className="text-white mb-4">Support@mainlo.com</p>
                <ul className="flex justify-center sm:justify-start ">
                    {footerIcons.map((icon, index) => (
                        <li className="pr-4" key={index}>
                            <img src={icon} className="w-6 h-6 hover:opacity-50 transition-DEFAULT" alt={`icon-${index}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Footer;
