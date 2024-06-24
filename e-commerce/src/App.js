import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Shop></Shop>}></Route>
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={men_banner}></ShopCategory>}
          ></Route>
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={women_banner}></ShopCategory>}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={kids_banner}></ShopCategory>}
          ></Route>
          <Route path="/product" element={<Product></Product>}>
            <Route path=":productId" element={<Product></Product>}></Route>
          </Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/login" element={<LoginSignup></LoginSignup>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
