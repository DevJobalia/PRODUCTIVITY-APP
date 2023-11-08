// ANIMATION: SMALL BIG: https://github.com/DevJobalia/React-Card-Animation
import React, { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";

import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "incomplete",
    tags: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectTags = (selectedTag) => {
    // Clone the current tags array
    const updatedTags = [...form.tags];

    // Check if the selectedTag is already in the array
    const tagIndex = updatedTags.indexOf(selectedTag);

    // If the selectedTag is not in the array, add it; otherwise, remove it
    if (tagIndex === -1) {
      updatedTags.push(selectedTag);
    } else {
      updatedTags.splice(tagIndex, 1);
    }

    // Update the form state with the updated tags array
    setForm({ ...form, tags: updatedTags });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);
    try {
      const response = await fetch("http://localhost:3000/api/v1/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const responseData = await response.json();

        console.log("Form submitted successfully:", responseData);
        toast.success("Task Added Successfully");
        setModalOpen(false);
      } else {
        // Handle non-successful response (e.g., 4xx or 5xx HTTP status codes)
        const errorData = await response.json(); // Parse the error response
        console.error("Error in response:", errorData);

        toast.error("Error submitting the form. Please try again.");
      }
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("ERROR UPLOADING:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

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
          <div
            className="overflow-scroll modal_wrapper text-gray-700 p-4"
            ref={wrapper}
          >
            <form className="w-3/4" onSubmit={handleSubmit}>
              <div className="w-full flex justify-between items-center mb-2">
                cancel <input type="submit" className="btn px-5" />
                {/* <button type="submit" className="btn px-5">
                  Add
                </button> */}
              </div>
              <h1>Title</h1>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Task Title"
                name="title"
                className="w-full my-4 flex rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-slate-500"
                required
              />

              <h1>Description</h1>
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                name="description"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, minima?"
                className="w-full my-4 flex rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-slate-500"
              />
              <h1>Status</h1>
              <select
                className="w-full my-4 flex rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-slate-500"
                onChange={(e) => handleChange(e)}
                name="status"
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>

              <h1>Tags</h1>
              <ul className="w-full my-4 flex justify-between rounded-2xl px-4 py-2 border-2 border-slate-100 bg-bkg text-slate-500">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => selectTags(option.label)}
                    className={`flex items-center ${
                      form.tags.includes(option.label)
                        ? "font-bold underline underline-offset-3 text-white"
                        : ""
                    }`}
                  >
                    {option.icon} {option.label}
                  </li>
                ))}
              </ul>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoModal;
