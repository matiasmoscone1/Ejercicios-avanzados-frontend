

const reducer = (state, action) => {

    switch(action.type){
        case "READ_USERS":
            return({...state, array: action.payload});
        case "CREATE_USER":
            const newArray = [...state.array, action.payload];
            return({...state, array: newArray});
                
    }

}


export default reducer;