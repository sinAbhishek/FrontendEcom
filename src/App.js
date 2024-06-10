import Home from "./pages/home/Home.jsx"
import Menu from "./pages/menu/Menu.jsx"
import Item from "./pages/item/Item.jsx";
import Order from "./pages/orderTrack/order.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Success from "./pages/Success/Success.jsx";
function App() {
  return (
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/Brew/:id" element={<Item/>}/>
      <Route path="/Brew/order" element={<Order/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Success" element={<Success/>}/>
     </Routes>
  </BrowserRouter>
      
  )
}

export default App;
