// https://codepen.io/tikvarova/pen/eYJrexG
import React from "react";
import GirlWorking from "../../public/GirlWorking.jpg";
import user from "../../public/user.svg";
import eye from "../../public/eye.svg";

const Login = () => {
  return (
    <div className="bg-[#afafaf] h-screen flex">
      <div className="w-2/3 h-full rounded-r-[500px] bg-bkg flex items-center justify-center">
        {/* Form Container */}
        <div class="w-full pt-2 p-4">
          <div class="mx-auto md:p-6 md:w-1/2">
            <div class="flex flex-wrap justify-between">
              <h1 class="text-2xl text-content p-4">Sign-in</h1>
              <a
                href="/"
                class="text-content hover:text-orange-600 transition duration-500 my-auto items-center"
              >
                <svg
                  class="w-6 h-6 inline-block mr-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Back Home
              </a>
            </div>
            <form method="POST" action="#login">
              {/* Username Input */}
              <div class="mb-8">
                <label for="username" class="block text-sm font-bold mb-2">
                  <span class="text-red-500">&nbsp;*</span> Username
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <img src={user} alt="" className="h-5 w-5 text-gray-400" />
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

              {/* Password Input */}
              <div class="mb-8">
                <label for="password" class="block text-sm font-bold mb-2">
                  <span class="text-red-500">&nbsp;*</span> Password
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <img src={eye} alt="" className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    name="password"
                    id="password"
                    type="text"
                    class="input"
                  />
                </div>
              </div>

              {/* Remember Me Checkbox and Forgot Password Link */}
              <div class="mb-6">
                <div class="flex items-center justify-between">
                  <div>
                    <label class="block font-bold" for="remember">
                      <input
                        class="ml-2 leading-tight"
                        type="checkbox"
                        id="remember"
                        name="remember"
                      />
                      <span class="text-sm">Remember me</span>
                    </label>
                  </div>
                  <div>
                    <a
                      class="font-bold text-sm text-content hover:text-orange-800"
                      href="#password-request"
                    >
                      Forgot password
                    </a>
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <div class="mb-4 text-center">
                <button
                  class="transition duration-500 bg-accent-1 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>

              {/* Sign Up Link */}
              <div class="mt-8">
                <p class="text-sm">
                  No account?
                  <a
                    class="font-bold text-sm text-content hover:text-orange-800"
                    href="/signup"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </form>
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

export default Login;
