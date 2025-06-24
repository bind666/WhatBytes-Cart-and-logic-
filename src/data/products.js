import shoes from "../assets/shoes.jpg";
import headphones from "../assets/headphones.jpg";
import backpack from "../assets/backpack.jpg";
import smartwatch from "../assets/smartwatch.jpg";
import sunglasses from "../assets/sunglasses.jpg";
import camera from "../assets/camera.jpg";
import tshirt from "../assets/tshirt.jpg";
import phone from "../assets/phone.jpg";

const products = [
    {
        id: 1,
        title: "Running Shoes",
        price: 99,
        category: "Clothing",
        image: shoes,
        description: "Comfortable running shoes for daily workouts.",
    },
    {
        id: 2,
        title: "Wireless Headphones",
        price: 199,
        category: "Electronics",
        image: headphones,
        description: "Noise-cancelling over-ear headphones.",
    },
    {
        id: 3,
        title: "Backpack",
        price: 129,
        category: "Clothing",
        image: backpack,
        description: "Durable and spacious for travel.",
    },
    {
        id: 4,
        title: "Smartwatch",
        price: 249,
        category: "Electronics",
        image: smartwatch,
        description: "Track your fitness and stay connected.",
    },
    {
        id: 5,
        title: "Sunglasses",
        price: 149,
        category: "Clothing",
        image: sunglasses,
        description: "Stylish UV-protected sunglasses.",
    },
    {
        id: 6,
        title: "Digital Camera",
        price: 499,
        category: "Electronics",
        image: camera,
        description: "Capture your moments in high quality.",
    },
    {
        id: 7,
        title: "T-shirt",
        price: 29,
        category: "Clothing",
        image: tshirt,
        description: "Cotton t-shirt for casual wear.",
    },
    {
        id: 8,
        title: "Smartphone",
        price: 699,
        category: "Electronics",
        image: phone,
        description: "Latest smartphone with high-end features.",
        rating: 5,
    },
];

export default products;
