import React from "react";
import cbeans from "../../data/image/bookbg.png";
import { BsTelephone } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import "./book.css";
const Book = () => {
  return (
    <div className="bG h-80 w-11/12 relative rounded-3xl">
      <div className=" bg-black opacity-50 absolute top-0 bottom-0 right-0 left-0 rounded-3xl z-0"></div>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-20 flex justify-center items-center">
        <div className=" flex flex-col   ">
          <div className=" flex justify-center">
            <h2 className=" text-white font-bold text-3xl sm:text-4xl">
              Lets Book Your Table
            </h2>
          </div>

          <div className="bookBar flex h-12 bg-orange-100 px-2 rounded-full items-center mt-8">
            <div className="flex items-center">
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
            </div>
            <button className=" bg-red-900 h-4/5 rounded-full p-2 text-slate-100 font-semibold">
              Book Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
