export default function Subscription() {
  return (
    <main className="container mx-auto px-4 py-20 flex flex-col lg:w-1/2">
      <section className="p-4 text-center">
        <h3 className="text-4xl font-bold mb-8">
          Sign up, stay informed, and get offers
        </h3>
        <p className="text-lg">
          Become part of our community and receive a daily dose of good vibes on
          health, beauty, and lifestyle, as well as exclusive discounts.
        </p>
        <form className="mt-12 flex flex-col sm:flex-row justify-center">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="border border-gray-300 px-4 py-2 mt-2 sm:mt-0"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="border border-gray-300 px-4 py-2 mt-2 sm:mt-0"
          />
          <button className="bg-yellow-600 text-white px-12 py-2 mt-2 sm:mt-0">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
