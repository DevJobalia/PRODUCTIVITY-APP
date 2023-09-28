import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { GoDotFill } from "react-icons/go";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed z-50 w-full p-5 lg:py-1 bg-bkg">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between lg:items-center h-fit md:flex-row">
          <div className="flex justify-between items-center">
            <div className="flex-none">
              <button
                data-collapse-toggle="navbar-default"
                type="button"
                onClick={toggleMobileMenu}
                className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`w-5 h-5 ${isMobileMenuOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div>
              {/* logo */}
              <a href="/">
                <img src={Logo} alt="" className="w-20 block m-auto lg:flex" />
              </a>
            </div>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:block md:flex-initial items-start text-content`}
          >
            <div className="flex flex-col md:flex-row md:gap-x-20">
              <a href="/#Home" onClick={toggleMobileMenu}>
                Home
              </a>
              <a href="/#Testimonial" onClick={toggleMobileMenu}>
                Testimonial
              </a>
              <Link to="/todo" onClick={toggleMobileMenu}>
                Todo
              </Link>
              <Link to="/blogs" onClick={toggleMobileMenu}>
                Blogs
              </Link>
              <Link to="/events" onClick={toggleMobileMenu}>
                Events
              </Link>
            </div>
          </div>
          <div className="flex-initial items-center">
            <div className="flex items-center justify-between">
              {/* SIGN IN */}
              <a className="text-gradient btn-link">Log In</a>
              <div className="hidden md:flex items-center">
                <GoDotFill className="text-content mx-2" />

                {/* SIGN UP */}
                <button className="btn h-[48px] px-6 text-sm">Sign Up</button>
              </div>
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
