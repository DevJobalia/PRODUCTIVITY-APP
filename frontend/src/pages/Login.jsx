// https://codepen.io/tikvarova/pen/eYJrexG
import React from "react";
import GirlWorking from "/GirlWorking.jpg";
import user from "/user.svg";
import eye from "/eye.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#afafaf] h-screen flex">
      {/* Form Container */}
      <div className="w-3/5 my-auto mx-auto md:mx-10 rounded-2xl bg-bkg shadow-xl flex flex-col items-center">
        <div class="flex flex-wrap justify-between w-3/4">
          <img src="/Logo.png" alt="productivity" className="w-20" />
          <a
            href="/"
            class="text-content hover:text-orange-600 transition duration-500 my-auto items-center pr-2"
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
        <h2 className="mb-8">Sign In to PROductive</h2>
        <button className="flex rounded-2xl p-2 bg-slate-100 text-black w-3/4 mb-8">
          <img src="/Google.png" alt="google" className="w-8" />
          Sign in with Google
        </button>
        <button className="flex rounded-2xl p-2 bg-slate-100 text-black w-3/4 mb-8">
          <img src="/Apple.png" alt="apple" className="w-8" />
          Sign in with Apple
        </button>
        <div className="w-3/4 flex items-center justify-center">
          <hr className="w-full my-4 border-t-2 border-gray-300" />
          <span className="mx-4">Or</span>
          <hr className="w-full my-4 border-t-2 border-gray-300" />
        </div>

        <form className="w-3/4">
          {/* Username Input */}
          {/* <div class="mb-8"> */}
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <img src={user} alt="" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Phone, email or username"
              className="w-full my-4 flex rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-slate-100 text-center"
            />
          </div>
          <strong class="text-red-500 text-xs italic">
            Username is required
          </strong>
          {/* </div> */}

          {/* Password Input */}

          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <img src={eye} alt="" className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full my-4 flex rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-slate-100 text-center"
            />
          </div>

          <button className="rounded-2xl p-2 bg-slate-100 text-black w-full mb-8 text-center">
            Login
          </button>
        </form>
        <button className="rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-slate-100 text-center w-3/4 mb-8">
          Forget Password?
        </button>
        <p className="justify-center">
          Don't Have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </p>
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
