// import { useStepperContext } from "../../../contexts/StepperContext";

// export default function Presonal() {
//   const { userData, setUserData } = useStepperContext();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   return (
//     <div className="flex flex-col ">
//       <div className="mx-2 w-full flex-1">
//         {/* <strong className="text-red-500 text-xs italic">
//           {errors?.username?.message}
//         </strong> */}
//         <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
//           Username
//         </div>
//         <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
//           <input
//             onChange={handleChange}
//             value={userData["username"] || ""}
//             name="username"
//             placeholder="Username"
//             className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
//           />
//         </div>
//       </div>
//       <div className="mx-2 w-full flex-1">
//         <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
//           Password
//         </div>
//         <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
//           <input
//             onChange={handleChange}
//             value={userData["password"] || ""}
//             name="password"
//             placeholder="Password"
//             type="password"
//             className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import { useStepperContext } from "../../../contexts/StepperContext";
import { usernameSchema, passwordSchema } from "../../../validaton/validation";

export default function Personal({ setPersonalData }) {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setPersonalData((prevData) => ({ ...prevData, [name]: value }));
  };
  // console.log("PERSONAN", validationErrors);
  // useEffect(() => {
  //   console.log("Validation Errors Updated:", validationErrors);
  // }, [validationErrors]);
  return (
    <div className="flex flex-col">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Username
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Username"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        {/* {validationErrors && validationErrors.username && (
          <p className="text-red-500 text-xs">{validationErrors.username}</p>
        )} */}
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Password
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        {/* {validationErrors && validationErrors.password && (
          <p className="text-red-500 text-xs">{validationErrors.password}</p>
        )} */}
      </div>
    </div>
  );
}
