/* eslint-disable react/prop-types */
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Pagination from "./Pagination";
import Button from "./Button";
// import { Products } from "../Constants/Products";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatCurrency";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const renderStarReviews = (rating) => {
  const totalStars = 5;
  const filledStars = Array(rating)
    .fill()
    .map((_, index) => <FaStar key={`star-filled-${index}`} />);
  const emptyStars = Array(totalStars - rating)
    .fill()
    .map((_, index) => <FaRegStar key={`star-empty-${index}`} />);
  return [...filledStars, ...emptyStars];
};

export default function ProductList() {
  const { cartItems, addToCart, handleRemoveItem } = useCart();

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleCartAction = (product) => {
    if (isInCart(product.id)) {
      handleRemoveItem(product.id);
    } else {
      addToCart(product);
    }
  };

  // Logic handling product response from Timbu API

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://timbu-get-all-products.reavdev.workers.dev?organization_id=f79b9b80692d4c528019e02d843e7329&reverse_sort=false&page=1&size=10&Appid=QORLYEM2HICIBI8&Apikey=bd7863eb220049cd9850e05163a7cc0220240713223453586306`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.items) {
          const formattedProducts = data.items.map((item) => ({
            id: item.id,
            name: item.name,
            image:
              item.photos && item.photos.length > 0
                ? item.photos[0].url
                : "../../assets/ProductItems/pencils.jpg",
            price:
              item.current_price && item.current_price[0].NGN[0]
                ? parseFloat(item.current_price[0].NGN[0])
                : 0,
            stars: item.stars || 4,
          }));
          setProducts(formattedProducts);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h2 className="text-6xl mb-8">Products</h2>
      <div className="mb-6 flex items-center gap-2">
        <span>Sort By: </span>
        <select className="border border-gray-300 p-2">
          <option>Category</option>
          <option>Recent</option>
          <option>Most Recent</option>
          <option>Cheapest</option>
          <option>Expensive</option>
        </select>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {loading ? (
          <Spinner />
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex bg-white shadow-md rounded-lg p-4 relative flex-col"
            >
              <div className="absolute top-8 right-8 text-yellow-500">
                <FaRegHeart className="text-2xl cursor-pointer" />
              </div>
              <img
                src={product.image}
                alt="Product Image"
                className="w-full object-cover rounded-t-lg"
              />
              <div className="mt-4 flex flex-col gap-4 flex-grow">
                <h3 className="text-xl">{product.name}</h3>
                <div className="flex text-yellow-600">
                  {renderStarReviews(product.stars)}
                </div>
                <p className="text-yellow-600 font-bold">
                  {formatPrice(product.price)}
                </p>
                <div className="mt-auto">
                  <Button
                    text={isInCart(product.id) ? "Remove" : "Add to Cart"}
                    onClick={() => handleCartAction(product)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Pagination />
    </section>
  );
}
