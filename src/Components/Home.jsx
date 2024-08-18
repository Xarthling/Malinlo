import React from "react";
import Sidebar from "./Sidebar";
import Button from "./Minor/smallButton";
import Mock from "../assets/mock.svg";
const Home = () => {
  return (
    <div className="flex justify-center items-center  w-full h-full p-3">
      <Sidebar />
      <div className="w-full h-full bg-n-1 border-n-6 border-solid border m-2 text-black rounded-md ">
        <div className="border-n-6 border-solid border-b p-3 ">
          <h4 className="h6 underline decoration-solid">
            Home > Partner Profles
          </h4>
        </div>
        <div className="p-3">
        
        <div className="flex justify-end m-3 ">
          <Button onClick={() => alert("Button clicked!")}>Add New</Button>
        </div>
        <div className="w-full p-3 flex justify-between items-center border-n-6 border-solid border rounded-md">
          <div className="flex  items-center gap-4">
            <img src={Mock} alt="" />
            <p>Betty</p>
          </div>
          <p>3 Days ago you send a gift</p>
          <Button>></Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
