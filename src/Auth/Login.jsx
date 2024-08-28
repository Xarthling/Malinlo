import React from "react";
import LogoW from "../assets/LogoW.svg";
import Button from "../Components/Button";
import InputField from "../Components/InputField";
const Login = () => {
  return (
    <div className="flex flex-col items-center w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/4 boxShadow-custom-lg p-6 border border-black rounded-md m-2 md:m-10">
      <div className="flex flex-col w-2/4 justify-center items-center gap-4">
        <img src={LogoW} alt="Logo" className="w-[50%]" />
        <h3 className="text-black font-bold h3 leading-1"> Personal Info</h3>
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
          <div className="flex items-center">
            <input type="checkbox" id="emailCheckbox" className="mr-2" />
            <label htmlFor="emailCheckbox" className="text-black font-medium">
              Remember me
            </label>
          </div>
          <a className="text-n-2 p" href="#forgot">
            Forgot Password?
          </a>
        </div>
      </div>
      <Button title="Signup" />
      <p className="text-black text-sm md:text-base">
        Don't have an Account?{" "}
        <a
          className="font-bold hover:opacity-50 transition-opacity"
          href="#login"
        >
          Create
        </a>
      </p>
    </div>
  );
};

export default Login;
