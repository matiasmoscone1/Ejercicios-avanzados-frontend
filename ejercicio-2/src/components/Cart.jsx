import { useContext } from "react";
import { CartContext } from "./CartContextProvider";


const Cart = () => {

    //const { cart } = useContext(CartContext);

    return(<div className="cart-container">
        <div className="cart-info">
            <p>Productos: </p>
            <p>Precio total: </p>
        </div>
    </div>);

};


export default Cart;




