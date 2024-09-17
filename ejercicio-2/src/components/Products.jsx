import dbProducts from "../database";

const Products = () => {

    return(<div className="products">
        {dbProducts.map((product) => {
            return(<ul className="card-product" key={product.id}>
                <li className="card-product-image">{product.image}</li>
                <li>{product.article}</li>
                <li>${product.price}</li>
                <button className="btn-product">+</button>
            </ul>)
        })}
    </div>)

};

export default Products;

