import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./cart.css";

const Cart = ({ prop }) => {
  const { item_count, Increaseqty, Decreaseqty, products, total, DeleteItem } =
    useContext(CartContext);
  const test = () => {
    Increaseqty(prop._id);
  };
  const checkquantity = () => {
    if (prop.quantity == 1) {
      console.log("Item quantity 1");
    } else {
      Decreaseqty(prop._id);
    }
  };
  const deleteitm = () => {
    DeleteItem(prop._id);
  };
  return item_count ? (
    <>
      <div className="order h-[170px] " key={prop.id}>
        <div className=" flex flex-col justify-between h-full">
          <div className="h-[90%] flex items-center w-full">
            <div className=" h-full w-1/2">
              <img className="cart-img" src={prop.image} alt="" />
            </div>
            <div className=" h-full w-1/2">
              <h2 className=" cartIname text-base font-semibold text-slate-600">
                {prop.name}
              </h2>
              <p className=" cartPrice text-slate-500 font-semibold text-xs mb-2">
                Price-{" "}
                <span className=" italic">
                  {prop.price * prop.quantity + prop.size}$
                </span>
              </p>
              <div className=" flex  items-center mb-2">
                <button
                  className="w-max px-2 text-white bg-slate-500 rounded-md"
                  onClick={() => checkquantity()}
                >
                  -
                </button>

                <h1 className=" text-black text-xs mx-2 font-medium">
                  {prop.quantity}
                </h1>
                <button
                  className="w-max px-2 text-white bg-slate-500 rounded-md"
                  onClick={() => test()}
                >
                  +{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="h-[10%] w-full mb-4">
            <div
              onClick={() => deleteitm()}
              className="  bg-red-500 w-max px-2 rounded-md text-sm text-white font-semibold py-1 mx-auto hover:cursor-pointer"
            >
              Remove
            </div>
          </div>

          {/* <div className=" flex items-center">
            <img className="cart-img" src={prop.image} alt="" />
            <div className=" ml-4">
              <h2 className=" text-sm font-semibold text-slate-600">
                {prop.name}
              </h2>
            </div>
          </div>
          <div className="">
            <div className=" flex justify-center">
              <p className=" text-slate-500 text-xs mb-2">
                Price-{" "}
                <span className=" italic">
                  {prop.price * prop.quantity + prop.size}$
                </span>
              </p>
            </div>
            <div className=" flex justify-center items-center mb-2">
              <button
                className="w-max px-2 text-white bg-slate-500 rounded-md"
                onClick={() => checkquantity()}
              >
                -
              </button>

              <h1 className=" text-black text-xs mx-2 font-medium">
                {prop.quantity}
              </h1>
              <button
                className="w-max px-2 text-white bg-slate-500 rounded-md"
                onClick={() => test()}
              >
                +{" "}
              </button>
            </div>
         
            <div
              onClick={() => deleteitm()}
              className="  bg-red-500 w-max px-2 rounded-md text-sm text-white font-semibold py-1 mx-auto hover:cursor-pointer"
            >
              Remove
            </div>
          </div> */}
        </div>
      </div>
      <div className="line-crt mb-4 mt-2 flex justify-center w-full">
        <hr style={{ height: "1px" }} className=" bg-slate-700 w-4/5" />
      </div>
    </>
  ) : (
    "Your cart is empty"
  );
};

export default Cart;
