import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/OrderSuccess";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/ScrollToTop";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </>
    </Router>
  );
}

export default App;
