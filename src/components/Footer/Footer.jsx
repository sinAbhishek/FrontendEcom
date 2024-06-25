import React from "react";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div
      style={{ background: "black" }}
      className="mt-8 w-screen h-52 flex flex-col"
    >
      <div className=" flex justify-between items-center h-4/5 pt-8">
        <div className="w-1/3 h-full flex justify-center  ">
          {" "}
          <span className="midlog">Cafe Bites</span>
        </div>
        <div className="footL w-1/3 flex h-full flex-col  items-center">
          <div className=" follow w-max flex flex-col ">
            <p className="  text-2xl font-bold text-white">Follow Us</p>
            <div className="flex mt-6 text-[20px] md:text-[24px]">
              <BsTwitter className=" mr-4" color="#f5c7b5" />
              <BsInstagram className=" mr-4" color="#f5c7b5" />
              <BsFacebook color="#f5c7b5" />
            </div>
          </div>
        </div>

        <div className="footR w-1/3 h-full flex flex-col  items-center">
          <div className=" links w-max flex flex-col ">
            <p className=" text-2xl font-bold text-white">Links</p>
            <div className="linktypes flex mt-6 flex-col">
              <NavLink to={"/"} className={" no-underline text-slate-100"}>
                Home
              </NavLink>
              <NavLink className={" no-underline text-slate-100"} to={"/menu"}>
                Shop
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <hr className="" />
      <div className=" flex justify-between h-1/5">
        <div className=" copyright w-1/2 flex justify-center items-center">
          <p className=" text-sm text-slate-200">
            Copyright 2023 Cafe Bites,Inc. All rights reserved
          </p>
        </div>
        <div className="tc flex w-1/2 justify-center items-center h-full">
          <p className=" text-sm text-slate-200 mr-2">Q/A</p>
          <p className=" text-sm text-slate-200 mr-2">Privacy</p>
          <p className=" text-sm text-slate-200">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
