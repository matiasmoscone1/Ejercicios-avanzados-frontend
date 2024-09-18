import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const initialState = { items: [] };

    const [cart, dispatch] = useReducer(reducer, initialState);

    const addProduct = (product) => dispatch({type:"ADD_PRODUCT", payload: product});

    return(<CartContext.Provider value={{ cart, addProduct }}>
        { children }
    </CartContext.Provider>);

}

export default CartContextProvider;




