import React from "react";
import "./featured.css";
import img1 from "../../data/image/frapucino.png";
import img2 from "../../data/image/nitro cold.png";
import img3 from "../../data/image/white chocolate.png";
import { NavLink } from "react-router-dom";
const Featured = () => {
  return (
    <div className="featured flex justify-center flex-col  ">
      <div className="slidercont ">
        <div className="content">
          <div className="des-img bgc1">
            <div className="desc ">
              <h1 className="heading1">
                Matcha Crème Frappuccino®: Energize Now
              </h1>
              <p className="para1">
                "Experience the Perfect Balance of Taste and Energy with our
                Matcha Crème Frappuccino®"
              </p>
              <NavLink to="/Brew/63b6a2c8631a9277e254402e">
                <button className=" mt-2 bg-slate-900 text-sm md:text-lg text-slate-50 w-max px-4 rounded-full mb-2 py-2">
                  Order now
                </button>
              </NavLink>
            </div>
            <div className="target-img">
              <img loading="lazy" className="featImg" src={img1} alt="" />
            </div>
          </div>
          <div className="des-img bgc2">
            <div className="desc ml-2 ">
              <h1 className="heading2">Vanilla Cream Dream in a Cup</h1>
              <p className="para2">
                "Indulge in the smooth and creamy taste of our Vanilla Sweet
                Cream Nitro Cold Brew."{" "}
              </p>
              <NavLink to="/Brew/63b6a377631a9277e2544036">
                <button className=" mt-2 bg-slate-900 text-sm md:text-lg text-slate-50 w-max px-4 rounded-full mb-2 py-2">
                  Order now
                </button>
              </NavLink>
            </div>
            <div className="target-img">
              <img loading="lazy" className="featImg" src={img2} alt="" />
            </div>
          </div>
          <div className="des-img bgc3">
            <div className="desc ">
              <h1 className="heading3">Heavenly White Chocolate Espresso</h1>
              <p className="para3">
                "Experience the heavenly combination of white chocolate and
                espresso in every sip"
              </p>
              <NavLink to="/Brew/63b6a11b631a9277e254401b">
                <button className=" mt-2 bg-slate-900 text-sm md:text-lg text-slate-50 w-max px-4 rounded-full mb-2 py-2">
                  Order now
                </button>
              </NavLink>
            </div>
            <div className="target-img">
              <img loading="lazy" className="featImg" src={img3} alt="" />
            </div>
          </div>
          <div className="des-img bgc1">
            <div className="desc ">
              <h1 className="heading1">
                Matcha Crème Frappuccino®: Energize Now
              </h1>
              <p className="para1">
                "Experience the Perfect Balance of Taste and Energy with our
                Matcha Crème Frappuccino®"
              </p>
              <NavLink to="/Brew/63b6a2c8631a9277e254402e">
                <button className=" mt-2 bg-slate-900 text-sm md:text-lg text-slate-50 w-max px-4 rounded-full mb-2 py-2">
                  Order now
                </button>
              </NavLink>
            </div>
            <div className="target-img">
              <img loading="lazy" className="featImg" src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
