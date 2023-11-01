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
import React from "react";
import GirlWorking from "../../public/GirlWorking.jpg";
import user from "../../public/user.svg";

const SignUp = () => {
  return (
    <div className="bg-[#afafaf] h-screen flex">
      <div className="w-2/3 h-full rounded-r-[500px] bg-bkg flex items-center justify-center">
        {/* Form Container */}
        <div class="w-full pt-2 p-4">
          <div class="mx-auto md:p-6 md:w-1/2">
            {/* Username Input */}
            <div class="mb-8">
              <label for="username" class="block text-sm font-bold mb-2">
                <span class="text-red-500">&nbsp;*</span> Username
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <img src={user} className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  class="input"
                  placeholder="you@example.com"
                />
              </div>
              <strong class="text-red-500 text-xs italic">
                Username is required
              </strong>
            </div>
          </div>
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
