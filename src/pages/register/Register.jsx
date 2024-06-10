import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import post from "../../instance";
import { NavLink } from "react-router-dom";
import "./register.css";
import axios from "axios";
import ScaleLoader from "react-spinners/ScaleLoader";
const Register = () => {
  const navigate = useNavigate();
  const [active, setactive] = useState(false);
  const [Loading, setloading] = useState(false);
  const Url = process.env.REACT_APP_Url;
  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handlechange = (e) => {
    setRegister((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const sendregister = async () => {
    if (
      register.email.length == 0 ||
      register.username.length == 0 ||
      register.password.length == 0
    ) {
      setactive(true);
    } else {
      try {
        setloading(true);
        const res = await axios.post(`${Url}/Auth/register`, register);
        setloading(false);
        navigate("/Login");
      } catch (err) {
        setloading(false);
        console.log(err);
      }
    }
  };
  return (
    <div className=" flex justify-center items-center w-screen h-screen ">
      <div className=" flex justify-center items-center flex-col bg-slate-800 p-16 rounded-md">
        <h1 className="log-h1 text-3xl font-bold text-white">REGISTER</h1>
        <div className=" flex flex-col h-max">
          <input
            className=" px-4 py-2 w-60 mb-2 text-sm rounded-md  "
            placeholder="Enter username"
            type="text"
            id="username"
            onChange={handlechange}
          />
          {active && register.username.length == 0 && (
            <label className=" text-red-600 italic text-sm">
              Username cannot be empty
            </label>
          )}
          <input
            className=" px-4 py-2 w-60 text-sm my-2 rounded-md "
            placeholder="Enter password"
            type="text"
            id="password"
            onChange={handlechange}
          />
          {active && register.password.length == 0 && (
            <label className=" text-red-600 italic text-sm">
              Password cannot be empty
            </label>
          )}

          <input
            className=" px-4 py-2 w-60 text-sm my-2 rounded-md "
            placeholder="Enter email"
            type="email"
            id="email"
            onChange={handlechange}
          />
          {active && register.email.length == 0 && (
            <label className=" text-red-600 italic text-sm">
              Email cannot be empty
            </label>
          )}
          <button
            onClick={sendregister}
            className=" bg-green-300 w-max px-2 py-1 mx-auto text-zinc-700 font-semibold"
          >
            REGISTER
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
          <div className="flex mt-4">
            <p className=" text-white"> Already registered ? </p>

            <NavLink to={"/login"}>
              <p className=" text-blue-200 ml-1"> Login here</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
{
  /* <div className="registerMain">
      <h1 className="log-h1 text-3xl font-bold">REGISTER</h1>
      <div className="register-container">
        <input
          type="text"
          placeholder="Enter Username"
          onChange={handlechange}
          id="username"
        />
        {active && register.username.length == 0 && (
          <label>Username cannot be empty</label>
        )}

        <input
          type="text"
          placeholder="Enter Password"
          onChange={handlechange}
          id="password"
        />
        {active && register.password.length == 0 && (
          <label>Password cannot be empty</label>
        )}

        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={handlechange}
          id="email"
        />
        {active && register.email.length == 0 && (
          <label>Email cannot be empty</label>
        )}
        <button onClick={sendregister}>REGISTER</button>
        {Loading && (
          <div className="scale1lod">
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
      </div>
      <div className="direct">
        Already registered ?{" "}
        <NavLink to={"/login"}>
          <p> Login here</p>
        </NavLink>
      </div>
    </div> */
}
