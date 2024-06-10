import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { GiCoffeeCup } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Navbar = () => {
  const [isOpen, setopen] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { products, total, item_count } = useContext(CartContext);
  const Url = process.env.REACT_APP_Url;
  const posthandle = async () => {
    try {
      const res = await axios.post(`${Url}/Pay/create-checkout-session`, {
        id: "data._id",
        name: "Total",
        image: "data.image",
        price: total,
      });
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const handle = () => {
    if (user) {
      posthandle();
      console.log(user);
    } else {
      navigate("/Login");
    }
  };
  const onClose = () => {
    setopen(false);
  };
  const onOpen = () => {
    setopen(true);
  };
  const handleclick = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="Navbar">
      <div className="Container">
        <div className="left">
          <span className="logo text-gray-600">Cafe Bites</span>
          <div className="alt-logo">
            <GiCoffeeCup
              color="black"
              size={"2.5rem"}
              className="ml-4 flex items-center"
            />
          </div>
        </div>
        <div className="menu-logo">
          <NavLink className="home text-slate-600" to="/">
            Home{" "}
          </NavLink>
          <NavLink className="menu text-slate-600" to="/menu">
            Discover
          </NavLink>
        </div>

        <div className="navItems">
          <div onClick={onOpen} className="cart-icon hover:cursor-pointer">
            <BsCart3 color="black" size={"2rem"} className="mr-2" />
            {item_count ? <div className="cart-count">{item_count}</div> : null}
          </div>

          <div className="buttons">
            {user ? (
              <div className="userlogin">
                <p className="username italic text-amber-800 font-bold mr-2">{`${user.username}`}</p>
                <button
                  className=" flex justify-center items-center bg-red-600 p-2 rounded-md hover:cursor-pointer"
                  onClick={handleclick}
                >
                  <FontAwesomeIcon
                    className="flex justify-center items-center  "
                    icon={faPowerOff}
                    color="white"
                  />
                </button>
              </div>
            ) : (
              <>
                <button className="navButton w-max px-4 py-1 rounded-md bg-black hover:scale-105">
                  <a className="btn-log bg-black text-white" href="/Login">
                    Login
                  </a>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            {products[0] ? (
              <div className=" p-2 mt-4">
                <div className="">
                  {products.map((product) => (
                    <Cart prop={product} />
                  ))}
                </div>
                <div className="final-checkout mt-4">
                  <h3 className="sub-total-h1 text-lg font-semibold">
                    Subtotal- <span className="tot-price">{total}</span>$
                  </h3>
                  <div className=" flex justify-center mt-4">
                    <button
                      onClick={handle}
                      className="btn-checkout px-4 w-max bg-slate-950 text-white rounded-full py-1 mx-auto hover:bg-gray-800"
                    >
                      CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className=" w-full h-full flex justify-center items-center">
                No items in your cart
              </div>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default Navbar;
