import { useContext } from "react";
import { CartContext } from "./CartContextProvider";


const Cart = () => {

    const { cart } = useContext(CartContext);

    console.log(cart);
    return(<div className="cart-container">
        <div className="cart-info">
            <p>Productos: {cart.items.length}</p>
            <p>Precio total: </p>
        </div>
    </div>);

};


export default Cart;




