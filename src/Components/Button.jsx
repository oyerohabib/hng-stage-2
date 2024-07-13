/* eslint-disable react/prop-types */
export default function Button({ text, onClick }) {
  return (
    <button
      className="border-[3px] rounded-lg border-yellow-600 font-semibold px-2 py-2 mt-2 
    w-full text-lg hover:bg-yellow-600 hover:text-white transition duration-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
