import React from "react";
import "./section.css";
import cfspill from "../../data/image/coffee332.jpg";

import cbeans from "../../data/image/My project.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Section = () => {
  return (
    <div className="s1 relative   flex justify-between">
      <div className="w-1/2 flex justify-center items-center">
        <div className=" w-4/5 h-full flex flex-col justify-center items-center">
          <div className="txtlog text-5xl   text-slate-100"> “</div>
          <hr className="  bg-white w-full" />
          <br />
          <h2 className="txtlog text-5xl   text-slate-300">
            Life is like a cup of coffee. It's all about how you make it{" "}
          </h2>
          <br />
          <hr className="  bg-white w-full" />
          <div className="txtlog text-5xl   text-slate-100"> „</div>
        </div>
      </div>
      <div className="w-1/2 flex h-full">
        <img
          loading="lazy"
          className="w-full h-full bg-contain"
          src={cfspill}
          alt=""
        />
      </div>
    </div>
  );
};

export default Section;
{
  /* <div className="flex12 flex  w-full items-center ml-4 md:ml-24 h-4/5">
<div className="flex13 w-1/3 md:w-1/4 h-full flex items-center mt-16">
  <div className="">

    <NavLink to={"/menu"}>
      <button className=" bg-slate-900 text-slate-100 w-max px-4 rounded-full mt-20 py-2">
        <div className=" flex items-center">
          <p className=" mr-2 text-lg">Shop Now</p>
          <AiOutlineShoppingCart size={"2rem"} />
        </div>
      </button>
    </NavLink>
  </div>
</div>
<div className=" flex flex-col w-1/3 h-full justify-center ">
  <img className="cbean  " loading="lazy" src={cbeans} alt="" />

  <p className=" font-semibold text-slate-800 mt-10 text-lg">
    Coffe is a way of stealing time that should be rights belong to your
    older self
  </p>
</div>
</div>
<img
loading="lazy"
className="cspill pt-52 -right-10 -bottom-10 absolute md:-right-20 md:-bottom-40 "
src={cfspill}
alt=""
/> */
}
