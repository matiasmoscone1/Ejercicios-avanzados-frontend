
const reducer = (state, action) => {

    switch(action.type){
        case "ADD_PRODUCT": {
            console.log(state);
            return({...state, items: [...state.items, action.payload]});
        }
        case "REMOVE_PRODUCT": {
            return({...state, items: state.items.filter((item) => item.id !== action.payload)});
        }
        case "UPDATE_QUANTITY": {
            return({...state, items: state.items.map((item) => {
                if(item.id === action.payload.id){
                    item.quantity = action.payload.quantity;
                }else{
                    item;
                }
            })});
        }
        case "CLEAR_CART": {
            return({...state, items: [] });
        }
    }

}

export default reducer;