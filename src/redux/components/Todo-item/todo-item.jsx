import React from "react";
import PropTypes from "prop-types";

import "./todo-item.css";

const ToDoItem = ({ id, text, isCompleted, removeTask, completeTask }) => {
  return (
    <li className="todo-item">
      <i
        onClick={() => completeTask(id)}
        className={
          isCompleted ? "mark far fa-check-circle" : "mark far fa-circle"
        }
      />
      <span className={isCompleted ? "completed text" : "text"}>{text}</span>
      <i onClick={() => removeTask(id)} className="fas fa-times" />
    </li>
  );
};

ToDoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
};

ToDoItem.defaultProps = {
  id: 0,
  text: "",
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
};

export default ToDoItem;
