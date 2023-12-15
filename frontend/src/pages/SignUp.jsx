// // https://codepen.io/tikvarova/pen/eYJrexG

// // UI INSPRIRED BY TWITTER
// // MULTISTEP FORM:
// // 1. https://www.youtube.com/watch?v=YFHuaOl7frk
// // https://github.com/QuickNuggets/multi-step-form/blob/master/src/components/steps/Account.js/
// // 2. https://www.youtube.com/watch?v=QSBc8bABwE0
// // 3. https://www.youtube.com/watch?v=uDCBSnWkuH0
// import React, { useState, useEffect } from "react";
// import GirlWorking from "/GirlWorking.jpg";
// import Progress from "../components/Register/Progress";
// import ProgressControl from "../components/Register/ProgressControl";
// import toast from "react-hot-toast";
// // import validationSchema from "../validaton/validation";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import {
//   usernameSchema,
//   passwordSchema,
//   emailSchema,
// } from "../validaton/validation";

// import Presonal from "../components/Register/Steps/Presonal";
// import Account from "../components/Register/Steps/Account";
// import Final from "../components/Register/Steps/Final";

// import { UseContextProvider } from "../contexts/StepperContext";
// import { Link } from "react-router-dom";

// // check the input string
// // return error
// // onchange : remove error msg and re check

// const SignUp = () => {
//   const [termsChecked, setTermsChecked] = useState(false);
//   const [currentStep, setCurrentStep] = useState(1);
//   const steps = ["Personal Information", "Account Setup", "Complete"];

//   useEffect(() => {
//     console.log(termsChecked);
//   }, [termsChecked]);

//   const displayStep = (step) => {
//     switch (step) {
//       case 1:
//         return <Presonal />;
//       case 2:
//         return <Account />;
//       case 3:
//         return <Final />;
//       default:
//     }
//   };

//   const handleClick = (direction) => {
//     let newStep = currentStep;

//     direction === "next" ? newStep++ : newStep--;
//     // check if steps are within bounds
//     newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
//   };

//   const [currentContent, setCurrentContent] = useState(true);

//   function accountCreation(params) {
//     termsChecked
//       ? (() => {
//           toast.success("Let's Go!");
//           setCurrentContent(false);
//         })()
//       : toast.error("Accept terms and condition");
//   }

//   return (
//     <div className="bg-[#afafaf] h-screen flex">
//       {currentContent ? (
//         <div className="w-full md:w-3/5 my-auto mx-10 rounded-2xl bg-bkg px-4 shadow-xl flex flex-col items-center p-2">
//           <img src="/Logo.png" alt="apple" className="w-20" />
//           <h2 className="mb-8">Join PROductive Today</h2>
//           <button className="flex rounded-2xl p-2 bg-slate-100 text-black w-3/4 mb-8">
//             <img src="/Google.png" alt="google" className="w-8 mr-4" />
//             Sign in with Google
//           </button>
//           <button className="flex rounded-2xl p-2 bg-slate-100 text-black w-3/4 mb-8">
//             <img src="/Apple.png" alt="apple" className="w-8 mr-4" />
//             Sign in with Apple
//           </button>
//           <div className="w-3/4 flex items-center justify-center mb-8">
//             <hr className="w-full my-4 border-t-2 border-gray-300" />
//             <span className="mx-4">Or</span>
//             <hr className="w-full my-4 border-t-2 border-gray-300" />
//           </div>

//           <button
//             className="rounded-2xl p-2 bg-slate-100 text-black w-3/4 mb-2 text-center"
//             onClick={accountCreation}
//           >
//             Create Account
//           </button>
//           <div
//             className="flex justify-center items-baseline"
//             onClick={() => setTermsChecked(!termsChecked)}
//           >
//             <input
//               type="checkbox"
//               name=""
//               id=""
//               checked={termsChecked}
//               // onChange={() => setTermsChecked(!termsChecked)}
//             />
//             <p className="text-sm mb-8">
//               By signing up, you agree to the Terms of Service and Privacy
//               Policy, including Cookie Use.
//             </p>
//           </div>

//           <p className="justify-center">
//             Have an account already?{" "}
//             <Link to="/signin" className="text-blue-500">
//               Log in
//             </Link>
//           </p>
//         </div>
//       ) : (
//         <div className="w-full md:w-3/5 my-auto mx-10 rounded-2xl bg-bkg px-4 shadow-xl flex flex-col items-center p-2">
//           {/* Stepper */}
//           <div className="horizontal container mt-5 ">
//             <Progress steps={steps} currentStep={currentStep} />

//             <div className="my-10 p-10 ">
//               <UseContextProvider>
//                 {displayStep(currentStep)}
//               </UseContextProvider>
//             </div>
//           </div>

//           {/* navigation button */}
//           {currentStep !== steps.length && (
//             <ProgressControl
//               handleClick={handleClick}
//               currentStep={currentStep}
//               steps={steps}
//             />
//           )}
//         </div>
//       )}

//       {/* Background Image */}
//       <img
//         src={GirlWorking}
//         alt="img"
//         className="w-2/5 h-full object-contain hidden md:flex"
//       />
//     </div>
//   );
// };

// export default SignUp;

import React, { useState, useEffect } from "react";
import GirlWorking from "/GirlWorking.jpg";
import Progress from "../components/Register/Progress";
import ProgressControl from "../components/Register/ProgressControl";
import toast from "react-hot-toast";
import * as yup from "yup";
import {
  usernameSchema,
  passwordSchema,
  emailSchema,
} from "../validaton/validation";
import Presonal from "../components/Register/Steps/Presonal";
import Account from "../components/Register/Steps/Account";
import Final from "../components/Register/Steps/Final";
import { UseContextProvider } from "../contexts/StepperContext";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [termsChecked, setTermsChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  // const [validationErrors, setValidationErrors] = useState({});
  const [currentContent, setCurrentContent] = useState(true);
  const [personalData, setPersonalData] = useState({});

  const steps = ["Personal Information", "Account Setup", "Complete"];

  useEffect(() => {
    console.log(termsChecked);
  }, [termsChecked]);

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <Presonal
            // validationErrors={validationErrors}
            setPersonalData={setPersonalData}
          />
        );
      case 2:
        return <Account setPersonalData={setPersonalData} />;
      case 3:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? (newStep = newStep + 1) : (newStep = newStep - 1);

    // check if steps are within bounds
    if (newStep > 0 && newStep <= steps.length) {
      // Check if it's a next click and the current step is 1 (Personal Information)
      if (direction === "next" && currentStep === 1) {
        const personalValidationSchema = yup.object().shape({
          username: usernameSchema,
          password: passwordSchema,
        });

        personalValidationSchema
          .validate({
            // username: personalData.username,
            username: personalData.username,
            password: personalData.password,
          })
          .then(() => {
            // Validation passed
            // setValidationErrors({});
            // Proceed to the next step or perform other actions
            setCurrentStep(newStep);
          })
          .catch((error) => {
            // Validation failed
            // setValidationErrors(error);
            console.log("VALIDATE", { error });

            // Handle validation error, e.g., display an error message to the user
            toast.error(error.message);
          });
      } else if (direction === "next" && currentStep === 2) {
        const personalValidationSchema = yup.object().shape({
          email: emailSchema,
        });

        personalValidationSchema
          .validate({
            // username: personalData.username,
            email: personalData.email,
          })
          .then(() => {
            // Validation passed
            // setValidationErrors({});
            // Proceed to the next step or perform other actions
            setCurrentStep(newStep);
          })
          .catch((error) => {
            // Validation failed
            // setValidationErrors(error);
            console.log("VALIDATE", { error });

            // Handle validation error, e.g., display an error message to the user
            toast.error(error.message);
          });
      } else {
        // If it's not the Personal Information step, or if it's a previous click, proceed to the next step
        setCurrentStep(newStep);
      }
    }
  };

  const accountCreation = () => {
    if (termsChecked) {
      toast.success("Let's Go!");
      //   function
      //           toast.success("Let's Go!");
      setCurrentContent(false);
    } else {
      toast.error("Accept terms and condition");
    }
  };

  return (
    <div className="bg-[#afafaf] h-screen flex">
      {currentContent ? (
        <div className="w-full md:w-3/5 my-auto mx-10 rounded-2xl bg-bkg px-4 shadow-xl flex flex-col items-center p-2">
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
            onClick={accountCreation}
          >
            Create Account
          </button>
          <div
            className="flex justify-center items-baseline"
            onClick={() => setTermsChecked(!termsChecked)}
          >
            <input
              type="checkbox"
              name=""
              id=""
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
            <p className="text-sm mb-8">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </p>
          </div>

          <p className="justify-center">
            Have an account already?{" "}
            <Link to="/signin" className="text-blue-500">
              Log in
            </Link>
          </p>
        </div>
      ) : (
        <div className="w-full md:w-3/5 my-auto mx-10 rounded-2xl bg-bkg px-4 shadow-xl flex flex-col items-center p-2">
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
