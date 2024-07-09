/* eslint-disable react/prop-types */
export default function Button({ text }) {
  return (
    <button
      className="border-[3px] rounded-lg border-yellow-600 font-bold px-4 py-2 mt-2 
    w-full text-xl hover:bg-yellow-600 hover:text-white transition duration-200"
    >
      {text}
    </button>
  );
}
