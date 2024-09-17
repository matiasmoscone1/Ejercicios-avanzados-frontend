import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    

    return(<CartContext.Provider value={{ cart }}>
        { children }
    </CartContext.Provider>);

}

export default CartContextProvider;




