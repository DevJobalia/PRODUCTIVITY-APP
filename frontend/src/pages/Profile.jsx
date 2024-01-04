import React from "react";

function Profile() {
  return (
    // <div className="bg-bkg h-screen text-content grid grid-cols-[20%_80%] pt-20 gap-5 p-2">
    //   <div className="rounded-md border-2 border-gray-400/50 p-5 h-fit">
    //     User Setting
    //   </div>
    //   <div className="row-span-3 rounded-md border-2 border-gray-400/50">
    //     dev2
    //   </div>
    //   <div className="rounded-md border-2 border-gray-400/50">dev3</div>
    //   <div></div>
    // </div>
    <div className="bg-bkg text-content container mx-auto pt-20">
      <div className="flex flex-wrap pt-20 md:pt-2 p-2">
        <div className=" overflow-hidden mr-2">
          <div className="p-4 mb-2 bg-white border rounded-lg dark:text-slate-100 dark:bg-slate-950 dark:border-slate-800/80">
            <h1 className="text-2xl font-bold">User Settings</h1>
          </div>
          <div className="flex flex-row items-end mb-2 overflow-auto text-sm font-bold uppercase bg-white border rounded-lg text-slate-700 whitespace-nowrap dark:bg-slate-950 dark:border-slate-800/80 dark:text-slate-300 lg:items-start lg:flex-col">
            <a
              className="px-3 md:px-6 py-4 w-full flex flex-row items-center text-blue-500"
              href="/settings"
            >
              <svg
                className="w-6 h-6 mr-4 opacity-75 fill-current"
                viewBox="0 0 496 512"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z"></path>
              </svg>
              <span>Profile</span>
            </a>
            <a
              className="px-3 md:px-6 py-4 w-full flex flex-row items-center hover:bg-slate-100 dark:hover:bg-slate-800"
              href="/settings/emails"
            >
              <svg
                className="w-6 h-6 mr-4 opacity-75 fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path>
              </svg>
              <span>Email Notifications</span>
            </a>
            <a
              className="px-3 md:px-6 py-4 w-full flex flex-row items-center hover:bg-slate-100 dark:hover:bg-slate-800"
              href="/settings/blogs"
            >
              <svg
                className="w-6 h-6 mr-4 opacity-75 fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM32 80c0-8.8 7.2-16 16-16h48v64H32V80zm448 352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160h448v272zm0-304H128V64h336c8.8 0 16 7.2 16 16v48z"></path>
              </svg>
              <span>Manage Blogs</span>
            </a>
            <a
              className="px-3 md:px-6 py-4 w-full flex flex-row items-center hover:bg-slate-100 dark:hover:bg-slate-800"
              href="/settings/developer"
            >
              <svg
                className="w-6 h-6 mr-4 opacity-75 fill-current"
                viewBox="0 0 576 512"
              >
                <path d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z"></path>
              </svg>
              <span>Developer</span>
            </a>
            <a
              className="px-3 md:px-6 py-4 w-full flex flex-row items-center hover:bg-slate-100 dark:hover:bg-slate-800"
              href="/settings/account"
            >
              <svg
                className="w-6 h-6 mr-4 opacity-75 fill-current"
                viewBox="0 0 512 512"
              >
                <path d="M168 255.1c0-47.7 39.4-88 88-88s88 40.3 88 88c0 49.5-39.4 88.9-88 88.9s-88-39.4-88-88.9zm88-56c-30.9 0-56 26-56 56 0 31.8 25.1 56 56 56s56-24.2 56-56c0-30-25.1-56-56-56zM65.67 230.6l-40.33-36.8c-11.12-10.1-13.68-26.6-6.16-39.6l30.24-52.4c7.52-13.02 23.09-19.05 37.42-14.48l51.96 16.58c13.4-10.34 28.2-18.94 44-25.47l11.7-53.27C197.7 10.47 210.7 0 225.8 0h60.4c15.1 0 28.1 10.47 31.3 25.16l11.7 53.27c14.9 6.53 30.6 15.13 44 25.47l52-16.58c14.3-4.57 29.9 1.46 37.4 14.48l30.2 52.4c7.5 13 5 29.5-6.1 39.6l-40.4 36.8c1.1 8.3 1.7 16.8 1.7 24.5 0 9.5-.6 18-1.7 26.3l40.4 36.8c11.1 10.1 13.6 26.6 6.1 39.6l-30.2 52.4c-7.5 13-23.1 19-37.4 14.5l-52-16.6c-13.4 10.3-29.1 18.9-44 25.5l-11.7 53.2c-3.2 14.7-16.2 25.2-31.3 25.2h-60.4c-15.1 0-28.1-10.5-31.3-25.2l-11.7-53.2c-15.8-6.6-30.6-15.2-44-25.5l-51.96 16.6c-14.33 4.5-29.9-1.5-37.42-14.5l-30.24-52.4c-7.52-13-4.96-29.5 6.16-39.6l40.33-36.8c-1.1-8.3-1.67-16.8-1.67-26.3 0-7.7.57-16.2 1.67-24.5zm92.73-101.4-13.3 10.3-67.97-21.7-30.24 52.4 52.69 48-2.19 16.6c-.92 6.9-1.39 14-1.39 20.3 0 8.1.47 15.2 1.39 22.1l2.19 16.6-52.69 48 30.24 52.4 67.97-21.7 13.3 10.3c11.1 8.6 23.5 15.8 36.6 20.3l15.5 7.3 15.3 69.6h60.4l15.3-69.6 14.6-7.3c14-4.5 26.4-11.7 37.5-20.3l13.3-10.3 68 21.7 30.2-52.4-52.7-48 2.2-16.6c.9-6.9 1.4-14 1.4-21.2 0-7.2-.5-14.3-1.4-21.2l-2.2-16.6 52.7-48-30.2-52.4-68 21.7-13.3-10.3c-11.1-8.6-23.5-15.8-37.5-21.2l-14.6-6.4L286.2 32h-60.4l-15.3 69.6L195 108c-13.1 5.4-25.5 12.6-36.6 21.2z"></path>
              </svg>
              <span>Account</span>
            </a>
            <button className="px-3 md:px-6 py-4 w-full flex flex-row items-center hover:bg-slate-100 dark:hover:bg-slate-800">
              <svg
                className="w-6 h-6 mr-4 opacity-75 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.98245 10.0112H15.992M15.992 4.00159L18.9968 7.00637L6.6271 19.3761C6.22864 19.7745 5.68821 19.9984 5.12471 19.9984C4.5612 19.9984 4.02077 19.7745 3.62231 19.3761C3.22385 18.9776 3 18.4372 3 17.8737C3 17.3102 3.22385 16.7698 3.62231 16.3713L15.992 4.00159ZM18.9968 15.0191L20.4992 16.6217C20.7542 16.9108 20.9203 17.2674 20.9777 17.6486C21.0351 18.0298 20.9812 18.4195 20.8226 18.7709C20.664 19.1222 20.4073 19.4204 20.0835 19.6295C19.7596 19.8386 19.3823 19.9499 18.9968 19.9499C18.6113 19.9499 18.234 19.8386 17.9101 19.6295C17.5863 19.4204 17.3296 19.1222 17.171 18.7709C17.0124 18.4195 16.9586 18.0298 17.0159 17.6486C17.0733 17.2674 17.2394 16.9108 17.4944 16.6217L18.9968 15.0191Z"
                  stroke="stroke-current"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_938_22323"
                    x1="12"
                    y1="-1.79726"
                    x2="12"
                    y2="24.5975"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3466F6"></stop>
                    <stop offset="0.0001" stop-color="#3466F6"></stop>
                    <stop offset="1" stop-color="#7C3AED"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="uppercase">Beta Features</span>
            </button>
            <a
              className="px-3 md:px-6 py-4 w-full flex flex-row items-center hover:bg-slate-100 dark:hover:bg-slate-800"
              href="/settings/pro"
            >
              <svg
                className="w-6 h-6 mr-4 stroke-current opacity-75"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7691 15.5L8.99986 12.7308M11.7691 15.5C13.0584 15.0096 14.2954 14.3912 15.4613 13.6539M11.7691 15.5L11.7691 20.1154C11.7691 20.1154 14.5659 19.6077 15.4613 18.2692C16.4582 16.7739 15.4613 13.6539 15.4613 13.6539M8.99986 12.7308C9.49107 11.4565 10.1096 10.2349 10.846 9.08473C11.9215 7.36505 13.4192 5.94912 15.1964 4.97164C16.9736 3.99415 18.9714 3.48761 20.9997 3.50019C20.9997 6.01092 20.2797 10.4232 15.4613 13.6539M8.99986 12.7308H4.38454C4.38454 12.7308 4.89222 9.93395 6.23067 9.03858C7.72603 8.04167 10.846 9.03858 10.846 9.03858M15.8347 9.23082C15.6785 9.38703 15.4252 9.38703 15.269 9.23082C15.1128 9.07461 15.1128 8.82134 15.269 8.66513M15.8347 9.23082C15.9909 9.07461 15.9909 8.82135 15.8347 8.66514C15.6785 8.50893 15.4252 8.50892 15.269 8.66513M15.8347 9.23082L15.269 8.66513M4.84607 16.8846C3.46147 18.0477 2.99994 21.5 2.99994 21.5C2.99994 21.5 6.4522 21.0384 7.61526 19.6538C8.27064 18.8785 8.26141 17.6877 7.53219 16.9677C7.1734 16.6253 6.70078 16.4274 6.20503 16.412C5.70928 16.3967 5.22534 16.565 4.84607 16.8846Z"
                  stroke="stroke-current"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>Pro Subscription</span>
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-8 bg-white border rounded-lg dark:bg-slate-950 dark:border-slate-800/80">
            <div className="">
              <div className="flex flex-row flex-wrap">
                <div className="w-full lg:w-1/2 lg:pr-10">
                  <h4 className="mb-5 text-xl font-bold text-slate-900 dark:text-slate-100">
                    Basic Info
                  </h4>
                  <div className="mb-6">
                    <label
                      for="nameField"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Full name
                    </label>

                    <input
                      type="text"
                      className="input-text "
                      id="nameField"
                      placeholder="Enter your full name"
                      value="Dev K Jobalia"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="tagline"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Profile Tagline
                    </label>
                    <input
                      type="text"
                      className="input-text"
                      id="tagline"
                      placeholder="Software Developer @ …"
                      value="WEB DEV | DSA | DevOps | Open Source | Technical Writer"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="customFile"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Profile Photo
                    </label>
                    <div className="relative block w-40 h-40 bg-slate-100 rounded-full shadow-xl">
                      <a
                        href="https://cdn.hashnode.com/res/hashnode/image/upload/v1697464166563/T9itdeLFt.png"
                        target="_blank"
                        className="block overflow-hidden rounded-full"
                      >
                        <img
                          className="block"
                          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1697464166563/T9itdeLFt.png?w=600&amp;h=600&amp;fit=crop&amp;crop=faces&amp;auto=compress"
                        />
                      </a>
                      <button className="absolute top-0 right-0 z-10 p-2 text-slate-700 bg-white border rounded-full">
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 448 512"
                        >
                          <path d="M296 432h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zm-160 0h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zM440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h24v368a48 48 0 0048 48h288a48 48 0 0048-48V96h24a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zM384 464a16 16 0 01-16 16H80a16 16 0 01-16-16V96h320zm-168-32h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      for="location"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      className="input-text"
                      id="location"
                      placeholder="California, US"
                      value=""
                    />
                  </div>
                  <h4 className="mt-10 mb-5 text-xl font-bold text-slate-900 dark:text-slate-100">
                    About You
                  </h4>
                  <div className="mb-6">
                    <label
                      for="moreAboutYou"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Profile Bio (About you)
                    </label>
                    <textarea
                      type="text"
                      className="input-text min-h-30"
                      id="moreAboutYou"
                      placeholder="I am a developer from …"
                    >
                      Hey there! 👋 I'm Dev Jobalia, a Web Developer from India
                      with a passion for Computer Science. I bring years of
                      experience, a versatile tech toolkit, and a knack for
                      fostering seamless teamwork. #WebDev #TechEnthusiast
                      #Teamwork
                    </textarea>
                  </div>
                  <div className="mb-6">
                    <label
                      for="skills"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Tech Stack
                    </label>
                    <div className="">
                      <div className="relative mb-2">
                        <input
                          type="text"
                          className="input-text"
                          id="skills"
                          data-toggle="dropdown"
                          placeholder="Search technologies, topics, more…"
                        />
                        <div className="absolute top-100 right-0 w-full h-auto bg-white dark:bg-slate-950 rounded-lg shadow-lg z-10"></div>
                      </div>
                      <div classNameName="flex flex-row flex-wrap">
                        <div className="button-primary small mr-2 mb-2 flex flex-row items-center">
                          <a href="#" className="mr-2">
                            <span>MERN Stack</span>
                          </a>
                          <button data-index="0">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 320 512"
                            >
                              <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="button-primary small mr-2 mb-2 flex flex-row items-center">
                          <a href="#" className="mr-2">
                            <span>Tailwind CSS</span>
                          </a>
                          <button data-index="1">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 320 512"
                            >
                              <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="button-primary small mr-2 mb-2 flex flex-row items-center">
                          <a href="#" className="mr-2">
                            <span>framer-motion</span>
                          </a>
                          <button data-index="2">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 320 512"
                            >
                              <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="button-primary small mr-2 mb-2 flex flex-row items-center">
                          <a href="#" className="mr-2">
                            <span>html/css</span>
                          </a>
                          <button data-index="3">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 320 512"
                            >
                              <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="button-primary small mr-2 mb-2 flex flex-row items-center">
                          <a href="#" className="mr-2">
                            <span>JavaScript</span>
                          </a>
                          <button data-index="4">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 320 512"
                            >
                              <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="button-primary small mr-2 mb-2 flex flex-row items-center">
                          <a href="#" className="mr-2">
                            <span>Java</span>
                          </a>
                          <button data-index="5">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 320 512"
                            >
                              <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="button-primary small mr-2 mb-2 flex flex-row items-center">
                          <a href="#" className="mr-2">
                            <span>DSA</span>
                          </a>
                          <button data-index="6">
                            <svg
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 320 512"
                            >
                              <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      for="availableFor"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Available for
                    </label>
                    <textarea
                      type="text"
                      className="input-text min-h-30 available-field"
                      id="availableFor"
                      placeholder="I am available for mentoring, …"
                    >
                      Let's connect and grow together in the world of
                      technology! 🚀
                    </textarea>
                    <small className="block mt-1 ml-2 leading-tight text-slate-600">
                      78/140
                    </small>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h4 className="mb-5 text-xl font-bold text-slate-900 dark:text-slate-100">
                    Social
                  </h4>

                  <div className="mb-6">
                    <label
                      for="website"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Website URL
                    </label>
                    <input
                      type="url"
                      className="input-text }"
                      id="website"
                      placeholder="https://johndoe.com"
                      value=""
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="linkedin"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      LinkedIn URL
                    </label>
                    <input
                      type="url"
                      pattern="(http|https)://linkedin\.com\/in\/(.+)|(http|https)://www\.linkedin\.com\/in/(.+)|(http|https)://linkedin\.com\/company\/(.+)|(http|https)://www\.linkedin\.com\/company/(.+)"
                      className="input-text }"
                      id="linkedin"
                      placeholder="https://www.linkedin.com/in/johndoe"
                      value=""
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="youtube"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      YouTube Channel
                    </label>
                    <input
                      type="url"
                      pattern="(http|https)://youtube\.com\/channel\/(.+)|(http|https)://www\.youtube\.com\/channel\/(.+)|(http|https)://youtube\.com\/c\/(.+)|(http|https)://www\.youtube\.com\/c\/(.+)|(http|https)://youtube\.com\/@([a-zA-Z0-9._-]+)|(http|https)://www\.youtube\.com\/@([a-zA-Z0-9._-]+)"
                      className="input-text }"
                      id="youtube"
                      placeholder="https://www.youtube.com/channel/channel-name"
                      value=""
                    />
                  </div>
                  <h4 className="mt-10 mb-5 text-xl font-bold text-slate-900 dark:text-slate-100">
                    Profile Identity
                  </h4>
                  <div className="mb-6">
                    <label
                      for="username"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Username
                    </label>
                    <small className="block mb-2 -mt-2 text-base italic text-slate-500 dark:text-slate-400">
                      You have the option to change your username once. Please
                      choose carefully as it cannot be changed again.
                    </small>
                    <div className="relative">
                      <input
                        type="text"
                        maxlength="20"
                        className="input-text "
                        id="username"
                        placeholder=""
                        value="DevJobalia"
                      />
                      <div className="absolute top-0 right-0 mt-4 mr-4 z-100"></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-300"
                    >
                      Email address
                    </label>
                    <small className="block mb-2 -mt-2 text-base italic text-slate-500 dark:text-slate-400">
                      Changing your email address might break your OAuth sign-in
                      if your social media accounts do not use the same email
                      address. Please use magic link sign-in if you encounter
                      such an issue.
                    </small>
                    <input
                      type="email"
                      className="input-text  "
                      id="email"
                      placeholder=""
                      value="devkjobalia1@gmail.com"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-5">
              <button className="button-primary big">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
