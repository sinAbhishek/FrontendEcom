import React from "react";
import cbeans from "../../data/image/bookbg.png";
import { BsTelephone } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import "./book.css";
import { redirect, useNavigate } from "react-router-dom";
const Book = () => {
  const navigate = useNavigate();
  return (
    <div className="bG h-[50vh] md:h-[80vh] w-11/12 relative rounded-3xl">
      <div className=" bg-black opacity-40 absolute top-0 bottom-0 right-0 left-0 rounded-3xl z-0"></div>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-20 flex justify-center items-center">
        <div className=" flex flex-col   ">
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" mtxt text-5xl text-white">
              Brewed to Perfection, Baked with Love
            </h1>
            <h2 className="stxt text-orange-200 font-medium text-xl sm:text-4xl mt-6">
              Treat Yourself Today
            </h2>
          </div>

          <div className="bookBar flex justify-center mt-2">
            {/* <div className="flex items-center">
              <BsTelephone color="#8a1c15" size={"1.1rem"} />
              <input
                className=" ml-2 bg-transparent outline-none  "
                type="text"
                placeholder="Your phone "
              />
            </div>
            <div className="flex items-center">
              <GoPerson color="#8a1c15" size={"1.1rem"} />
              <input
                className=" ml-2 bg-transparent outline-none "
                type="text"
                placeholder="Your name "
              />
            </div> */}
            <button
              onClick={() => navigate("/menu")}
              className=" flex justify-center items-center w-max hover:scale-105 font-normal hover:bg-black hover:text-white transition duration-105 bg-transparent h-4/5 rounded-full px-4 py-2 text-slate-100 border border-white"
            >
              Shop Now
              <BsCart3 color="white" size={"1.2rem"} className="mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
