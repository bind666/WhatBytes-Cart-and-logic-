import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Header = () => {
  const { cartItems } = useCart();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/?search=${search.trim()}`);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="bg-blue-900 text-white px-6 py-4 sticky top-0 z-50 flex justify-between items-center shadow">
      <Link to="/" className="text-2xl font-bold">Kharido</Link>

      <div className="flex w-1/2">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-4 py-2 rounded-l text-black outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button
          className="bg-yellow-400 text-black px-4 py-2 rounded-r hover:bg-yellow-500"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <Link to="/cart" className="relative">
        <ShoppingCart size={24} />
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
