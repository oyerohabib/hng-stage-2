import { FaRegStar, FaStar } from "react-icons/fa";

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

export default renderStarReviews;
