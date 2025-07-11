

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
        case "POPUP_FILTER": {
            return({...state, flagFilter: action.payload});
        }
        case "FILTER_STATE": {
            return({...state, filterState: {...state.filterState, ...action.payload}});
        }
        case "CHANGE_FILTER_STATE_REF": {
            return({...state, filterState: {...state.filterState, ref: action.payload}});
        }
        
        
    }
}

export default reducer;