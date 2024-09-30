import { useReducer } from "react";
import { createContext, useState } from "react";
import reducer from "../reducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const initialState = { items: [] };
    const [item, setItem] = useState({});
    const [btnProduct, setBtnProduct] = useState(false);

    const [cart, dispatch] = useReducer(reducer, initialState);
   
    const addProduct = (product) => dispatch({type:"ADD_PRODUCT", payload: product});

    const removeProduct = (product) => dispatch({type:"REMOVE_PRODUCT", payload: product});

    const updateProduct = (product, cant) => dispatch({type:"UPDATE_QUANTITY", payload: {product, quantity: cant}});

    const toggleProduct = (prod) => {
        setBtnProduct(!btnProduct);
        setItem(prod);
    }

    return(<CartContext.Provider value={{ cart, addProduct, removeProduct, updateProduct, item, toggleProduct, btnProduct }}>
        { children }
    </CartContext.Provider>);

}

export default CartContextProvider;




