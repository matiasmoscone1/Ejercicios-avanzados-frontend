import { useContext } from "react";
import { CartContext } from "./CartContextProvider";


const Cart = () => {

    const { cart } = useContext(CartContext);

    let acc = 0;
    cart.items.map((prod) => {
        acc += prod.price;
        console.log(acc);
    });
    return(<div className="cart-container">
        <div className="cart-info">
            <p>Productos: {cart.items.length}</p>
            <p>Precio total: ${acc}</p>
        </div>
    </div>);

};


export default Cart;




