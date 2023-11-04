// https://codepen.io/tikvarova/pen/eYJrexG

{
  /* <h1>Sign Up to PROductive</h1>
          <p>First className </p>
          <input type="text" />
          <p>Last name</p>
          <input type="text" name="" id="" />
          <p>location</p>
          <input type="text" name="" id="" />
          <p>profile img</p>
          <input type="file" name="" id="" />
          <p>email</p>
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required=""
          />
          <p>password</p>
          <input type="text" name="" id="" />
          <p>
            submit already account? <a href="">login</a>
          </p> */
}
{
  /* <div class="container flex items-center" id="nav"> */
}

// https://www.youtube.com/watch?v=YFHuaOl7frk
// https://github.com/QuickNuggets/multi-step-form/blob/master/src/components/steps/Account.js/
import React, { useState } from "react";
import GirlWorking from "/GirlWorking.jpg";
import user from "/user.svg";
import Progress from "../components/Register/Progress";
import ProgressControl from "../components/Register/ProgressControl";

import Presonal from "../components/Register/Steps/Presonal";
import Account from "../components/Register/Steps/Account";
import Final from "../components/Register/Steps/Final";

import { UseContextProvider } from "../contexts/StepperContext";

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Personal Information", "Account Setup", "Complete"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Presonal />;
      case 2:
        return <Account />;
      case 3:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="bg-[#afafaf] h-screen flex">
      <div className="w-2/3 h-full rounded-r-[500px] bg-bkg flex items-center justify-center">
        {/* Form Container */}
        <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
          {/* Stepper */}
          <div className="horizontal container mt-5 ">
            <Progress steps={steps} currentStep={currentStep} />

            <div className="my-10 p-10 ">
              <UseContextProvider>
                {displayStep(currentStep)}
              </UseContextProvider>
            </div>
          </div>

          {/* navigation button */}
          {currentStep !== steps.length && (
            <ProgressControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
        </div>
      </div>
      {/* Background Image */}
      <img
        src={GirlWorking}
        alt="img"
        className="w-1/3 h-full object-contain"
      />
    </div>
  );
};

export default SignUp;
