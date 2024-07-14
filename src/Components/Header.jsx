import { IoMdSearch } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Header() {
  const { calculateTotal, wishList } = useCart();
  const { totalItems } = calculateTotal();
  return (
    <>
      <header className="bg-white">
        <div className="container mx-auto px-4 py-8 flex justify-between items-center">
          <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold text-black">
            <Link to="/">
              Beauty<span className="text-yellow-600">Home</span>
            </Link>
          </h1>
          <div className="hidden md:flex items-center border border-gray-300 lg:w-1/2">
            <input
              type="text"
              placeholder="Search products"
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="p-2 text-gray-500">
              <IoMdSearch className="text-yellow-600 text-2xl" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hidden md:flex items-center space-x-1">
              <RiHome2Line className="text-2xl text-yellow-600" />
              <span>Home</span>
            </Link>
            {/* Desktop Navs */}

            <Link to="/wishlist" className="flex items-center space-x-1">
              <div className="inline relative">
                <FaRegHeart className="text-2xl text-yellow-600" />
                <span className="bg-yellow-600 text-white text-xs rounded-full px-1 absolute -top-1 -right-1">
                  {wishList.length}
                </span>
              </div>
              <span className=" xs:flex hidden">Wishlist</span>
            </Link>

            <Link to="/cart" className="flex items-center space-x-1">
              <div className="inline relative">
                <MdOutlineShoppingCart className="text-2xl text-yellow-600" />
                <span className="bg-yellow-600 text-white text-xs rounded-full px-1 absolute -top-1 -right-1">
                  {totalItems}
                </span>
              </div>
              <span className="ml-1 xs:flex hidden">Cart</span>
            </Link>
          </div>
        </div>
        <div className="bg-yellow-300 divide-y h-[1px] mb-6"></div>
        <div className="flex md:hidden items-center border border-gray-300 px-4 mx-4 xs:mx-8 mb-6">
          <input
            type="text"
            placeholder="Search products"
            className="flex-grow px-4 py-2 focus:outline-none"
          />
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="p-2 text-gray-500">
            <IoMdSearch className="text-yellow-600 text-2xl" />
          </div>
        </div>
      </header>
    </>
  );
}
