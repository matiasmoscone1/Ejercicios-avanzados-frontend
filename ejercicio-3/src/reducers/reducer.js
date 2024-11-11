

const reducer = (state, action) => {

    switch(action.type){
        case "READ_USERS":
            return({...state, array: action.payload});
    }

}


export default reducer;