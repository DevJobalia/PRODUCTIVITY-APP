import React, { useEffect, useState } from "react";
import Logo from "/Logo.png";
import { GoDotFill } from "react-icons/go";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(";");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((s) => s.trim());

    if (cookieName === name) {
      return cookieValue;
    }
  }

  return null; // Return null if the cookie is not found
};

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [token, setToken] = useState("");

  const logout = () => {
    document.cookie = `loggedInUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    setToken("");
  };

  useEffect(() => {
    // const token = await localStorage.getItem('token');
    setToken(getCookie("loggedInUser"));
  }, [token]);

  return (
    <header className="fixed z-50 w-full p-5 lg:py-1 bg-bkg">
      <div className="container mx-auto">
        <div
          className={`${
            isMobileMenuOpen ? "block md:flex" : "flex"
          } justify-between h-fit md:flex-row items-center content-center`}
          // className="justify-between lg:items-center h-fit md:flex-row content-center"
        >
          <div className="flex justify-between items-center">
            <div>
              {/* logo */}
              <a href="/">
                <img src={Logo} alt="" className="w-20 block m-auto lg:flex" />
              </a>
            </div>
            <div className="flex-1">
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
          </div>
          {/* <div className={`${isMobileMenuOpen ? "block" : "flex"}`}> */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:flex-initial items-start text-content`}
          >
            <div className="flex flex-col md:flex-row md:gap-x-20">
              <a href="/#Home">Home</a>
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
          <div className="flex-auto justify-between md:flex-initial">
            {!token ? (
              <div className="flex justify-between items-center content-center">
                {/* SIGN IN */}
                <a className="text-gradient btn-link" href="/signin">
                  Log In
                </a>
                <div className="hidden md:flex items-center">
                  <GoDotFill className="text-content mx-2" />

                  {/* SIGN UP */}
                  <Link to="/signup" onClick={toggleMobileMenu}>
                    <button className="btn h-[48px] px-6 text-sm">
                      Sign Up
                    </button>
                  </Link>
                </div>
                <div className="inline ml-10 mr-5">
                  {/* TOGGLE */}
                  <Toggle />
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center content-center">
                <Link to="/" onClick={() => logout()}>
                  <button className="btn h-[48px] px-6 text-sm">Logout</button>
                </Link>
                <div className="inline ml-10 mr-5">
                  <Toggle />
                </div>
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
