import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./components/NavBarComp";
import FooterComp from "./components/FooterComp";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ProductDetail2 from "./pages/ProductDetail2";
import Campaigns from "./pages/Campaigns";
import BlackFriday from "./components/BlackFriday";
import Discounts from "./components/Discounts";
import BlackFriday1 from "./components/BlackFriday1";
import BlackFriday2 from "./components/BlackFriday2";
import BlackFriday3 from "./components/BlackFriday3";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <NavBarComp />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/campaigns" element={<Campaigns />}>
          <Route path="blackfriday" element={<BlackFriday />}>
            <Route path="blackfriday1" element={<BlackFriday1 />} />
            <Route path="blackfriday2" element={<BlackFriday2 />} />
            <Route path="blackfriday3" element={<BlackFriday3 />} />
          </Route>
          <Route path="discounts" element={<Discounts />} />
        </Route>

        <Route path="/contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterComp />
    </>
  );
}

export default App;
