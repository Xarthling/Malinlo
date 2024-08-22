import React from "react";
import Sidebar from "../Components/Layout/Sidebar";
import Button from "../Components/smallButton";
import Mock from "../assets/mock.svg";
import Profile from "../Pages/Profile";
import Partner from "../Pages/Partner";
const Home = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen p-3">
      <Sidebar />
      <div className="w-full h-full bg-n-1 border-n-6 border-solid border m-2 text-black rounded-md ">
        <div className="border-n-6 border-solid border-b p-3 ">
          <h4 className="h6 underline decoration-solid">
            Home - Partner Profles
          </h4>
        </div>
        <div className="p-3 w-full h-full">
        <Profile/>
        <Partner/>
       
      </div>
      </div>
    </div>
  );
};

export default Home;
