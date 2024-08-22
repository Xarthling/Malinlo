import React from "react";
import { footerIcons, footernavigation, footerLinks } from "../../constants";
import Logo from "../logo";

const Footer = () => {
    return (
        <footer className="bg-n-3 p-5 sm:p-8 md:p-10">
            <div className="container mx-auto flex flex-col sm:items-start md:flex-row justify-between lg:items-start   ">
                {/* Logo and Address Section */}
                <div className="flex flex-col items-center sm:items-center md:items-start mb-8 md:mb-0">
                    <Logo />
                    <div className="text-center md:text-left mt-4">
                        <p className="text-white">Dummy Address Lorem Ipsum, Lincoln Avenue,</p>
                        <p className="text-white">Lorem, London 12, D111111</p>
                    </div>
                    <div className="flex flex-row gap-4 mt-4">
                        {footerLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                className="text-white font-medium cursor-pointer mb-1 hover:opacity-50 transition-opacity"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Explore Section */}
                <div className="text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-white font-medium text-lg sm:text-xl mb-2">Explore</h1>
                    <div className="flex flex-col">
                        {footernavigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                className="text-white cursor-pointer mb-1 hover:opacity-50 transition-opacity"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-white font-medium text-lg sm:text-xl mb-2">Contact Us</h2>
                    <p className="text-white mb-1">+1 111-111-111</p>
                    <p className="text-white mb-4">Support@mainlo.com</p>
                    <ul className="flex justify-center md:justify-start">
                        {footerIcons.map((icon, index) => (
                            <li key={index} className="pr-4">
                                <img
                                    src={icon}
                                    className="w-6 h-6 hover:opacity-50 transition-opacity"
                                    alt={`icon-${index}`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
