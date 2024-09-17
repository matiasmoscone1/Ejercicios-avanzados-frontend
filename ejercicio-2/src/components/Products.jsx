import dbProducts from "../database";

const Products = () => {

    return(<div className="products">
        {dbProducts.map((product) => {
            return(<ul className="card-product" key={product.id}>
                <li>{product.image}</li>
                <li>{product.article}</li>
                <li>{product.price}</li>
            </ul>)
        })}
    </div>)

};

export default Products;

