import Home from "./pages/home/Home.jsx";
import Menu from "./pages/menu/Menu.jsx";
import Item from "./pages/item/Item.jsx";
import Order from "./pages/orderTrack/order.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Success from "./pages/Success/Success.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Brew/:id" element={<Item />} />
          <Route path="/Brew/order" element={<Order />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
