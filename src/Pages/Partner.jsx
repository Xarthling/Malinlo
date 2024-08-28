import React from "react";
import Button from "../Components/Button";
import Mock from "../assets/mock.svg";
import Edit from "../assets/edit.svg";
import PropTypes from 'prop-types';

const Partner = () => {
  return (
    <div className="w-full h-full flex">
      <div className=" w-1/2 h-full flex flex-col ">
        <div className="flex w-3/4 justify-evenly">
          <div>
            <img src={Mock} className="w-20 " alt="" />
          </div>
          <div className=" flex flex-col ">
            <div className="flex gap-3 items-center">
              <h1 className="h6">Betty </h1>
              <img src={Edit} className="w-4" alt="Edit" />
            </div>
            <p className="p text-n-3">24 Years | Taurus</p>
            <p className="p text-n-3">Dates:4 | Gifts:23</p>
          </div>
        </div>
        <div className="flex justify-evenly w-1/2 mt-3">
          <p className="p text-n-3">Nickname</p>
          <p className="p text-n-3 font-bold">Betty</p>
        </div>
      </div>
      <div className=" w-1/2 h-full flex flex-col items-end">
        <div className=" flex flex-col">
          <Button className="border border-n-3  " title="Send a gift" />
          <p className="p text-n-3">3 Days Ago you sent a gift</p>
        </div>
        <div className=" flex flex-col">
          <Button className="border border-n-3 bg-n-1 text-n-3 hover:bg-n-3 hover:text-n-1" title="Plan a Date" />
          <p className="p text-n-3">3 Days ago you had a date</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;