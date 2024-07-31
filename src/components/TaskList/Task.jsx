import React from "react";
import { MdOutlineCheck } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const Task = ({ text, onDelete, onToggleCompletion, isCompleted }) => {
  return (
    <div className="task">
      <div
        onClick={onToggleCompletion}
        className={!isCompleted ? "task-check" : "task-check completed"}
      >
        {isCompleted && <MdOutlineCheck color="white" size={16} />}
      </div>
      <p className={!isCompleted ? "task-text" : "task-text completed"}>{text}</p>
      <div
        className="trash"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <FaRegTrashAlt size={20} />
      </div>
    </div>
  );
};

export default Task;
