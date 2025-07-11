import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const [category, setCategory] = useState("All");
    const [price, setPrice] = useState(1000);

    const filteredProducts = products.filter(p => {
        return (category === "All" || p.category === category) && p.price <= price;
    });

    return (
        <div className="flex gap-6">
            {/* Sidebar */}
            <div className="w-1/4">
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                <div className="mb-4">
                    <label className="block font-semibold">Category</label>
                    {["All", "Electronics", "Clothing", "Home"].map(c => (
                        <div key={c}>
                            <input
                                type="radio"
                                name="category"
                                value={c}
                                checked={category === c}
                                onChange={() => setCategory(c)}
                            />
                            <label className="ml-2">{c}</label>
                        </div>
                    ))}
                </div>
                <div>
                    <label className="block font-semibold mb-1">Price</label>
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <p>Up to ${price}</p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
