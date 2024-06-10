import React from "react";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import post from "../../instance";
import { ToastContainer, toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [Loading, setloading] = useState(false);
  const Url = process.env.REACT_APP_Url;
  const { loading, error, dispatch } = useContext(AuthContext);
  const [loginDetails, setLoginDetails] = useState({
    username: undefined,
    password: undefined,
  });
  const handleChange = (e) => {
    setLoginDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      setloading(true);
      const res = await axios.post(`${Url}/Auth/login`, loginDetails);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      setloading(false);
      navigate("/");
    } catch (err) {
      setloading(false);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      console.log(err);
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div className=" flex justify-center items-center w-screen h-screen ">
      <div className=" flex justify-center items-center flex-col bg-slate-800 p-16 rounded-md">
        <h1 className="log-h1 text-3xl font-bold text-white">LOGIN</h1>
        <div className=" flex flex-col h-max">
          <input
            className=" px-4 py-2 w-60 mb-2 text-sm rounded-md  "
            placeholder="Enter username"
            type="text"
            id="username"
            onChange={handleChange}
          />
          <input
            className=" px-4 py-2 w-60 text-sm my-2 rounded-md "
            placeholder="Enter password"
            type="password"
            id="password"
            onChange={handleChange}
          />
          <button
            onClick={handleClick}
            className=" bg-green-300 w-max px-2 py-1 mx-auto text-zinc-700 font-semibold"
          >
            LOGIN
          </button>
          {Loading && (
            <div className="scaleelod">
              <ScaleLoader
                color={"#03ff46"}
                loading={Loading}
                width={"3px"}
                height={"20px"}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
          <div className=" flex justify-center items-center mt-4">
            <p className=" text-white"> New User? </p>

            <NavLink to={"/register"}>
              <p className=" text-green-300 ml-2"> Register here</p>
            </NavLink>
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className=" text-white"> Go to </p>

            <NavLink to={"/"}>
              <p className=" underline text-cyan-500 ml-2"> Home</p>
            </NavLink>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
