import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const initialState = { items: [] };

    const [cart, dispatch] = useReducer(reducer, initialState);

    const addProduct = (product) => dispatch({type:"ADD_PRODUCT", payload: product});

    const removeProduct = (id) => dispatch({type:"REMOVE_PRODUCT", payload: id});

    const updateProduct = (id) => dispatch({type:"UPDATE_PRODCUT", payload: 5});

    return(<CartContext.Provider value={{ cart, addProduct, removeProduct, updateProduct }}>
        { children }
    </CartContext.Provider>);

}

export default CartContextProvider;




