import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContextProvider";


const Cart = () => {

    const { cart } = useContext(CartContext);
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }


    let acc = 0;
    cart.items.map((prod) => {
        acc += prod.price;
        console.log(acc);
    });
    return(<><div className="cart-container">
        <div className="cart-info">
            <p>Productos: {cart.items.length}</p>
            <p>Precio total: ${acc}</p>
        </div>
        <button className="btn-view-cart" onClick={() => toggleModal()}>View cart</button>
    </div>
    {modal && 
        <div>
            
        </div>}
    </>
    );

};


export default Cart;




