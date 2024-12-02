import React from "react";
import "./section.css";
import { GiCoffeeCup } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";
import { GiCakeSlice } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";
const Section = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-screen w-screen relative max-[550px]:h-[600px]    flex flex-col justify-between bg">
      <div className="w-full flex h-[90%] relative items-center">
        <img
          loading="lazy"
          className="w-full h-full top-0 left-0 right-0 bg-contain absolute"
          src="./coffepour.jpg"
          alt=""
        />
        <div className=" flex flex-col items-start justify-center max-[768px]:pl-10 max-[768px]:min-w-[404px] h-[300px] min-w-[544px] w-1/2 z-20 pl-36 gap-4 bg-white backdrop-blur-md bg-opacity-5">
          <h4 className=" text-xl font-semibold text-white">Welcome!</h4>
          <h4 className=" max-[768px]:text-3xl text-4xl font-semibold text-white">
            We serve the richest coffee in the city!
          </h4>
          <button
            onClick={() => navigate("/menu")}
            className="w-max px-4 py-2 rounded-full bg-white text-slate-800"
          >
            Order now
          </button>
        </div>
      </div>
      <div className="w-full flex h-[10%] bg-[#cbc4b8]">
        <div className="w-full justify-center flex items-center">
          <div className="w-max justify-center flex flex-col items-center ">
            <GiCoffeeCup size={"1.9rem"} />
            <p className=" text-xs font-semibold">Hot Coffee</p>
          </div>
          <div className="w-max justify-center flex flex-col items-center px-16 ">
            <CiCoffeeCup size={"1.9rem"} />
            <p className=" text-xs font-semibold">Hot Coffee</p>
          </div>
          <div className="w-max justify-center flex flex-col items-center ">
            <GiCakeSlice size={"1.9rem"} />
            <p className=" text-xs font-semibold">Hot Coffee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
