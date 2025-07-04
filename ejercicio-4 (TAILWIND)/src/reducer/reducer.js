

const reducer = (state, action) => {
    switch(action.type){
        case "SAVE_USER": {
            return({...state, userLogged: action.payload});
        }
        case "SAVE_TASKS": {
            return({...state, tasks: action.payload});
        }
        case "TOGGLE_ADD_TASK_FLAG": {
            return({...state, flagTask: action.payload});
        }
    }
}

export default reducer;