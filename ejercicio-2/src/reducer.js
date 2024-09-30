
export const reducer = (state, action) => {

    switch(action.type){
        case "ADD_PRODUCT": {
            const prodExist = state.items.find((prod) => prod.id === action.payload.id);
            
            if(prodExist){
                return({...state, items: state.items.map((prod) => {
                    if(prod.id === action.payload.id){
                        return({...prod, quantity: prod.quantity + 1 })
                    }else{
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
            const prodExist = state.items.find((prod) => prod.id === action.payload.product.id);
            if(prodExist){
                return({...state, items: state.items.map((prod) => {
                    if(prod.id === action.payload.product.id){
                        return({...prod, quantity: action.payload.quantity});                   
                    }else{
                        return(prod);
                    }
                })});
        }}
        case "CLEAR_CART": {
            return({...state, items: [] });
        }
    }
}

export const reducer_2 = (state, action) => {
    switch(action.type){
        case "TOGGLE_MODAL":{
            return({...state, modal: !state.modal});
        }
        case "SET_CANT":{
            return({...state, cant: action.payload});
        }
    }
};

