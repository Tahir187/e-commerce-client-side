import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-gray-800 flex justify-center items-center text-white p-4 w-full">
        <nav className="   w-3/5">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-yellow-400">
              FitFat
            </Link>
            <div className="hidden md:flex justify-center items-center text-black space-x-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 rounded-lg focus:ring focus:ring-yellow-400"
              />
            </div>
            <div className="flex space-x-4">
              <Link to="/" className="hover:">
                Home
              </Link>
              <Link to="/categories" className="hover:underline">
                Categories
              </Link>
              <Link to="/register" className="hover:underline">
                Register
              </Link>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
              <Link to="/cart" className="hover:underline">
                Add to Cart
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
