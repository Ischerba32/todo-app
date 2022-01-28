import { React, Component } from "react";
import "./todo.css";
import { connect } from "react-redux";

import { addTask, removeTask, completeTask, changeFilter } from "../../actions/actionCreator";

import ToDoInput from "../../components/Todo-input/todo-input";
import ToDoList from "../../components/Todo-list/todo-list";
import Footer from "../../components/Footer/footer";

class ToDo extends Component {
  state = {
    taskText: "",
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    });
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;

    if (taskText.length > 3 && key === "Enter") {
      const { addTask } = this.props;

      addTask((new Date()).getTime(), taskText, false);

      this.setState({
        taskText: "",
      });
    }
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  }

  getActiveTaskCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const { tasks, removeTask, completeTask, filters, changeFilter } = this.props;
    const isTaskExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const taskCounter = this.getActiveTaskCounter(tasks);

    return (
      <div className="todo-wrapper">
        <ToDoInput
          onKeyPress={this.addTask}
          onChange={this.handleInputChange}
          value={taskText}
        />
        {isTaskExist && <ToDoList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask} />}
        {isTaskExist && (
          <Footer amount={taskCounter} activeFilter={filters} changeFilter={changeFilter} />
        )}
      </div>
    );
  }
}

export default connect(
  ({ tasks, filters}) => ({
    tasks,
    filters,
  }),
  { addTask, removeTask, completeTask, changeFilter }
)(ToDo);
