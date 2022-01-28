import React from "react";
import PropTypes from "prop-types";

import ToDoItem from "../Todo-item/todo-item";

import "./todo-list.css";

const ToDoList = ({ tasksList }) => {
  return (
    <ul className="todo-list">
      {tasksList.map(({ id, text, isCompleted }) => (
        <ToDoItem key={id} text={text} isCompleted={isCompleted} />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {
  tasksList: PropTypes.array,
};

ToDoList.defaultProps = {
  tasksList: [],
};

export default ToDoList;
