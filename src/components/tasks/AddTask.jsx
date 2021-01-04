import React, { Component } from "react";
import { connect } from 'react-redux'
import { addTask } from '../../actions/taskActions';

class AddTask extends Component {
  state = {
    task: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task: ', this.state)
    this.props.addTask(this.state)
  };
  render() {
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
        >
          <legend>
          </legend>
          <div className="mb-3">
            <label htmlFor="task">Add Task</label>
            <input
              type="text"
              className="form-control"
              id="task"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    }
};

export default connect(null, mapDispatchToProps)(AddTask);

