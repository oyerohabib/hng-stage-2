import { IoMdSearch } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import {
  FaBars,
  FaRegHeart,
  FaRegStar,
  FaStar,
  FaAngleRight,
  FaAngleLeft,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaClock,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">
            Beauty<span className="text-yellow-600">Home</span>
          </h1>
          <div className="items-center border border-gray-300 lg:w-1/2 hidden md:flex">
            <input
              type="text"
              placeholder="Search products"
              className="flex-grow px-4 py-2 focus:outline-none"
            />
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="p-2 text-gray-500">
              <i className="text-yellow-600 text-2xl">
                <IoMdSearch />
              </i>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1">
              <RiHome2Line className="text-base text-yellow-600" />
              <span>Home</span>
            </button>
            <button className="hidden md:flex items-center space-x-1">
              <FaRegHeart className="text-base text-yellow-600" />
              <span>Wishlist</span>
            </button>
            <button className="hidden md:flex items-center space-x-1">
              <MdOutlineShoppingCart className="text-base text-yellow-600" />
              <span>Cart</span>
            </button>
            <button className="md:hidden">
              <FaBars className="text-yellow-600 text-base" />
            </button>
          </div>
        </div>
      </header>

      <div className="bg-pink-100 bg-cover bg-center bg-no-repeat py-12 bg-[url('./assets/HeroImage.jpg')]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Beauty Store</h2>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-3xl font-bold mb-6">Products</h2>
          <div className="mb-6 flex items-center gap-2">
            <span>Sort By: </span>
            <select className="border border-gray-300 p-2">
              <option>Most Recent</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 relative"
              >
                <div className="absolute top-8 right-8 text-yellow-500">
                  <FaRegHeart className="text-xl cursor-pointer" />
                </div>
                <img
                  src="./src/assets/ProductImage.jpg"
                  alt="Product Image"
                  className="w-full object-cover rounded-t-lg"
                />
                <div className="mt-4 flex flex-col gap-4">
                  <h3 className="text-xl">
                    Venus Eye Pencil Collection 4-in-1 Pack
                  </h3>
                  <div className="flex text-yellow-600">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <p className="text-yellow-600 font-bold">N4,999</p>
                  <button className="border-[3px] rounded-lg border-yellow-600 font-bold px-4 py-2 mt-2">
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <button className="px-2 py-1 sm:px-4 sm:py-2 bg-gray-100 rounded-lg mx-1">
              <FaAngleLeft className="text-lg" />
            </button>
            <button className="px-2 py-1 sm:px-4 sm:py-2 bg-black text-white rounded-lg mx-1">
              1
            </button>
            <button className="px-2 py-1 sm:px-4 sm:py-2 bg-yellow-100 rounded-lg mx-1">
              2
            </button>
            <button className="px-2 py-1 sm:px-4 sm:py-2 bg-yellow-100 rounded-lg mx-1">
              3
            </button>
            <button className="px-2 py-1 sm:px-4 sm:py-2 bg-yellow-100 rounded-lg mx-1">
              4
            </button>
            <button className="px-2 py-1 sm:px-4 sm:py-2 bg-yellow-100 rounded-lg mx-1">
              5
            </button>
            <span className="px-2 py-1 sm:px-4 sm:py-2">...</span>
            <button className="px-2 py-1 sm:px-4 sm:py-2 bg-yellow-100 rounded-lg mx-1">
              50
            </button>
            <button className="px-2 py-1 sm:px-4 sm:py-2 bg-yellow-100 rounded-lg mx-1">
              <FaAngleRight className="text-lg" />
            </button>
          </div>
        </section>

        <div className="relative max-w-7xl mx-auto my-8 overflow-hidden rounded-md sm:block hidden">
          <img
            src="./src/assets/Beatician.jpg"
            alt="Beautician"
            className="w-full h-64 object-cover"
          />
          <div
            className="absolute top-0 right-0 w-4/6 h-full bg-red-700 flex items-center 
          justify-end [clip-path:polygon(50%_0%,100%_0%,100%_100%,25%_100%)]"
          >
            <div className="text-left p-8 mr-4 lg:mr-12">
              <h2 className="text-white text-1xl lg:text-2xl pl-6">
                Talk with a
              </h2>
              <h1 className="text-yellow-500 text-4xl lg:text-6xl font-extrabold">
                Beautician
              </h1>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-yellow-100 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-12 md:px-28 mt-4 md:mt-0">
          <h3 className="text-2xl font-bold mb-2">Skin Exfoil-Attention!</h3>
          <p>
            Reveal radiant skin with personalized exfoliation, Tailored to your
            unique skin type and needs, Unlock a brighter...
          </p>
          <button className="mt-4 text-yellow-600 font-bold">Read more</button>
        </div>
        <div className="relative w-full h-full md:w-1/2">
          <img
            src="./src/assets/SkinExfoli.jpg"
            alt="Beautician"
            className="w-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-yellow-500 text-xl p-2 sm:p-4 flex items-center">
            <FaClock className="mr-2" /> 10 mins
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-20 flex flex-col lg:w-1/2">
        <section className="p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">
            Sign up, stay informed, and get offers
          </h3>
          <p>
            Become part of our community and receive a daily dose of good vibes
            on health, beauty, and lifestyle, as well as exclusive discounts.
          </p>
          <form className="mt-12 flex flex-col sm:flex-row justify-center">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 px-4 py-2 mt-2 sm:mt-0"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 px-4 py-2 mt-2 sm:mt-0"
            />
            <button className="bg-yellow-600 text-white px-12 py-2 mt-2 sm:mt-0">
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div>
              <h4 className="text-lg font-bold">
                Beauty<span className="text-yellow-600">Home</span>
              </h4>
              <p className="mt-2">&copy; 2024</p>
            </div>
            <div>
              <h4 className="text-lg font-bold">Explore BeautyHome</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    Affiliate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Help & Information</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600">
                    Track my order
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    View Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    Shipping info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    My Account
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600">
                    Become Seller
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    Request a Product
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    Consult with an expert
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    Refer & Earn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold">Connect With Us</h4>
              <ul className="mt-2 flex items-center gap-4">
                <li>
                  <a href="#" className="text-gray-600">
                    <FaInstagram className="text-xl text-yellow-500" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    <FaFacebookF className="text-xl text-yellow-500" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    <FaTwitter className="text-xl text-yellow-500" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600">
                    <FaLinkedinIn className="text-xl text-yellow-500" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
