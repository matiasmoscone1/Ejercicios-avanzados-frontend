import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContextProvider";


const Cart = () => {

    const { cart, removeProduct, updateProduct, item, toggleProduct, btnProduct, toggleModal, state, setCant } = useContext(CartContext);

    let acc = 0;
    cart.items.map((prod) => {
        if(prod.quantity > 1){
            acc += (prod.price * prod.quantity);
        }else{
            acc += prod.price;
        }
    });
    return(<><div className="cart-container">
        <div className="cart-info">
            <p>Productos: {cart.items.length}</p>
            <p>Precio total: ${acc}</p>
        </div>
        <button className="btn-view-cart" onClick={() => toggleModal()}>View cart</button>
    </div>
    {state.modal && 
        <div className="modal-container">
            <div className="modal-overlay">
                <table border={1}>
                        <thead>
                            <td>Id</td>
                            <td>Articulo</td>
                            <td>Marca</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                        </thead>
                {cart.items.map((prod) => {
                    return(
                        <tbody>
                            <td>{prod.id}</td>                            
                            <td>{prod.article}</td>
                            <td>{prod.brand}</td>
                            <td>${prod.price}</td>
                            <td>{prod.quantity}</td>
                            <button onClick={() => toggleProduct(prod)}>Modificar</button>                    
                            <button onClick={() => removeProduct(prod)}>Remover</button>
                        </tbody>
                    )                    
                })}
                </table>
                {btnProduct && 
                    <div className="form-product">
                        <input type="number" value={state.cant} onChange={(e) => setCant(e.target.value)}/>
                        <button onClick={() => {updateProduct(item, state.cant); setCant("")}}>Añadir</button> 
                    </div>}
            </div>
        </div>}
    </>
    );

};


export default Cart;




