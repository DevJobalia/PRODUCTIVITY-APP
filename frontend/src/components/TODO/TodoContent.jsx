import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import { MdDelete, MdEdit } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import TodoModal from "./TodoModal";

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

const TodoContent = ({
  _id,
  title,
  description,
  status,
  tags,
  setTaskUpdated,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const matchingOptions = options.filter((option) =>
    tags.includes(option.label)
  );

  const handleDelete = async () => {
    try {
      // Send a DELETE request to your server's delete endpoint
      await axios.delete(`http://localhost:3000/api/v1/post/${_id}`);
      // Handle success, e.g., remove the item from your component's state
      toast.success("Task Deleted Successfully");
      setTaskUpdated(true);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error deleting item", error);
      toast.error("Error During Deletion");
    }
  };

  const handleUpdate = async () => {
    setModalOpen(true);
  };

  return (
    <motion.div
      transition={{ layout: { duration: 1, type: "spring" } }}
      layout
      className={`${
        status === "complete" ? "bg-green-400" : "bg-orange-100"
      } rounded-md p-2 h-fit`}
    >
      <div
        className={`flex justify-between items-center font-bold mb-2 ${
          status === "complete" ? "line-through text-gray-600" : ""
        }`}
      >
        <motion.h2 layout="position" h2>
          {title}
        </motion.h2>
        <BsThreeDots
          className="place-content-center"
          onClick={() => setIsOpen(!isOpen)}
        />
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
                onClick={handleDelete}
              >
                <MdDelete className="w-7 h-7" />
              </div>
              <div
                className="flex ml-2 items-center justify-center bg-gray-300 text-gray-500 h-8 w-8 rounded-md"
                onClick={handleUpdate}
              >
                <MdEdit className="w-7 h-7" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <TodoModal
        type="update"
        todo={{ _id, title, description, status, tags }}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setTaskUpdated={setTaskUpdated}
      />
    </motion.div>
  );
};

export default TodoContent;
