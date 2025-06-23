const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white p-6 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                    <h4 className="font-bold">Filters</h4>
                    <p>All | Electronics | Clothing | Home</p>
                </div>
                <div>
                    <h4 className="font-bold">About Us</h4>
                    <p>About Us | Contact</p>
                </div>
                <div>
                    <h4 className="font-bold">Follow Us</h4>
                    <div className="flex justify-center gap-4 mt-2">
                        <i className="fab fa-facebook-f">📘</i>
                        <i className="fab fa-instagram">📸</i>
                        <i className="fab fa-twitter">🐦</i>
                    </div>
                </div>
            </div>
            <p className="text-center mt-4">&copy; 2024 American</p>
        </footer>
    );
};

export default Footer;
