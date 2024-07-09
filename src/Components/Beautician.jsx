export default function Beautician() {
  return (
    <div className="relative max-w-7xl mx-auto my-8 overflow-hidden rounded-md sm:block hidden">
      <img
        src="./assets/Beatician.jpg"
        alt="Beautician"
        className="w-full h-64 object-cover"
      />
      <div
        className="absolute top-0 right-0 w-4/6 h-full bg-red-700 flex items-center 
          justify-end [clip-path:polygon(50%_0%,100%_0%,100%_100%,25%_100%)]"
      >
        <div className="text-left p-8 mr-4 lg:mr-12">
          <h2 className="text-white text-1xl lg:text-2xl pl-6">Talk with a</h2>
          <h1 className="text-yellow-500 text-4xl lg:text-6xl font-extrabold">
            Beautician
          </h1>
        </div>
      </div>
    </div>
  );
}
