

const reducer = (state, action) => {
    switch(action.type){
        case "SAVE_USER": {
            return({...state, userLogged: action.payload});
        }
    }
}

export default reducer;