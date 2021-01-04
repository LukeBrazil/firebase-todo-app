const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return state;
    }
    case "ADD_TASK_ERR": {
      return state;
    }
    case "REMOVE_TASK": {
      return state;
    }
    case "REMOVE_TASK_ERR": {
      return state;
    }
    case "TOGGLE_CHECKED": {
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
