import { useContext } from "react";
import dbProducts from "../database";
import { CartContext } from "./CartContextProvider";

const Products = () => {

    const { cart, addProduct } = useContext(CartContext);

    return(<div className="products">
        {dbProducts.map((product) => {
            return(<ul className="card-product" key={product.id}>
                <li className="card-product-image">{product.image}</li>
                <li>{product.article}</li>
                <li>${product.price}</li>
                <button className="btn-product" onClick={() => addProduct()}>+</button>
            </ul>)
        })}
    </div>)

};

export default Products;

