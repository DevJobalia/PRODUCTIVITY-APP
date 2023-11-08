import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { MdDelete, MdEdit } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

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

const TodoContent = ({ title, description, status, tags }) => {
  const [isOpen, setIsOpen] = useState(false);
  const matchingOptions = options.filter((option) =>
    tags.includes(option.label)
  );
  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="bg-orange-100 rounded-md p-2"
    >
      <div className="flex justify-between items-center font-bold mb-2">
        <motion.h2 layout="position" h2>
          {title}
        </motion.h2>
        <BsThreeDots className="place-content-center" />
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {description}
          <div className="flex justify-between items-center font-bold mt-2">
            <div className="flex">
              {matchingOptions.map((option, index) => (
                <div key={index} className="flex items-center mr-2">
                  {option.icon}
                  {option.label}
                </div>
              ))}
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
