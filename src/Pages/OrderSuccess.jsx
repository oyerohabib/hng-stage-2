import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Subscription from "../Components/Subscription";
import { FaAngleRight } from "react-icons/fa";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function OrderSuccess() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 mt-4">
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
          <Link to={"/checkout"} className="hover:underline text-gray-500 mx-2">
            <span>Checkout</span>{" "}
          </Link>
          <FaAngleRight className="inline text-gray-500" />{" "}
          <span className="ml-2">Order Success</span>
        </nav>
        <div className="flex items-center justify-center sm:p-5">
          <div className="bg-white p-6 w-full">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="text-green-500">
                  <IoCheckmarkCircleSharp className="text-7xl" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-center text-yellow-600 mb-4">
                Order #7152559274
              </h2>
              <div className="text-center mb-2">
                <p>
                  Your order was placed successfully and is awaiting processing.
                </p>
                <p>Also, we successfully processed your payment.</p>
              </div>
              <p className="text-center mb-8">
                Transaction ID:
                megacare-paystack-7152559274-2022-11-05.14-22-10-222276
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-[#fefff8] py-10 sm:py-20 px-4 sm:px-12">
                <h3 className="text-4xl font-semibold mb-10">Order Details</h3>
                <div className="overflow-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="py-3 text-left text-xs font-medium tracking-wider">
                          Item details
                        </th>
                        <th className="py-3 text-center text-xs font-medium tracking-wider">
                          Quantity
                        </th>
                        <th className="py-3 text-center text-xs font-medium tracking-wider">
                          Item price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-wrap flex items-center">
                          <img
                            src="../../assets/ProductImage.jpg"
                            alt="Venus Eye Pencil Collection"
                            className="w-16 h-16 mr-4"
                          />
                          <div>
                            <div>Venus Eye Pencil Collection</div>
                            <div className="mt-2">
                              <b>Size: </b>
                              <span className="text-gray-500">5&quot;</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <p>3</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <p className="font-bold">₦ 15,000</p>
                        </td>
                      </tr>
                      <tr className="text-gray-500">
                        <td className="px-6 py-4 whitespace-wrap flex items-center">
                          {" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <p>Subtotal (NGN)</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <p className="">₦ 1.00</p>
                        </td>
                      </tr>
                      <tr className="text-gray-500">
                        <td className="px-6 py-4 whitespace-wrap flex items-center">
                          {" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <p>VAT 7.5%</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <p className="">₦ 0.08</p>
                        </td>
                      </tr>
                      <tr className="font-bold">
                        <td className="px-6 py-4 whitespace-wrap flex items-center">
                          {" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <p>Total:</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <p>₦ 15,000.08</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-100 py-20 px-12 mt-8 lg:rounded-none rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
                <div className="text-gray-500">
                  <p className="text-sm mb-2">Order ID: 7152559274</p>
                  <p className="text-sm mb-2">Order Date: July 07, 2024</p>
                  <p className="text-sm mb-2">Order Total: ₦ 1.07</p>
                </div>
                <h3 className="text-lg font-semibold">Payment Method</h3>
                <p className="mb-2 text-gray-500">Paystack</p>
                <div className="mt-6">
                  <p className="mb-1">
                    <strong>Note:</strong>{" "}
                    <span className="text-gray-500">
                      Order Items May Arrive Separately.
                    </span>
                  </p>
                  <p className="text-lg">
                    Expected Date Of Delivery: <strong>July 10, 2022</strong>
                  </p>
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
