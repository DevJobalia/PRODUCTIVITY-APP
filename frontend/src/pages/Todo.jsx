import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiPlus } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";

function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-bkg text-content isolate pt-20 min-h-screen">
        {/* todo frame */}
        <div className="bg-teal-300 flex-col align-middle justify-center mt-10 max-w-6xl mx-auto rounded-md p-5">
          {/* HEADER */}
          <div className="flex justify-between items-center w-full">
            <h2 className="text-6xl font-bold text-content">
              <span className="underline decoration-accent-1">todo</span>
            </h2>
            <HiPlus className="w-10 h-10" />
          </div>
          {/* MAIN CONTENT */}
          <div className="bg-content mt-5 rounded-md flex text-bkg">
            <div className="flex-initial w-1/3 bg-slate-100">
              <h1 className="font-primary font-bold text-center">Filters</h1>
              <div className="flex place-items-center  ">
                <GoDotFill className="w-10 h-10 text-purple-400 place-content-center" />
                Work
              </div>
              <div className="flex place-items-center  ">
                <GoDotFill className="w-10 h-10 text-pink-400 place-content-center" />
                Study
              </div>
              <div className="flex place-items-center  ">
                <GoDotFill className="w-10 h-10 text-red-400 place-content-center" />
                Entertainment
              </div>
              <div className="flex place-items-center  ">
                <GoDotFill className="w-10 h-10 text-green-400 place-content-center" />
                Family
              </div>
              <div className="flex place-items-center">
                <input type="checkbox" name="" id="" className="mx-3 w-4 h-4" />
                Hide Done Tasks
              </div>
            </div>
            {/* TASKS */}
            <div className="flex-initial w-2/3 bg-slate-200">
              {/* <h1 className="font-primary font-bold text-center">Task</h1> */}
              <div className=" grid grid-cols-2 gap-6 p-6">
                <div className="bg-orange-100 rounded-md p-2">
                  <div className="flex justify-between place-items-center font-bold mb-2">
                    The first task title
                    <BsThreeDots className="place-content-center" />
                  </div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt, minima?
                  <div className="flex justify-between place-items-center font-bold mt-2">
                    <div className="flex">
                      <GoDotFill className="w-10 h-10 text-red-400 place-content-center" />
                      <GoDotFill className="w-10 h-10 text-green-400 place-content-center" />
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="mx-1 w-3 h-3"
                      />
                      Done
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
