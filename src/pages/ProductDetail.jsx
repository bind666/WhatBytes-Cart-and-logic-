import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="flex flex-col md:flex-row gap-8">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <img src={product.image} alt={product.title} className="w-full rounded shadow" />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-xl text-blue-700 font-semibold">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>
                <p><span className="font-semibold">Category:</span> {product.category}</p>

                <div className="flex items-center gap-4">
                    <label htmlFor="qty">Quantity</label>
                    <input
                        type="number"
                        id="qty"
                        className="w-16 px-2 py-1 border rounded"
                        value={quantity}
                        min={1}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                </div>

                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    onClick={() => {
                        for (let i = 0; i < quantity; i++) {
                            addToCart(product);
                        }
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
