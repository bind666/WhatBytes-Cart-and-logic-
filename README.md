Live Link :- https://what-bytes-cart-and-logic.vercel.app/

## 🛍️ Whatbytes Frontend Assignment

A modern, responsive e-commerce frontend built with **React**, **Tailwind CSS**, and **React Router**. Features include product listing, search, filtering, product detail view, and cart functionality with localStorage persistence.

## 🚀 Features

### ✅ Home Page (`/`)

* 🧭 Sticky Header with Logo, Search bar, Cart icon
* 📋 Product list in a responsive grid
* 🧠 Filters by **category** and **price**
* 🔍 Search products by title using the URL query param (`?search=...`)
* ⚡ Add to Cart button on each product

### ✅ Product Detail Page (`/product/:id`)

* 🖼 Large product image
* 📝 Details: Title, Price, Description, Category
* 🔢 Quantity selector
* 🛒 Add to Cart

### ✅ Cart Page (`/cart`)

* 🧺 View all added items
* ➕➖ Update quantity
* ❌ Remove item
* 💰 Price summary with total

### ✅ State Management

* Managed using **React Context API**
* Cart data is **persisted in localStorage**

---

## 🛠 Tech Stack

| Tool             | Purpose                       |
| ---------------- | ----------------------------- |
| **React**        | UI library                    |
| **Vite**         | Fast dev server & bundler     |
| **Tailwind CSS** | Styling and responsive layout |
| **React Router** | Routing between pages         |
| **Lucide React** | Icons                         |

---

## 📂 Project Structure

```
src/
├── assets/         # Static images
├── components/     # Header, Footer, ProductCard
├── context/        # CartContext (state management)
├── data/           # Mock product data
├── pages/          # Home, ProductDetail, Cart
├── App.jsx
└── main.jsx
```

---

## 🔧 Setup Instructions

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/whatbytes-store.git
cd whatbytes-store
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Build for production:**

```bash
npm run build
```

---

## 📦 Assets

Place your product images inside `src/assets/` folder:

```
- shoes.jpg
- headphones.jpg
- backpack.jpg
- smartwatch.jpg
- sunglasses.jpg
- camera.jpg
- tshirt.jpg
- phone.jpg
```

Make sure the paths match those used in `products.js`.

---

## 💡 Future Enhancements (Optional)

* ⭐ Star rating filter
* 🏷 Brand filter
* 🛒 Checkout integration
* 🌐 URL sync for filters (`?category=&price=`)
* 🔍 Debounced search input

---

## 📄 License

This project is for educational and testing purposes.
