
const reducer = (state, action) => {

    switch(action.type){
        case "ADD_PRODUCT": {
            const prodExist = state.items.find((prod) => prod.id === action.payload.id);
            
            if(prodExist){
                return({...state, items: state.items.map((prod) => {
                    if(prod.id === action.payload.id){
                        return({...prod, quantity: prod.quantity + 1 })
                    } else{
                        return(prod);
                    }
                })});
            }else{
                return({...state, items: [...state.items, {...action.payload, quantity: 1}]});
            }
        }
        case "REMOVE_PRODUCT": {
            return({...state, items: state.items.filter((item) => item.id !== action.payload.id)});
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