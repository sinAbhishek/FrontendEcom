import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div
      style={{ background: "#210c03" }}
      className="mt-8 w-screen h-52 flex flex-col"
    >
      <div className=" flex justify-between items-center h-4/5">
        <div className="footL w-1/3 flex flex-col justify-center items-center">
          <p className=" text-2xl font-bold text-white">Follow Us</p>
          <div className="flex mt-8">
            <BsTwitter className=" mr-4" size={"1.5rem"} color="#f5c7b5" />
            <BsInstagram className=" mr-4" size={"1.5rem"} color="#f5c7b5" />
            <BsFacebook size={"1.5rem"} color="#f5c7b5" />
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          {" "}
          <span className="midlog">Cafe Bites</span>
        </div>
        <div className="footR w-1/3 flex flex-col justify-center items-center">
          <p className=" text-2xl font-bold text-white">Links</p>
          <div className="flex mt-8 flex-col">
            <NavLink to={"/"} className={" no-underline text-slate-100"}>
              Home
            </NavLink>
            <NavLink className={" no-underline text-slate-100"} to={"/menu"}>
              Shop
            </NavLink>
          </div>
        </div>
      </div>
      <hr className="" />
      <div className=" flex justify-between h-1/5">
        <div className="flex w-1/2 justify-center items-center h-full">
          <p className=" text-md text-slate-200 mr-2">Q/A</p>
          <p className=" text-md text-slate-200 mr-2">Privacy</p>
          <p className=" text-md text-slate-200">Contact</p>
        </div>
        <div className=" w-1/2 flex justify-center items-center">
          <p className=" text-sm text-slate-200">Cafe Bites | 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
