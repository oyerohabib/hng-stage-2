/* eslint-disable react/prop-types */
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="flex justify-center mt-16">
      <button
        className={`px-2 py-1 sm:px-4 sm:py-2 bg-gray-100 rounded-lg mx-1 ${
          currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <FaAngleLeft className="text-lg" />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-2 py-1 sm:px-4 sm:py-2 ${
            currentPage === index + 1
              ? "bg-black text-white"
              : "bg-yellow-100 text-gray-800"
          } rounded-lg mx-1`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`px-2 py-1 sm:px-4 sm:py-2 bg-gray-100 rounded-lg mx-1 ${
          currentPage === totalPages ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight className="text-lg" />
      </button>
    </div>
  );
};

export default Pagination;
