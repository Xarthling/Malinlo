import React from "react";
import LogoW from "../assets/Logo W.svg";
import Button from "./Minor/Button";
import InputField from "./Minor/InputField";
const Login = () => {
  return (
    <div className="flex flex-col items-center boxShadow-custom-lg p-6  border-solid border border-black rounded-md sm:w-full m-1 md:w-3/4 lg:w-2/4 m-10 xl:w-1/4 ">
      <div className="flex flex-col w-3/4 justify-center items-center gap-4">
        <img src={LogoW} alt="Logo" />
        <h2 className="text-black font-bold h2 leading-1"> Welcome</h2>
      </div>
      <div className="w-full">
        <InputField
          label="Name"
          type="text"
          placeholder="Enter your username"
          name="username"
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <div className="flex justify-between items-center mb-5">
          <div>
            {" "}
            <input type="checkbox" id="emailCheckbox" className="mr-2 " />
            <label htmlFor="emailCheckbox" className="text-black font-medium">
              Remember me
            </label>
          </div>
          <a className="text-n-2" href="#forgot">
            Forgot Password?
          </a>
        </div>
      </div>
      <Button  title="Signup" />
      <p className="text-black">
        {" "}
        Dont have an Account?{" "}
        <a
          className="font-bold hover:opacity-50 transition-DEFAULT"
          href="#login"
        >
          Create
        </a>
      </p>
    </div>
  );
};

export default Login;
