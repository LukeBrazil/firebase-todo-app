import React from "react";
import moment from "moment";
import { removeTask, toggleChecked } from "../../actions/taskActions";
import { connect } from "react-redux";

import Check from "./Check";

function Task({ task, removeTask, toggleChecked }) {
  const handleRemoveTask = (task) => {
    removeTask(task);
  };
  const handleCheck = (task) => {
    toggleChecked(task);
  };
  return (
    <>
      <tr>
        <th scope="row">{task.task}</th>
        <td>{moment(task.date.toDate()).calendar()}</td>
        <td>
          <Check checked={task.checked} onClick={() => handleCheck(task)} />
        </td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemoveTask(task)}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    toggleChecked: (task) => dispatch(toggleChecked(task))
  };
};

export default connect(null, mapDispatchToProps)(Task);
