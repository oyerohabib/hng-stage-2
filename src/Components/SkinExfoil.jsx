import { FaClock } from "react-icons/fa";

export default function SkinExfoil() {
  return (
    <section className="bg-[#F9F1D1] flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 p-12 md:px-28 mt-4 md:mt-0">
        <h3 className="sm:text-4xl text-2xl mb-4 sm:mb-8">
          Skin Exfoil-Attention!
        </h3>
        <p className="sm:text-lg">
          Reveal radiant skin with personalized exfoliation, Tailored to your
          unique skin type and needs, Unlock a brighter...
        </p>
        <button className="mt-4 sm:mt-8 underline">Read more</button>
      </div>
      <div className="relative w-full h-full md:w-1/2">
        <img
          src="./assets/SkinExfoli.jpg"
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
