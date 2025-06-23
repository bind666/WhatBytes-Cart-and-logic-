import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="border rounded shadow p-4 flex flex-col items-center gap-2">
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                <h3 className="font-semibold text-lg mt-2">{product.title}</h3>
                <p className="text-gray-700">${product.price}</p>
            </Link>
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
