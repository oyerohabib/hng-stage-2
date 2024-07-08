import { IoMdSearch } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaBars, FaRegHeart } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">
            Beauty<span className="text-yellow-600">Home</span>
          </h1>
          <div className="items-center border border-gray-300 w-1/2 hidden md:flex">
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
          <div className="mb-6 flex flex-col md:flex-row items-center gap-2">
            <span>Sort By: </span>
            <select className="border border-gray-300 p-2">
              <option>Most Recent</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src="./src/assets/ProductImage.jpg"
                  alt="Product Image"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    Venus Eye Pencil Collection 4-in-1 Pack
                  </h3>
                  <p className="text-yellow-600 font-bold">N4,999</p>
                  <button className="bg-yellow-600 text-white rounded-full px-4 py-2 mt-2">
                    Add to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 bg-gray-200 rounded-full mx-1">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-full mx-1">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-full mx-1">
              3
            </button>
            <span className="px-4 py-2">...</span>
            <button className="px-4 py-2 bg-gray-200 rounded-full mx-1">
              50
            </button>
          </div>
        </section>

        <section className="bg-yellow-100 p-8 rounded-lg mt-12 flex flex-col md:flex-row items-center">
          <img
            src="path/to/image.jpg"
            alt="Beautician"
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="ml-8 mt-4 md:mt-0">
            <h3 className="text-2xl font-bold mb-2">Skin Exfoil-Attention!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              mattis arcu sollicitudin sed orci morbi feugiat sed...
            </p>
            <button className="mt-4 text-yellow-600 font-bold">
              Read more
            </button>
          </div>
        </section>

        <section className="bg-red-600 text-white p-8 rounded-lg mt-12 text-center">
          <h3 className="text-3xl font-bold">Talk with a Beautician</h3>
          <p className="mt-2">Get personalized advice from our experts</p>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Sign up, stay informed, and get offers
          </h3>
          <p>
            Become part of our community and receive a daily dose of good vibes
            on health, beauty, and lifestyle, as well as exclusive discounts.
          </p>
          <form className="mt-4 flex flex-col sm:flex-row justify-center">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-full px-4 py-2 mx-2 mt-2 sm:mt-0"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-full px-4 py-2 mx-2 mt-2 sm:mt-0"
            />
            <button className="bg-yellow-600 text-white rounded-full px-4 py-2 mx-2 mt-2 sm:mt-0">
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="text-lg font-bold">BeautyHome</h4>
              <p className="mt-2">
                BeautyHome Limited is an online store that gives all of us
                access to originality, buying and selling experience...
              </p>
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
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 BeautyHome</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-gray-600">
                Facebook
              </a>
              <a href="#" className="text-gray-600">
                Twitter
              </a>
              <a href="#" className="text-gray-600">
                Instagram
              </a>
              <a href="#" className="text-gray-600">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
