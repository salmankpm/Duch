import "./ProductCard.css";

function ProductCard({ product, onDelete, onEdit }) {

    const baseUrl = "http://localhost:5174";
console.log(product.image,"????????????????????")
    return (
        <div className="product-card">

            <img
                src={`${baseUrl}/public/${product.image}`}
                alt={product.name}
            />

            <h3 className="name">{product.name}</h3>

             <p className="category">
        {product.category || "No Category"}
      </p>

            <p className="price">₹{product.price}</p>

            <div className="actions">
                <button className="edit" onClick={() => onEdit(product)}>
                    EDIT
                </button>

                <button
                    className="delete"
                    onClick={() => onDelete(product._id)}
                >
                    DELETE
                </button>
            </div>

        </div>
    );
}

export default ProductCard;