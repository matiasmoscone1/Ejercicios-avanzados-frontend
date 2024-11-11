

const reducer = (state, action) => {

    switch(action.type){
        case "READ_USERS":
            return({...state, array: action.payload});
        case "CREATE_USER":
            const newArray = [...state.array, action.payload];
            return({...state, array: newArray});
        case "DELETE_USER":
            const filterArray = state.array.filter((user) => user.id !== action.payload);
            return({...state, array: filterArray});
        case "UPDATE_USER":
            return({...state, array: state.array.map((user) => 
                user.id === action.payload.id ? action.payload : user)});
    }

}


export default reducer;