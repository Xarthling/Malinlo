import React from "react";
import LogoW from "../assets/LogoW.svg";
import Button from "../Components/Button";
import InputField from "../Components/InputField";
const Signup = () => {
  return (
<div className="flex flex-col items-center w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/4 boxShadow-custom-lg p-6 border border-black rounded-md m-2 md:m-10">
<div className="flex flex-col w-3/4 justify-center items-center gap-4">
        <img src={LogoW} alt="Logo" />
        <h2 className="text-black font-bold h3 leading-1"> Personal Info</h2>
      </div>
      <div className="w-full">
      <InputField label="Name" type="text" placeholder="Enter your username" name="username" />
      <InputField label="Password" type="password" placeholder="Enter your password" name="password" />
      <InputField label="Email" type="email" placeholder="Enter your email" name="email" />
      <InputField label="Phone Number" type="tel" placeholder="Enter your phone number" name="phone" />

      <p className="p text-black font-medium mb-5">
        We will send you SMS to verify your phone number
      </p>

      <div className="flex items-center mb-5">
        <input type="checkbox" id="emailCheckbox" className="mr-2" />
        <label htmlFor="emailCheckbox" className="p text-black font-medium">
          Want to receive personal commercial messages from DLH via Email
        </label>
      </div>

      <div className="flex items-center">
        <input type="checkbox" id="privacyCheckbox" className="mr-2" />
        <label htmlFor="privacyCheckbox" className="p text-black font-medium">
          I have read and understood the privacy and cookie policy.
        </label>
      </div>
      </div>
      <Button title="Signup"/>
      <p className="text-n-2"> Already have a account? <a className="font-bold hover:opacity-50 transition-DEFAULT" href="#login">Login</a></p>

    </div>
  );
};

export default Signup;
