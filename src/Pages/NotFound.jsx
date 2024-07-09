import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-9xl font-bold text-yellow-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist.
        </p>
        <Link
          to="/"
          className="bg-yellow-600 text-white px-4 py-2 rounded-full hover:bg-yellow-500 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
