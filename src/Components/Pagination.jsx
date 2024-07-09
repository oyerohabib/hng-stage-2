import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Pagination() {
  return (
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
  );
}
