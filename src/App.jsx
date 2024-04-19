import Navbar from "./component/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopCatelogy from "./pages/ShopCategory";
import Shop from "./pages/shop";
import Product from "./pages/product";
import Cart from "./pages/cart";
import LoginSignUp from "./pages/loginSignUp";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCatelogy catelogy="men"/>} />
          <Route path="/womens" element={<ShopCatelogy catelogy="women"/>} />
          <Route path="/kids" element={<ShopCatelogy catelogy="kid"/>} />
          <Route path="/product" element={<Product/>} >
            <Route path=":productId" element={<Product/>} />
          </Route>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSignUp/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
