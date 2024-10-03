import React from "react";
import Fb from "../assets/fb.svg";
import Insta from "../assets/insta.svg";
import gmail from "../assets/gmail.svg";
import call from "../assets/call.svg";
import { Link } from "react-router-dom";
export const Contactus = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center contactbackground relative">
    <Link to="/">
    <div className="top-28 left-24 absolute">
    <ion-icon size="large" name="arrow-back-circle-outline"></ion-icon>
    </div>
    </Link>
    
      <div className="flex justify-center items-center w-3/5 h-3/5 rounded-lg aboutbg flex-col">
        <div className="border-2 rounded-2xl px-12 py-4 w-[300px] flex justify-center bg-white">
          <h1 className="gradienttext text-3xl font-bold">Contact us</h1>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-x-12 mt-8">
          <div className="grid grid-rows-2 place-items-center">
            <div className="flex justify-center items-center">
              <img className="animate-pulse" src={Fb} alt="" />
              <p className="ml-4 text-white text-lg">Solo_Inc16457</p>
            </div>
            <div className="mt-8 ml-6 flex justify-center items-center">
              <img className="animate-pulse" src={Insta} alt="" />{" "}
              <p className="ml-4 text-white text-lg">@Solo-inc16457</p>{" "}
            </div>
          </div>
          <div className="grid grid-rows-2 place-items-center row-start-1">
            <div className="flex justify-center items-center  mr-20">
              <img className="animate-pulse" src={call} alt="" />{" "}
              <p className="ml-4 text-white text-lg">+91 9964606860</p>{" "}
            </div>
            <div className="flex justify-center items-center mt-8 ">
              <img className="animate-pulse" src={gmail} alt="" />{" "}
              <p className="  text-white text-lg">
                Solo_inc16457@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
