import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Subscription from "../Components/Subscription";
import { FaAngleRight } from "react-icons/fa";

export default function OrderSuccess() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4 my-8">
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
      </div>
      <div className="min-h-screen flex items-center justify-center p-5">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
          <div className="flex items-center justify-center mb-4">
            <div className="text-green-500 text-4xl">✔</div>
          </div>
          <h2 className="text-xl font-bold text-center text-yellow-600 mb-4">
            Order #7152559274
          </h2>
          <p className="text-center mb-4">
            Your order was placed successfully and is awaiting processing. Also,
            we successfully processed your payment.
          </p>
          <p className="text-center text-gray-500 mb-6">
            Transaction ID:
            megacare-paystack-7152559274-2022-11-05.14-22-10-222276
          </p>

          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold mb-2">Order Details</h3>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Product"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h4 className="font-semibold">
                    Venus Eye Pencil Collection - 4-in-1 Pack
                  </h4>
                  <p className="text-sm text-gray-600">Size: 5&quot;</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₦ 15,000</p>
                <p className="text-sm text-gray-600">Quantity: 3</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal (NGN):</p>
              <p className="font-semibold">₦ 1.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">VAT 7.5%:</p>
              <p className="font-semibold">₦ 0.08</p>
            </div>
            <div className="flex justify-between font-bold border-t pt-2 mt-2">
              <p>Total:</p>
              <p>₦ 15,000.08</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <p className="text-sm mb-2">
              <strong>Order ID:</strong> 7152559274
            </p>
            <p className="text-sm mb-2">
              <strong>Order Date:</strong> July 07, 2024
            </p>
            <p className="text-sm mb-2">
              <strong>Order Total:</strong> ₦ 1.07
            </p>
            <p className="text-sm mb-2">
              <strong>Payment Method:</strong> Paystack
            </p>
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Order Items May Arrive Separately.
            </p>
            <p className="text-sm text-yellow-800">
              <strong>Expected Date Of Delivery:</strong> July 10, 2022
            </p>
          </div>
        </div>
      </div>
      <Subscription />
      <Footer />
    </>
  );
}
