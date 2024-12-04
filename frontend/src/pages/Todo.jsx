// ANIMATION: SMALL BIG: https://github.com/DevJobalia/React-Card-Animation
import React, { useState, useEffect } from "react";

import { HiPlus } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

import { Link } from "react-router-dom";
import TodoModal from "../components/TODO/TodoModal";
import NavBar from "../components/NavBar";
import TodoContent from "../components/TODO/TodoContent";

const RenderCards = ({ data, title, setTaskUpdated, tagFilter, status }) => {
  if (data?.length > 0) {
    let filteredData = data;

    if (tagFilter?.length > 0) {
      // Filter the data based on tags
      filteredData = data.filter(
        (post) =>
          // OPTION 1: MUST INCLUDE ATLEAST ONE FILTER TAG
          tagFilter.some((tag) => post.tags.includes(tag))
        // OPTION 2: MUST INCLUDE ALL FILTER TAG
        // tagFilter.every((tag) => post.tags.includes(tag))
      );
    }

    if (status !== "all") {
      filteredData = filteredData.filter((post) => post.status === status);
    }

    console.log("Dev", tagFilter);
    console.log("Filtered Data", filteredData);

    return filteredData.map((post) => (
      <TodoContent key={post._id} {...post} setTaskUpdated={setTaskUpdated} />
    ));
  }

  return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
  );
};

function Todo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [taskUpdated, setTaskUpdated] = useState(false);
  const [tagFilter, setTagFilter] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          // console.log("RETRIEVE DATA", result);
          setAllPosts(result.data.reverse());
        }
        console.log(tagFilter);
      } catch (error) {
        console.log(error, "todo error");
        // alert(error);
      } finally {
        setTaskUpdated(false);
      }
    };

    fetchPosts();
  }, [taskUpdated]);

  // useEffect(() => {

  // }, [tagFilter]);

  const selectTags = (selectedTag) => {
    // Clone the current tags array
    const updatedTags = [...tagFilter];

    // Check if the selectedTag is already in the array
    const tagIndex = updatedTags.indexOf(selectedTag);

    // If the selectedTag is not in the array, add it; otherwise, remove it
    if (tagIndex === -1) {
      updatedTags.push(selectedTag);
    } else {
      updatedTags.splice(tagIndex, 1);
    }

    // Update the form state with the updated tags array
    setTagFilter(updatedTags);
    // setTaskUpdated(true);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      {!modalOpen && <NavBar />}
      <div
        className={`bg-bkg isolate ${
          modalOpen ? "" : "pt-10"
        } min-h-screen p-5`}
      >
        {/* todo frame */}
        <div className="bg-teal-300 flex-col align-middle justify-center mt-10 mx-auto rounded-md p-5 text-gray-700">
          {/* HEADER */}
          <div className="flex justify-between items-center w-full">
            <h2 className="text-6xl font-bold">
              <span className="underline decoration-accent-1">todo</span>
            </h2>
            <button onClick={() => setModalOpen(true)}>
              <HiPlus className="w-10 h-10" />
            </button>
          </div>
          {/* MAIN CONTENT */}
          <div className="bg-content mt-5 rounded-md flex">
            <div className="flex-initial w-1/6 bg-slate-100">
              <h1 className="font-primary font-bold text-center">Filters</h1>
              <div
                className={`m-2 flex items-center rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-content ${
                  tagFilter.includes("Work")
                    ? "font-bold underline underline-offset-3 text-white"
                    : ""
                }`}
                onClick={() => selectTags("Work")}
              >
                <GoDotFill className="w-10 h-10 text-purple-400 place-content-center" />
                Work
              </div>
              <div
                className={`m-2 flex items-center rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-content ${
                  tagFilter.includes("Study")
                    ? "font-bold underline underline-offset-3 text-white"
                    : ""
                }`}
                onClick={() => selectTags("Study")}
              >
                <GoDotFill className="w-10 h-10 text-pink-400 place-content-center" />
                Study
              </div>
              <div
                className={`m-2 flex items-center rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-content ${
                  tagFilter.includes("Entertainment")
                    ? "font-bold underline underline-offset-3 text-white"
                    : ""
                }`}
                onClick={() => selectTags("Entertainment")}
              >
                <GoDotFill className="w-10 h-10 text-red-400 place-content-center" />
                Entertainment
              </div>
              <div
                className={`m-2 flex items-center rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-content ${
                  tagFilter.includes("Family")
                    ? "font-bold underline underline-offset-3 text-white"
                    : ""
                }`}
                onClick={() => selectTags("Family")}
              >
                <GoDotFill className="w-10 h-10 text-green-400 place-content-center" />
                Family
              </div>
              <div className="m-2 flex">
                <select
                  className="w w-full flex items-center rounded-2xl p-3 border-2 border-slate-100 bg-bkg text-content"
                  onChange={(e) => handleStatus(e)}
                >
                  <option value="all">All</option>
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
            </div>
            {/* TASKS */}
            <div className="flex-initial w-5/6 bg-slate-200">
              {/* <h1 className="font-primary font-bold text-center">Task</h1> */}
              <div className=" grid grid-cols-2 gap-6 p-6">
                <RenderCards
                  data={allPosts}
                  title="No posts found"
                  setTaskUpdated={setTaskUpdated}
                  tagFilter={tagFilter}
                  status={status}
                />
              </div>
            </div>
          </div>
        </div>
        <TodoModal
          type="add"
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setTaskUpdated={setTaskUpdated}
        />
      </div>
    </>
  );
}

export default Todo;
