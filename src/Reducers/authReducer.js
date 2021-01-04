const authReducer = (state = {}, action) => {
    switch(action.type) {
        case "SIGN_IN": {
            console.log('Successful Sign In')
            return state
        }
        case "SIGN_IN_ERR": {
            console.log('Error Signing In')
            return state
        }
        case "SIGN_OUT": {
            console.log('Successful Sign Out')
            return state
        }
        case "SIGN_OUT_ERR": {
            console.log('Error Signing Out')
            return state
        }
        case "SIGN_UP": {
            console.log('Successful Sign Out')
            return state
        }
        case "SIGN_UP_ERR": {
            console.log('Error Signing Out')
            return state
        }
        default: {
            return state
        }
    }   
}

export default authReducer;