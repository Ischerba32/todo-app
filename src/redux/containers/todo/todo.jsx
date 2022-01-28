import { React, Component } from "react";
import "./todo.css";
import { connect } from "react-redux";

import { addTask, removeTask, completeTask } from "../../actions/actionCreator";

import ToDoInput from "../../components/Todo-input/todo-input";
import ToDoList from "../../components/Todo-list/todo-list";
import Footer from "../../components/Footer/footer";

class ToDo extends Component {
  state = {
    activeFilter: "all",
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

  render() {
    const { activeFilter, taskText } = this.state;
    const { tasks, removeTask, completeTask } = this.props;
    const isTaskExist = tasks && tasks.length > 0;

    return (
      <div className="todo-wrapper">
        <ToDoInput
          onKeyPress={this.addTask}
          onChange={this.handleInputChange}
          value={taskText}
        />
        {isTaskExist && <ToDoList tasksList={tasks} removeTask={removeTask} completeTask={completeTask} />}
        {isTaskExist && (
          <Footer amount={tasks.length} activeFilter={activeFilter} />
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tasks: state.tasks,
  }),
  { addTask, removeTask, completeTask }
)(ToDo);
