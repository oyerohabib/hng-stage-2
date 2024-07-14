/* eslint-disable react/prop-types */
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProductList from "../Components/ProductList";
import Beautician from "../Components/Beautician";
import SkinExfoil from "../Components/SkinExfoil";
import Subscription from "../Components/Subscription";
import Footer from "../Components/Footer";
import { useState } from "react";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <ProductList searchTerm={searchTerm} />
        <Beautician />
      </main>
      <SkinExfoil />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Home;
