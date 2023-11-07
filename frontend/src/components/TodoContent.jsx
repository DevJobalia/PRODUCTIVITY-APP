import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { MdDelete, MdEdit } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const TodoContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="bg-orange-100 rounded-md p-2"
    >
      <div className="flex justify-between items-center font-bold mb-2">
        <motion.h2 layout="position" h2>
          The first task title
        </motion.h2>
        <BsThreeDots className="place-content-center" />
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          minima?
          <div className="flex justify-between items-center font-bold mt-2">
            <div className="flex">
              <GoDotFill className="w-10 h-10 text-red-400 place-content-center" />
              <GoDotFill className="w-10 h-10 text-green-400 place-content-center" />
            </div>
            <div className="flex">
              <div
                className="flex items-center justify-center bg-gray-300 text-gray-500 h-8 w-8 rounded-md"
                //    onClick={handleDelete}
              >
                <MdDelete className="w-7 h-7" />
              </div>
              <div
                className="flex ml-2 items-center justify-center bg-gray-300 text-gray-500 h-8 w-8 rounded-md"
                //    onClick={handleEdit}
              >
                <MdEdit className="w-7 h-7" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TodoContent;
