import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Subscription from "../Components/Subscription";
import { FaAngleRight } from "react-icons/fa";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatCurrency";

const CheckoutPage = () => {
  const { cartItems, calculateTotalPrice } = useCart();
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 my-4">
        <nav className="mb-4">
          <Link to="/" className="text-gray-500 mr-2hover:underline mr-2">
            Home
          </Link>{" "}
          <FaAngleRight className="inline text-gray-500" />{" "}
          <Link
            to="/cart"
            href="#"
            className="hover:underline text-gray-500 mx-2"
          >
            Cart
          </Link>{" "}
          <FaAngleRight className="inline text-gray-500" />{" "}
          <span className="ml-2">Checkout</span>
        </nav>
        <h1 className="text-5xl mb-6">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4 sm:order-first order-last">
            <div className="bg-white py-6 rounded shadow-sm">
              <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border rounded p-4">
                  <input
                    type="radio"
                    name="payment-method"
                    id="paystack"
                    className="mr-2"
                  />
                  <label htmlFor="paystack" className="font-semibold">
                    Paystack
                  </label>
                  <p className="text-gray-500 mt-2">
                    Make payment with Credit/Debit Cards, USSD, Bank Transfer
                    and more.
                  </p>
                </div>
                <div className="border rounded p-4">
                  <input
                    type="radio"
                    name="payment-method"
                    id="wallet"
                    className="mr-2"
                  />
                  <label htmlFor="wallet" className="font-semibold">
                    Wallet
                  </label>
                  <p className="text-gray-500 mt-2">
                    NGN 0.00
                    <br />
                    USD 0.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border">
            <div className="flex justify-between items-center py-4 px-6">
              <span className="text-3xl">Your Cart</span>
              <span className="font-bold text-2xl">
                {cartItems.length} {cartItems.length > 1 ? "items" : "item"}
              </span>
            </div>
            <div className="text-gray-500">
              <div className="">
                {cartItems.map((product, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between py-6 border-t px-6"
                    >
                      <div>
                        {product.name}. ({product.quantity})
                      </div>
                      <div>{formatPrice(product.price * product.quantity)}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between py-6 items-center border-t px-6">
                <div>Coupons and Discounts</div>
                <div className="flex ml-auto flex-wrap">
                  <input type="text" className="border p-1 h-10 max-w-[8rem]" />
                  <button className="bg-yellow-500 text-white px-4 h-10">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="text-gray-500">
              {/* <div className="flex justify-between py-4 px-6 border-t">
                <div>Subtotal (NGN)</div>
                <div>₦ 1.00</div>
              </div>
              <div className="flex justify-between py-4 border-t px-6">
                <div>VAT 7.5 %</div>
                <div>₦ 0.08</div>
              </div> */}
              <div className="flex justify-between font-bold text-xl py-4 border-t px-6 text-black">
                <div>TOTAL</div>
                <div>{formatPrice(calculateTotalPrice())}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/order-success">
            <button
              className="border-[2px] rounded-md border-yellow-600 font-bold sm:px-8 px-4 sm:py-4 py-2 mt-2 
            text-xl hover:bg-yellow-600 hover:text-white transition duration-200 lg:w-[363px]"
            >
              Checkout Here
            </button>
          </Link>
        </div>
      </div>
      <Subscription />
      <Footer />
    </>
  );
};

export default CheckoutPage;
