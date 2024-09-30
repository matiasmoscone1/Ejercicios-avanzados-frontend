import { useReducer } from "react";
import { createContext, useState } from "react";
import { reducer, reducer_2 } from "../reducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const initialState = { items: [] };
    const initialState_2 = { modal: false, cant: 0 };
    
    const [item, setItem] = useState({});
    const [btnProduct, setBtnProduct] = useState(false);

    const [cart, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch_2] = useReducer(reducer_2, initialState_2);

    const addProduct = (product) => dispatch({type:"ADD_PRODUCT", payload: product});

    const removeProduct = (product) => dispatch({type:"REMOVE_PRODUCT", payload: product});

    const updateProduct = (product, cant) => dispatch({type:"UPDATE_QUANTITY", payload: {product, quantity: cant}});

    const toggleModal = () => dispatch_2({type: "TOGGLE_MODAL"});

    const setCant = (num) => dispatch_2({type: "SET_CANT", payload: num});

    const toggleProduct = (prod) => {
        setBtnProduct(!btnProduct);
        setItem(prod);
    }

    return(<CartContext.Provider value={{ cart, addProduct, removeProduct, updateProduct, item, toggleProduct, btnProduct, toggleModal, state, setCant }}>
        { children }
    </CartContext.Provider>);

}

export default CartContextProvider;




