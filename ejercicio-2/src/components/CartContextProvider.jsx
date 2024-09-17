import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {




    return(<CartContext.Provider value={{}}>
        { children }
    </CartContext.Provider>);

}

export default CartContextProvider;




