import Header from "../Components/Header";
import Subscription from "../Components/Subscription";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiMastercardFill, RiPaypalFill, RiVisaFill } from "react-icons/ri";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatCurrency";

export default function Cart() {
  const {
    cartItems,
    handleRemoveItem,
    incrementQuantity,
    decrementQuantity,
    calculateTotal,
    clearCart,
  } = useCart();

  const { totalPrice, totalItems } = calculateTotal();

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 my-4">
        <nav className="mb-4">
          <Link to="/" className="hover:underline">
            <span className="text-gray-500 mr-2">Home</span>
          </Link>{" "}
          <FaAngleRight className="inline text-gray-500" />{" "}
          <span className="ml-2">Cart</span>
        </nav>
        <h1 className="text-5xl mb-6">Cart</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[70%] bg-white p-6 overflow-auto">
            <table className="min-w-full divide-y divide-gray-200 mb-6">
              <thead className="bg-[#F9F1D1]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider">
                    Item details
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium tracking-wider">
                    Item price
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cartItems.length > 0 ? (
                  cartItems.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-wrap flex items-center max-w-[24rem]">
                          <img
                            src={`https://api.timbu.cloud/images/${product.image}`}
                            alt="Venus Eye Pencil Collection"
                            className="w-16 h-16 mr-4"
                          />
                          <div>
                            <div>{product.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => decrementQuantity(product.id)}
                            >
                              -
                            </button>
                            <span className="text-center border px-2 mx-2">
                              {product.quantity}
                            </span>
                            <button
                              onClick={() => incrementQuantity(product.id)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="font-bold">
                            {formatPrice(
                              parseFloat(product.price) * product.quantity
                            )}
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-500">Unit price </span>
                            <span className="font-bold">
                              {formatPrice(product.price)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <div>
                            <button
                              onClick={() => handleRemoveItem(product.id)}
                              className="text-gray-500 hover:underline"
                            >
                              Remove item
                            </button>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="text-yellow-500 hover:underline"
                            >
                              Saved for later
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className="flex p-2 text-lg">
                      No Item Available in Cart
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="flex justify-between">
              <Link to="/" className="">
                <button className="px-4 py-2 border-[1.5px] border-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-200 flex items-center gap-1 rounded-md">
                  <FaAngleLeft className="inline" />
                  Continue Shopping
                </button>
              </Link>
              <button
                className="px-4 py-2 border-[1.5px] border-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-200 flex items-center gap-1 rounded-md"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="lg:w-[30%] bg-white p-6">
            <h2 className="text-lg font-bold mb-4 rounded-t-md bg-yellow-500 text-white p-2">
              Order Summary
            </h2>
            <div className="px-4">
              {/* <div className="flex justify-end text-xl font-semibold">
                <div>{cartItemCount} Items</div>
              </div> */}
              {/* <div className="bg-yellow-500 divide-y h-[1px] my-4"></div> */}
              <div className="flex flex-col justify-between mb-2">
                <div className="text-xl mb-2">Delivery Charges:</div>
                <div className="text-gray-500 self-end">
                  Add your Delivery address at checkout to see delivery charges
                </div>
              </div>
              <div className="bg-yellow-500 divide-y h-[1px] my-4"></div>
              <div className="flex flex-col gap-4 justify-between mb-2">
                <div>Coupons and Discounts</div>
                <div className="flex ml-auto flex-wrap">
                  <input type="text" className="border p-1 h-10" />
                  <button className="bg-yellow-500 text-white px-6 h-10">
                    Apply
                  </button>
                </div>
              </div>
              {/* <div className="bg-yellow-500 divide-y h-[1px] my-4"></div> */}
              {/* <div className="flex justify-between font-bold mb-2">
                <div>Subtotal</div>
                <div>₦ 25,000</div>
              </div> */}
              {/* <div className="flex justify-between text-sm text-gray-500 mb-2">
                <div>Savings</div>
                <div>₦ 2,000</div>
              </div> */}
              <div className="bg-yellow-500 divide-y h-[1px] my-4"></div>
              <div className="flex justify-between font-bold text-xl">
                <div>
                  Total ({totalItems} {cartItems.length > 1 ? "items" : "item"})
                </div>
                <div>{formatPrice(totalPrice)}</div>
              </div>
              <p className="text-red-700 text-right text-sm py-4">
                Excluding delievery charges
              </p>
              <Link to="/checkout">
                <Button text={"Checkout"} />
              </Link>
              <div className="text-center text-gray-500 text-sm mt-6">
                <div className="flex justify-center items-center gap-2">
                  We accept:
                  <RiPaypalFill className="w-8 h-8 inline-flex" />
                  <RiVisaFill className="w-8 h-8 inline-flex" />
                  <RiMastercardFill className="w-8 h-8 inline-flex" />
                </div>
                <div className="mt-4">
                  Transactions are 100% Safe and Secure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscription />
      <Footer />
    </>
  );
}
