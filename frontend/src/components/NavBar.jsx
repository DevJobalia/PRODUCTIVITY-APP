import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Logo from "/Logo.png";
import { GoDotFill } from "react-icons/go";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";
import { getUser, sendToken } from "../utils/API CALLS";
import avatar from "/profile.png";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const user = await sendToken();
  //       console.log("TOKEN NAV", user);
  //       setToken(user.user.username);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [token]);

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
                <img src={Logo} alt="" className="w-20 block m-auto lg:flex" />{" "}
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
              {!userData && (
                <>
                  <a href="/#Home">Home</a>
                  <a href="/#Testimonial" onClick={toggleMobileMenu}>
                    Testimonial
                  </a>
                </>
              )}
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
            {!userData ? (
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
                <DropDownMenu />
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

function DropDownMenu() {
  const [open, setOpen] = useState(false);
  // const [data, setData] = useState();
  const dropdownRef = useRef(null);

  // Access user data from Redux store
  const userData = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  const logout = () => {
    // <Navigate to={"/"} replace={true}></Navigate>;
    dispatch(deleteUser());
  };

  const handleClickOutside = (event) => {
    console.log("triggered");
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const val = await getUser();
  //       console.log("USER DATA", val.profile);
  //       setData(val);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
  return (
    <div ref={dropdownRef}>
      {/* <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"

        type="button"
        
      > */}
      <img
        src={userData?.profile || avatar}
        className=" cursor-pointer  border-1 border-gray-100 w-10 h-10 rounded-full shadow-lg align-middle items-center my-auto ml-10"
        alt="avatar"
        onClick={() => setOpen(!open)}
      />
      {/* <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg> */}
      {/* </button> */}

      {/* <!-- Dropdown menu --> */}
      {open && (
        <div
          id="dropdownInformation"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-[4rem]"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{userData?.username}</div>
            <div className="font-medium truncate">{userData?.email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownInformationButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Profile Settings
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-2">
            <Link to="/" onClick={() => logout()}>
              <span className=" h-[48px] px-6 text-sm block  py-2  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Logout
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
