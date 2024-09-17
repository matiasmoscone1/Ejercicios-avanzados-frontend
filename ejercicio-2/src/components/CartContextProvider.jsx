import { useReducer } from "react";
import { createContext } from "react";
import reducer from "/reducer.js";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const initialState = { items: [] };

    const [cart, dispatch] = useReducer(reducer, initialState);

    

    return(<CartContext.Provider value={{ cart }}>
        { children }
    </CartContext.Provider>);

}

export default CartContextProvider;




