// ANIMATION: SMALL BIG: https://github.com/DevJobalia/React-Card-Animation
import React, { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { HiPlus } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const options = [
  {
    label: "Work",
    icon: <GoDotFill className="w-10 h-10 text-purple-400" />,
  },
  {
    label: "Study",
    icon: <GoDotFill className="w-10 h-10 text-pink-400" />,
  },
  {
    label: "Entertainment",
    icon: <GoDotFill className="w-10 h-10 text-red-400" />,
  },
  {
    label: "Family",
    icon: <GoDotFill className="w-10 h-10 text-green-400" />,
  },
];

const TodoModal = ({ modalOpen, setModalOpen }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const handleClick = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        setModalOpen(false);
      }
    },
    [overlay]
  );
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <>
      {modalOpen && (
        <div className="modal" ref={overlay} onClick={handleClick}>
          <button
            type="button"
            className="absolute top-4 right-8"
            onClick={() => setModalOpen(false)}
          >
            <img src="/close.svg" width={17} height={17} alt="close" />
          </button>
          <div className="modal_wrapper text-gray-700 p-4" ref={wrapper}>
            <div className="w-full flex justify-between items-center mb-2">
              cancel <button className="btn px-5">Add</button>
            </div>
            <div className="w-3/4">
              <h1>Title</h1>
              <input
                type="text"
                placeholder="Task Title"
                className="w-full my-4 flex rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-slate-500"
              />

              <h1>Description</h1>
              <input
                type="text"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, minima?"
                className="w-full my-4 flex rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-slate-500"
              />
              <h1>Status</h1>
              <select className="w-full my-4 flex rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-slate-500">
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>

              <h1>Tags</h1>
              <ul className="w-full my-4 flex justify-between rounded-2xl px-4 py-2 border-2 border-slate-100 bg-bkg text-slate-500">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedOption(option)}
                    className="flex items-center"
                  >
                    {option.icon} {option.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoModal;
