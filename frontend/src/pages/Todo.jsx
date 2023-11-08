// ANIMATION: SMALL BIG: https://github.com/DevJobalia/React-Card-Animation
import React, { useState } from "react";

import { HiPlus } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

import { Link } from "react-router-dom";
import TodoModal from "../components/TODO/TodoModal";
import NavBar from "../components/NavBar";
import TodoContent from "../components/TODO/TodoContent";

function Todo() {
  const [modalOpen, setModalOpen] = useState(false);
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
              <div className="m-2 flex items-center rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-content">
                <GoDotFill className="w-10 h-10 text-purple-400 place-content-center" />
                Work
              </div>
              <div className="m-2 flex items-center rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-content">
                <GoDotFill className="w-10 h-10 text-pink-400 place-content-center" />
                Study
              </div>
              <div className="m-2 flex items-center rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-content">
                <GoDotFill className="w-10 h-10 text-red-400 place-content-center" />
                Entertainment
              </div>
              <div className="m-2 flex items-center rounded-2xl p-2 border-2 border-slate-100 bg-bkg text-content">
                <GoDotFill className="w-10 h-10 text-green-400 place-content-center" />
                Family
              </div>
              <div className="m-2 flex">
                <select className="w w-full flex items-center rounded-2xl p-3 border-2 border-slate-100 bg-bkg text-content">
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </div>
            </div>
            {/* TASKS */}
            <div className="flex-initial w-5/6 bg-slate-200">
              {/* <h1 className="font-primary font-bold text-center">Task</h1> */}
              <div className=" grid grid-cols-2 gap-6 p-6">
                <TodoContent />
              </div>
            </div>
          </div>
        </div>
        <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </>
  );
}

export default Todo;

// OPTION 2
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// const data = [
//   {
//     id: 1,
//     name: "react",
//     dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
//     img: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02",
//   },
//   {
//     id: 2,
//     name: "garphql",
//     dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
//     img: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02",
//   },
//   {
//     id: 3,
//     name: "js",
//     dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
//     img: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02",
//   },
//   {
//     id: 4,
//     name: "nodejs",
//     dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
//     img: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02",
//   },
//   {
//     id: 5,
//     name: "css",
//     dec: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, molestiae.",
//     img: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=50827fd8476bfdffe6e04bc9ae0b8c02",
//   },
// ];

// const Todo = () => {
//   const [show, setShow] = useState(false);
//   const [info, setinfo] = useState();
//   // animation for list
//   const container = {
//     hidden: { opacity: 1, scale: 0 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };
//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   };

//   //  animation for  popup

//   const variants = {
//     visible: {
//       scale: 1.1,
//       boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
//       y: -50,
//       x: -100,
//       cursor: "pointer",
//       transition: { duration: 1, type: "spring" },
//     },
//     hidden: { scale: 1, opacity: 0 },
//   };
//   return (
//     <section className="container mx-auto pt-20">
//       <motion.div
//         style={{
//           filter: show ? "blur(1px)" : "none",
//         }}
//         className="row flex   justify-content-center align-items-center"
//         variants={container}
//         initial="hidden"
//         animate="visible"
//       >
//         {data.map((cval) => {
//           return (
//             <>
//               <motion.div
//                 layout
//                 className="col-lg-5"
//                 onClick={() => {
//                   setShow(!show);
//                   setinfo(cval);
//                 }}
//                 variants={item}
//               >
//                 <div
//                   className="card position-relative w-100   p-0 "
//                   style={{ borderRadius: "2rem" }}
//                 >
//                   <img
//                     src={cval.img}
//                     className="img-fluid "
//                     style={{
//                       borderRadius: "inherit",
//                     }}
//                     alt=""
//                   />
//                   <h3
//                     className="position-absolute text-capitalize text-black-50"
//                     style={{
//                       top: "17%",
//                       left: "40%",
//                     }}
//                   >
//                     {cval.name}
//                   </h3>
//                 </div>
//               </motion.div>
//             </>
//           );
//         })}
//       </motion.div>

//       <AnimatePresence>
//         {show && (
//           <>
//             <motion.div
//               className="card "
//               style={{
//                 position: "fixed",
//                 top: "30%",
//                 left: "40%",
//               }}
//               onClick={() => {
//                 setShow(!show);
//               }}
//               variants={variants}
//               animate={show ? "visible" : "hidden"}
//               exit={{ scale: 1, opacity: 0 }}
//             >
//               <img src={info.img} className="img-fluid" alt="" srcset="" />
//               <h1 className="card-title"> {info.name}</h1>
//               <p className="card-text">{info.dec}</p>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Todo;
