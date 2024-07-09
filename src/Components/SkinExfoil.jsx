import { FaClock } from "react-icons/fa";

export default function SkinExfoil() {
  return (
    <section className="bg-yellow-100 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-12 md:px-28 mt-4 md:mt-0">
        <h3 className="text-2xl font-bold mb-2">Skin Exfoil-Attention!</h3>
        <p>
          Reveal radiant skin with personalized exfoliation, Tailored to your
          unique skin type and needs, Unlock a brighter...
        </p>
        <button className="mt-4 text-yellow-600 font-bold">Read more</button>
      </div>
      <div className="relative w-full h-full md:w-1/2">
        <img
          src="./src/assets/SkinExfoli.jpg"
          alt="Beautician"
          className="w-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-yellow-500 text-xl p-2 sm:p-4 flex items-center">
          <FaClock className="mr-2" /> 10 mins
        </div>
      </div>
    </section>
  );
}
