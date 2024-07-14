import { FaAngleRight, FaHeart, FaRegHeart } from "react-icons/fa";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Subscription from "../Components/Subscription";
import { useCart } from "../hooks/useCart";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatCurrency";
import Button from "../Components/Button";
import renderStarReviews from "../utils/renderReviews";

const WishList = () => {
  const {
    wishList,
    removeFromWishList,
    addToWishList,
    isInCart,
    handleCartAction,
  } = useCart();
  const navigateTo = useNavigate();

  const navigateToProductDetail = (productId) => {
    navigateTo(`/products/${productId}`);
  };

  const isItemInWishList = (product) =>
    wishList.some((item) => item.id === product.id);

  const handleAddToWishList = (product) => {
    if (isItemInWishList(product)) {
      removeFromWishList(product.id);
    } else {
      addToWishList(product);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <nav className="mb-4">
          <Link to="/" className="hover:underline">
            <span className="text-gray-500 mr-2">Home</span>
          </Link>{" "}
          <FaAngleRight className="inline text-gray-500" />{" "}
          <span className="ml-2">WishList</span>
        </nav>
        <h1 className="text-5xl mb-6">Wish List</h1>
        {wishList.length === 0 ? (
          <p className="text-gray-600">Your wish list is empty.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {wishList.map((product) => (
              <div
                key={product.id}
                className="flex bg-white shadow-md rounded-lg p-4 relative flex-col"
              >
                <div
                  className="absolute top-8 right-8 text-yellow-500"
                  onClick={() => handleAddToWishList(product)}
                >
                  {isItemInWishList(product) ? (
                    <FaHeart className="text-2xl cursor-pointer" />
                  ) : (
                    <FaRegHeart className="text-2xl cursor-pointer" />
                  )}
                </div>
                <img
                  src={product.image}
                  alt="Product Image"
                  className="w-full object-cover rounded-t-lg"
                  onClick={() => navigateToProductDetail(product.id)}
                  style={{ cursor: "pointer" }}
                  loading="lazy"
                />
                <div className="mt-4 flex flex-col gap-4 flex-grow">
                  <h3
                    className="text-xl"
                    onClick={() => navigateToProductDetail(product.id)}
                    style={{ cursor: "pointer" }}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center flex-row">
                    Ratings:&nbsp;{" "}
                    <span className="text-yellow-600 flex">
                      {renderStarReviews(parseInt(product.stars))}
                    </span>
                  </div>
                  <p className="text-yellow-600 font-bold">
                    {formatPrice(product.price)}
                  </p>
                  <div className="mt-auto">
                    <Button
                      text={
                        isInCart(product.id)
                          ? "Remove from Cart"
                          : "Add to Cart"
                      }
                      onClick={() => handleCartAction(product)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Subscription />
      <Footer />
    </>
  );
};

export default WishList;
