

const reducer = (state, action) => {
    switch(action.type){
        case "SAVE_USER": {
            return({...state, userLogged: action.payload});
        }
        case "SAVE_TASKS": {
            return({...state, tasks: action.payload});
        }
        case "TOGGLE_ADD_TASK_FLAG": {
            return({...state, flagTask: {flag: action.payload, task: action.payload.task}});
        }
        case "CLOSE_POPUP": {
            return({...state, flagTask: {flag: action.payload, task: ""}});
        }
        case "ADD_TASK": {
            return({...state, tasks: [...state.tasks, action.payload]})
        }
        
    }
}

export default reducer;