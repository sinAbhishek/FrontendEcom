import { useEffect, useRef, useState } from "react";
import "./menu.css";
import axios from "axios";
import Result from "../../components/Search result/Search_result";
import useFetch from "../../hooks/useFetch.js";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import a1 from "../../data/loading.json";
import { useInView } from "framer-motion";
const Menu = () => {
  const y = "Hot Coffees";
  const ref = useRef(null);
  const [type, setType] = useState("");
  const [open, setopen] = useState(false);
  const [Loading, setloading] = useState(true);
  const { data, loading } = useFetch(`/Brew?type=${type}`);
  const [items, setitems] = useState("");
  const [categoryDrink, setcategoryDrink] = useState("");
  const [categoryFood, setcategoryFood] = useState("");
  const [beverage, setbeverage] = useState(false);
  const [food, setfood] = useState(false);
  const isInView = useInView(ref, { amount: 0.4 });
  const Url = process.env.REACT_APP_Url;
  var Drinks = [];
  var Food = [];
  var item = "";

  const mainvariants = {
    hidden: { x: 0 },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
        duration: 0.8,
        type: "spring",
      },
    },
  };
  const childvariants = {
    hidden: { x: 0, opacity: 0, rotate: 0 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "linear", duration: 0.4, stiffness: 400 },
    },
    axe: {
      x: 0,
      opacity: 1,
      rotate: 0,
    },
  };
  useEffect(() => {
    data && setloading(false);
  }, [data]);

  useEffect(() => {
    const call = async () => {
      const res = await axios.get(`${Url}/Brew`);
      setitems(res.data);
    };
    call();
  }, []);

  useEffect(() => {
    const call = () => {
      items.map((cr) => cr.Category === "Drinks" && Drinks.push(cr.type));
      items.map((cr) => cr.Category === "Food" && Food.push(cr.type));
    };
    items[0] && call();
  }, [items]);
  useEffect(() => {
    const call = () => {
      setcategoryDrink(
        Drinks.filter((cr, i, ar) => {
          return i == ar.indexOf(cr);
        })
      );
    };
    Drinks[0] && call();
  }, [Drinks]);
  useEffect(() => {
    const call = () => {
      setcategoryFood(
        Food.filter((cr, i, ar) => {
          return i == ar.indexOf(cr);
        })
      );
    };
    Food[0] && call();
  }, [Food]);

  // const call = () => {
  //   console.log(categoryDrink);
  //   console.log(Food);
  // };

  const filter = (e) => {
    e.preventDefault();
    setType(e.target.value);
    setopen(!open);
  };
  // const showDrinks = () => {
  //   setbeverage(true);
  //   setfood(false);
  // };
  // const showFood = () => {
  //   setbeverage(false);
  //   setfood(true);
  //   setType("");
  // };
  const showAll = () => {
    setbeverage(false);
    setfood(false);
    setType("");
  };
  return (
    <div className="main relative">
      {loading && (
        <div className="absolute top-0 left-0 right-0  h-screen">
          <div className="LoadingBg absolute left-0 bottom-0 top-0 right-0 bg-slate-200 bg-cover bg-no-repeat bg z-50 flex items-center justify-center">
            <div className=" w-48 h-48">
              <Lottie animationData={a1} loop={true} />
            </div>
          </div>
        </div>
      )}

      <div className="filter">
        <div className="filter-wrapper mt-20">
          <div className="  types w-screen  h-10 flex justify-center  my-4 ">
            <button
              onClick={(e) => filter(e)}
              className="t1 max-[650px]:w-[100px] max-[650px]:text-sm max-[650px]:p-2 bg-slate-200 text-slate-700 w-[200px] px-4 py-1 rounded-full mr-2 font-semibold border border-blue-300"
            >
              All
            </button>
            <select
              name=""
              id=""
              className="t1 max-[650px]:w-[150px] bg-slate-200 text-slate-700 w-[200px] px-4 py-1 rounded-full mr-2 font-semibold border border-blue-300"
              onChange={(e) => filter(e)}
            >
              <option selected disabled>
                Drinks
              </option>

              {categoryDrink &&
                categoryDrink.map((c) => (
                  <option className=" bg-slate-50">{c}</option>
                ))}
            </select>
            <select
              name=""
              id=""
              className=" t1 max-[650px]:w-[150px] bg-slate-200 text-slate-700 w-[200px] px-4 py-1 rounded-full  font-semibold border border-blue-300"
              onChange={(e) => filter(e)}
            >
              <option selected disabled>
                Foods
              </option>

              {categoryFood &&
                categoryFood.map((c) => (
                  <option className=" bg-slate-50">{c}</option>
                ))}
            </select>
          </div>

          <motion.div className="results max-[650px]:mt-4">
            {data[0] && <Result items={data} variantname={childvariants} />}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
