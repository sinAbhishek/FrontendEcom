import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import Cart from "../../components/Cart/Cart";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import post from "../../instance";
import axios from "axios";
// import "./order.css";

const Order = () => {
  const navigate = useNavigate();
  const { products, total, item_count } = useContext(CartContext);
  const { user } = useContext(AuthContext);
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

  return (
    <>
      <Navbar />
      {products[0] ? (
        <div className="container-crt">
          <div className="final-checkout">
            <h2 className="odr-title">Order Summary</h2>
            <hr className="hr-target" />
            <h3 className="sub-total-h1">
              Subtotal- <span className="tot-price">{total}</span>$
            </h3>
            <hr className="hr-target" />
            <button onClick={handle} className="btn-checkout">
              CHECKOUT
            </button>
          </div>
          <div className="main-cart">
            {products.map((product) => (
              <Cart prop={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="emCarty">No items in your cart</div>
      )}
    </>
  );
};
export default Order;
