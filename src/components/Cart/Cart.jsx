import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
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
            <div className=" h-full w-max mr-4">
              <img className="cart-img" src={prop.image} alt="" />
            </div>
            <div className=" h-full w-1/2">
              <h2 className=" cartIname text-base  text-slate-700">
                {prop.name}
              </h2>
              <p className=" cartPrice text-slate-500 font-semibold text-sm mb-2 mt-4">
                Price:
                <span className=" text-slate-600 text-sm ml-2  ">
                  ${prop.price * prop.quantity + prop.size}
                </span>
              </p>
              <div className=" flex  items-center mb-2">
                <div className=" flex justify-center items-center">
                  <button
                    className="w-6 h-6  text-white bg-orange-500 rounded-full flex justify-center items-center"
                    onClick={() => checkquantity()}
                  >
                    -
                  </button>

                  <h1 className=" text-black text-xs mx-2 font-semibold">
                    {prop.quantity}
                  </h1>
                  <button
                    className="w-6 h-6  text-white bg-orange-500 rounded-full flex justify-center items-center"
                    onClick={() => test()}
                  >
                    +{" "}
                  </button>
                </div>

                <div className="">
                  {" "}
                  <div
                    onClick={() => deleteitm()}
                    className="  ml-2 bg-slate-200 w-max px-2 rounded-md text-sm text-black font-semibold py-1 mx-auto hover:cursor-pointer"
                  >
                    <DeleteIcon color="black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-crt mb-4 mt-2 flex justify-center w-full">
        <hr style={{ height: "1px" }} className=" bg-slate-300 w-4/5" />
      </div>
    </>
  ) : (
    "Your cart is empty"
  );
};

export default Cart;
