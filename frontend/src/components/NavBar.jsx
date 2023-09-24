import React from "react";
import Logo from "../assets/Logo.png";
import dot from "../assets/circle-solid.svg";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="fixed z-50 w-full py-8 bg-bkg ">
      <div className="container mx-auto inline">
        <div className="flex justify-between items-center h-1 ">
          <div className="flex-none">
            {/* logo */}
            <a href="/">
              <img src={Logo} alt="" className="w-20" />
            </a>
          </div>

          <div className="flex-initial items-start text-content w-1/5">
            <div className="flex gap-x-20">
              <a href="#Home">Home</a>
              <a href="#Testimonial">Testimonial</a>
              <Link to="/todo">Todo</Link>
              <Link to="/todo">Todo</Link>
            </div>
          </div>

          <div className="flex-initial items-center w-1/5">
            <div className="flex items-center justify-between">
              {/* SIGN IN */}
              <a className="text-gradient btn-link">Log In</a>

              <img src={dot} alt="" className="w-3 gap-y-10 " />

              {/* SIGN UP */}
              <button className="btn h-[48px] px-6 text-sm">Sign Up</button>
              <div className="inline ml-10 mr-5">
                {/* TOGGLE */}
                <Toggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default NavBar;
