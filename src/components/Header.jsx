import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
    const { cartItems } = useCart();

    return (
        <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Logo</Link>
            <input
                type="text"
                placeholder="Search for products..."
                className="w-1/2 px-4 py-2 rounded text-black"
            />
            <Link to="/cart" className="relative">
                <ShoppingCart />
                {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {cartItems.length}
                    </span>
                )}
            </Link>
        </header>
    );
};

export default Header;
