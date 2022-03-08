import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { signupData } from "../components/data";
import login from "../images/login.png";

const SignUp = () => {
  return (
    <div className="w-full h-14 bg-tetiary sticky top-0 lg:px-32 md:px-20 text-primary font-bold">
      <div className="logoImg">
        <NavLink exact to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="lg:grid grid-cols-2 pt-5">
        <div className="mr-20">
          <p className="lg:text-4xl font-bold py-6 text-primary md:text-2xl">
            {signupData.header}
          </p>
          <p className="text-gray-500 text-md pb-8">{signupData.paragraph}</p>
          <div>
            {signupData.list.map((item, index) => (
              <ul key={index} className="pb-5 w-full">
                <li className="pb-2">{item}</li>
                <input type={item} className="input" />
              </ul>
            ))}
            <div
              className="cursor-pointer text-sm bg-primary text-white text-center py-2 rounded border-primary border-2 border-solid hover:bg-white hover:text-primary"
              style={{ width: "90%" }}
            >
              Sign Up
            </div>
          </div>
        </div>
        <img src={login} alt="login" />
      </div>
    </div>
  );
};

export default SignUp;
