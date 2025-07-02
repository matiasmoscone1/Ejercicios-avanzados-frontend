

const reducer = (state, action) => {
    switch(action.type){
        case "SAVE_USER": {
            return({...state, userLogged: action.payload});
        }
        case "SAVE_TASKS": {
            return({...state, tasks: action.payload});
        }
    }
}

export default reducer;