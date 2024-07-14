/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Spinner";
import Subscription from "./Subscription";
import Footer from "./Footer";
import Header from "./Header";
import { FaAngleRight } from "react-icons/fa";
import renderStarReviews from "../utils/renderReviews";
import { formatPrice } from "../utils/formatCurrency";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://timbu-get-single-product.reavdev.workers.dev/${productId}?organization_id=f79b9b80692d4c528019e02d843e7329&Appid=QORLYEM2HICIBI8&Apikey=bd7863eb220049cd9850e05163a7cc0220240713223453586306`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setProduct(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <Spinner />;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 my-4">
        <nav className="mb-4">
          <Link to="/" className="hover:underline">
            <span className="text-gray-500 mr-2">Home</span>
          </Link>{" "}
          <FaAngleRight className="inline text-gray-500" />{" "}
          <span className="ml-2">Product detail</span>
        </nav>
        <h1 className="text-5xl mb-6">Product detail</h1>
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center">
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-lg mr-4"
                loading="lazy"
              />
              <div>
                <p className="text-xl font-bold">
                  {formatPrice(product.current_price)}
                </p>
                <div className="flex items-center flex-row">
                  Ratings:&nbsp;{" "}
                  <span className="text-yellow-600 flex">
                    {renderStarReviews(parseInt(product.extra_infos[0].value))}
                  </span>
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
};

export default ProductDetail;
