import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center border-b pb-4"
                        >
                            <div className="flex gap-4 items-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p>${item.price} x {item.quantity}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min={1}
                                    className="w-16 px-2 py-1 border rounded"
                                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                />
                                <button
                                    className="text-red-600 hover:underline"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="text-right mt-6">
                        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
                        <button className="mt-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
