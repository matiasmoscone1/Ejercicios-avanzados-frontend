import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const initialState = { items: [] };

    const [cart, dispatch] = useReducer(reducer, initialState);

    const addProduct = (product) => dispatch({type:"ADD_PRODUCT", payload: product});

    const removeProduct = (product) => dispatch({type:"REMOVE_PRODUCT", payload: product});

    //const updateProduct = (product) => dispatch({type:"UPDATE_QUANTITY", payload: {id: product.id, quantity: 5}});

    const updateProduct = (product) => dispatch({type:"UPDATE_QUANTITY", payload: product});

    return(<CartContext.Provider value={{ cart, addProduct, removeProduct, updateProduct }}>
        { children }
    </CartContext.Provider>);

}

export default CartContextProvider;




