// ANIMATION: SMALL BIG: https://github.com/DevJobalia/React-Card-Animation
import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiPlus } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

function AddTask() {
  return (
    <>
      <div className="bg-bkg text-content isolate pt-20 min-h-screen">
        {/* todo frame */}
        <div className="bg-teal-300 mt-10 max-w-4xl mx-auto rounded-md p-5">
          {/* MAIN CONTENT */}
          <div className="bg-content mt-5 rounded-md flex-col text-bkg">
            {/* TASKS */}
            <div className="w-full flex justify-between items-center mb-2">
              cancel <button>Notify</button>
            </div>
            <div>
              <h1>Title</h1>
              <input type="text" name="" id="" placeholder="first task title" />
              <h1>DEscription</h1>
              <input
                type="text"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, minima?"
              />
            </div>
            <div className="flex justify-between items-center font-bold mt-2">
              <div className="flex">
                <GoDotFill className="w-10 h-10 text-red-400 place-content-center" />
                <GoDotFill className="w-10 h-10 text-green-400 place-content-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTask;
