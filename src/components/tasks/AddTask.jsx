import React, { Component } from "react";
import { connect } from 'react-redux'
import { addTask } from '../../actions/taskActions';

class AddTask extends Component {
  state = {
    task: "",
    checked: 'false',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task: ', this.state)
    document.getElementById('addTaskForm').reset()
    this.props.addTask(this.state)
  };
  render() {
      const { uid } = this.props
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "30px" }}
          onSubmit={this.handleSubmit}
          id='addTaskForm'
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


const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

