import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import Pagination from "./Pagination";
import Button from "./Button";

export default function ProductList() {
  return (
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
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 relative"
          >
            <div className="absolute top-8 right-8 text-yellow-500">
              <FaRegHeart className="text-xl cursor-pointer" />
            </div>
            <img
              src="./assets/ProductImage.jpg"
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
              <Button text={"Add to Cart"} />
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </section>
  );
}
