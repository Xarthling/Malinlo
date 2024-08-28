import React, { useState } from "react";
import Profile from "../../assets/profile.png";
import { sidebarIcon } from "../../constants";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="h-full border-n-6 hidden md:block border-solid border box-border bg-n-1 m-2 text-black rounded-md min-w-[20%] max-w-[25%] p-3 sm:p-0 sm:w-0 xl:w-[20%] lg:w-[20%] 2xl:max-w-[20%]">
      <div>
        <div className="flex mb-5 p-2">
          <img src={Profile} className="w-10" alt="img" />
          <div>
            <p className="font-bold">John Doe</p>
            <p className="text-xs text-n-4">johndoe@gmail.com</p>
          </div>
        </div>
        <ul>
          {sidebarIcon.map((item, index) => (
            <li
              className={`p-3 m-1 flex items-center rounded-md group hover:bg-n-3 transition-colors duration-300 cursor-pointer ${
                activeIndex === index ? "bg-n-3 text-n-1" : ""
              }`}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={item.icon}
                className={`w-6 h-6 mr-2 filter transition-all duration-300 ${
                  activeIndex === index ? "invert" : "group-hover:invert"
                }`}
                alt={item.title}
              />

              <span
                className={`ml-1 transition-colors duration-300 ${
                  activeIndex === index
                    ? "text-n-1"
                    : "group-hover:text-n-1 text-n-3"
                }`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
