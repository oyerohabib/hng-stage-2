import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Pagination from "./Pagination";
import Button from "./Button";
import { Products } from "../Constants/Products";
import { Link } from "react-router-dom";

const renderStarReviews = (rating) => {
  const totalStars = 5;
  const filledStars = Array(rating).fill(<FaStar />);
  const emptyStars = Array(totalStars - rating).fill(<FaRegStar />);
  return [...filledStars, ...emptyStars];
};

export default function ProductList() {
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
        {Products.map((product, index) => (
          <div
            key={index}
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
              <p className="text-yellow-600 font-bold">{product.price}</p>
              <div className="mt-auto">
                <Link to="/cart">
                  <Button text={"Add to Cart"} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </section>
  );
}
