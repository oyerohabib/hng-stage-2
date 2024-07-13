/* eslint-disable react/prop-types */
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProductList from "../Components/ProductList";
import Beautician from "../Components/Beautician";
import SkinExfoil from "../Components/SkinExfoil";
import Subscription from "../Components/Subscription";
import Footer from "../Components/Footer";

function Home({ addToCart }) {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <ProductList addToCart={addToCart} />
        <Beautician />
      </main>
      <SkinExfoil />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Home;
