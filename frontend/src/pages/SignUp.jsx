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
import { Link } from "react-router-dom";

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

  const [currentContent, setCurrentContent] = useState(true);

  return (
    <div className="bg-[#afafaf] h-screen flex">
      {currentContent ? (
        <div className="w-3/5 my-auto mx-auto md:mx-10 rounded-2xl bg-bkg px-4 shadow-xl flex flex-col items-center p-2">
          <img src="/Logo.png" alt="apple" className="w-20" />
          <h2 className="mb-8">Join PROductive Today</h2>
          <button className="flex rounded-2xl p-2 bg-slate-100 text-black w-3/4 mb-8">
            <img src="/Google.png" alt="google" className="w-8 mr-4" />
            Sign in with Google
          </button>
          <button className="flex rounded-2xl p-2 bg-slate-100 text-black w-3/4 mb-8">
            <img src="/Apple.png" alt="apple" className="w-8 mr-4" />
            Sign in with Apple
          </button>
          <div className="w-3/4 flex items-center justify-center mb-8">
            <hr className="w-full my-4 border-t-2 border-gray-300" />
            <span className="mx-4">Or</span>
            <hr className="w-full my-4 border-t-2 border-gray-300" />
          </div>

          <button
            className="rounded-2xl p-2 bg-slate-100 text-black w-3/4 mb-2 text-center"
            onClick={() => setCurrentContent(false)}
          >
            Create Account
          </button>
          <p className="text-sm mb-8">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>

          <p className="justify-center">
            Have an account already?{" "}
            <Link to="/signup" className="text-blue-500">
              Log in
            </Link>
          </p>
        </div>
      ) : (
        <div className="w-3/5 my-auto mx-auto md:mx-10 rounded-2xl bg-bkg px-4 shadow-xl flex flex-col items-center p-2">
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
      )}

      {/* Background Image */}
      <img
        src={GirlWorking}
        alt="img"
        className="w-2/5 h-full object-contain hidden md:flex"
      />
    </div>
  );
};

export default SignUp;
