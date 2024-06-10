import "./searchResult.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
const Card = ({ item,variant }) => {
  const domref = useRef();

  const [array, setarray] = useState([]);



  useEffect(() => {
    if (!domref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(domref.current);
  }, [item]);

  return (
    <motion.div
    ref={domref}
      style={{ width: "300px" }}
      className="key mx-4 my-2 h-96 px-2 rounded-xl flex flex-col  bg-white border border-slate-200 relative"
      key={item.id}
    >
      <div className=" w-full h-max flex justify-center mt-4 ">
        <img className="image w-52 h-52 rounded-full border border-white" src={item.image} alt="" />
      </div>
      <div className=" w-full h-max mt-4  flex flex-col">
        <h2 className=" itemname text-base text-slate-100">{item.name}</h2>
        <h2 className=" font-bold text-slate-100 text-lg mt-2">
          <span className=" text-green-400">$</span>
          {item.price}
        </h2>
      </div>
      <div className=" w-full flex justify-center absolute bottom-4">
        <NavLink
          className=" w-full flex justify-center"
          to={`/Brew/${item._id}`}
        >
          <button className=" w-3/5 px-4 py-2 rounded-full font-semibold bg-slate-100 text-slate-800 text-sm hover:scale-105 transition duration-75 ">
            View
          </button>
        </NavLink>
      </div>
    </motion.div>
  );
};
const Result = (props) => {
  return props.items.map((item) => <Card item={item} variant={props.variantname} />);
};
export default Result;
