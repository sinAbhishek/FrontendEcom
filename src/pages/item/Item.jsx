import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { SiBuymeacoffee } from "react-icons/si";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Lottie from "lottie-react";
import a1 from "../../data/loading.json";
import post from "../../instance";
import "./item.css";
import { useContext } from "react";
const Item = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItems] = useState();
  const id = location.pathname.split("/")[2];
  const { data, loading } = useFetch(`/Brew/${id}`);
  const { user } = useContext(AuthContext);
  const { dispatch, total, products, addtocart, item_count } =
    useContext(CartContext);
  const [quantity, setquantity] = useState(1);
  const [size, setsize] = useState("S");
  const [extra, setextra] = useState(0);

  const [chk, setchk] = useState(true);
  const sub_quantity = () => {
    if (quantity == 1) {
      console.log("its 1");
    } else {
      setquantity(quantity - 1);
    }
  };
  const add_quantity = () => {
    setquantity(quantity + 1);
  };

  const check = () => {
    if (chk) {
      addtocart(data, quantity, extra);
    } else {
      console.log("item already exist");
    }
  };

  return loading ? (
    <div className="LoadingBg absolute left-0 bottom-0 top-0 right-0 bg-slate-200 bg-cover bg-no-repeat bg z-50 flex items-center justify-center">
      <div className=" w-48 h-48">
        <Lottie animationData={a1} loop={true} />
      </div>
    </div>
  ) : (
    <>
      <div className="main-itm-container mt-[100px] flex items-center justify-center w-screen h-max bg-[#fcfafa] overflow-hidden">
        <div className="item-container flex  w-4/5 h-[90%] p-8 bg-orange-100 px-2 justify-start gap-4 md:justify-around">
          <div className="Det-left flex flex-col w-1/2 justify-between md:justify-start  items-center">
            <div className="img-container w-60 md:w-80 h-60 md:h-80 mr-4 flex justify-center items-center rounded-lg">
              <img
                className="img-itm w-40 h:40 md:w-52 md:h-52 rounded-full"
                src={data.image}
                alt=""
              />
            </div>
            <div className="itm-desc w-full mt-2 bg-white p-4 rounded-xl">
              <h1 className="itm-h1 text-2xl md:text-4xl text-slate-800">
                {data.name}
              </h1>

              <p className="itm-p1 text-black text-lg font-medium">
                {data.description}
              </p>
            </div>
          </div>

          <div className="item-price flex flex-col w-1/3 h-full items-center justify-center  ">
            <div className=" item-main min-w-[300px] w-[80%] h-[80%] flex flex-col justify-center bg-black py-4 px-4  rounded-md">
              <div className="quantity flex  items-center ">
                <p className="qty  font-semibold text-xl text-slate-200">
                  Quantity:
                </p>
                <div className=" flex justify-center items-center">
                  <button
                    className="qty-bttn px-3 bg-orange-500 w-8 h-8 rounded-full text-slate-800  ml-5 flex justify-center items-center"
                    onClick={sub_quantity}
                  >
                    <p className=" text-white  text-center">-</p>
                  </button>
                  <p className="btn-qty px-2 font-semibold text-slate-300">
                    {quantity}
                  </p>
                  <button
                    className="qty-bttn px-3 bg-orange-500 w-8 h-8 rounded-full text-slate-800   flex justify-center items-center"
                    onClick={add_quantity}
                  >
                    <p className=" text-white  text-center">+</p>
                  </button>
                </div>
              </div>
              <div className="total flex mt-2 md:mt-8 items-center">
                <p className="price font-semibold text-xl text-slate-200">
                  Price:
                </p>
                <p className=" font-semibold text-slate-300 ml-5">
                  <span className=" text-green-400">$ </span>
                  {data.price * quantity + extra}
                </p>
              </div>
              <div className="total flex mt-2 md:mt-8 justify-center flex-col">
                <p className="size mr-4 font-semibold text-xl  text-slate-100">
                  Size options:
                </p>

                <div className=" flex justify-center md:justify-between md:w-full mt-2">
                  <div
                    onClick={() => {
                      setsize("S");
                      setextra(0);
                    }}
                    className=" w-20 h-32 flex flex-col items-center"
                  >
                    <div
                      className={
                        size === "S"
                          ? "size w-12 h-12 rounded-full bg-red-400  flex justify-center items-center"
                          : "size w-12 h-12 rounded-full bg-white flex justify-center items-center"
                      }
                    >
                      <SiBuymeacoffee
                        size={"1.5rem"}
                        color={size === "S" ? "white" : "black"}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className=" text-lg font-semibold text-slate-50">S</p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setsize("M");
                      setextra(10);
                    }}
                    className="w-20 h-32 flex flex-col items-center"
                  >
                    <div
                      className={
                        size === "M"
                          ? "size w-12 h-12 rounded-full bg-red-400  flex justify-center items-center"
                          : "size w-12 h-12 rounded-full bg-white flex justify-center items-center"
                      }
                    >
                      <SiBuymeacoffee
                        size={"2rem"}
                        color={size === "M" ? "white" : "black"}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className=" text-lg font-semibold text-slate-50">M</p>
                      <p className=" text-lg font-semibold text-slate-100">
                        <span className=" text-green-400">+ $</span>10
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setsize("L");
                      setextra(15);
                    }}
                    className="w-20 h-32 flex flex-col items-center"
                  >
                    <div
                      className={
                        size === "L"
                          ? "size w-12 h-12 rounded-full bg-red-400  flex justify-center items-center"
                          : "size w-12 h-12 rounded-full bg-white flex justify-center items-center"
                      }
                    >
                      <SiBuymeacoffee
                        size={"2.5rem"}
                        color={size === "L" ? "white" : "black"}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <p className=" text-lg font-semibold text-slate-50">L</p>
                      <p className=" text-lg font-semibold text-slate-100">
                        {" "}
                        <span className=" text-green-400">+ $</span>15
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center mb-2">
                <button
                  className="checkout md:mt-4 flex justify-center items-center w-max px-4 rounded-full bg-slate-300 py-2"
                  onClick={() => check()}
                >
                  <p className=" text-slate-800 mr-2 font-semibold text-center">
                    ADD TO CART
                  </p>
                  <AiOutlineShoppingCart color="black" size={"1.5rem"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
