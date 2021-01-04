const taskReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_TASK": {
            console.log("ADDED TASK")
            return state
        }
        case "ADD_TASK_ERR": {
            console.log("ERROR ADDING TASK")
            return state
        }
        default:
            return state
    }
}

export default taskReducer;