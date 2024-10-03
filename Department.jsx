import React from "react";
import CircleBg from "../assets/circlebg.svg";
import CircularButton from "./CircularButton";
import { Link, useHistory } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useUserAuth } from "../services/AuthContext";
// import {useAuthState} from "react-firebase-hooks"

const Department = () => {
  const { user } = useUserAuth();
  const history = useHistory();
  // function handleopen() {
  //   if (user) {
  //     history.push("/form");
  //   } else {
  //     history.push("/login");
  //   }
  // }

  return (
    <div className="w-full h-full justify-center departmentbackground items-center flex relative flex-col">
      <Link to="/">
        <div className="top-28 left-24 absolute ">
          <ion-icon size="large" name="arrow-back-circle-outline"></ion-icon>
        </div>
      </Link>

      <div className="absolute top-6 left-[390px] z-0">
        <img src={CircleBg} alt="" />
      </div>
      <div className="absolute top-36 right-[390px] z-0">
        <img src={CircleBg} alt="" />
      </div>
      <div className="z-50 w-2/5 flex justify-center items-center secondary px-12 rounded-xl py-4 mt-28">
        <h1 className="letter-spacing font-bold text-white text-xl ">
          <Typewriter
            options={{
              strings: ["DEPARTMENTS", "Select a department"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-28 mt-4 h-[800px] place-items-center">
        <div className="">
        <Link to="/health">
            <CircularButton text="Health" />
          </Link>
          <Link to="/education">
            <CircularButton text="Education" />
          </Link>
          <Link to="/finance">
            <CircularButton text="Finance" />
          </Link>
        </div>
        <div className="">
          <Link to="/tourism">
            <CircularButton text="Toursim" />
          </Link>
          <Link to="/water">
            <CircularButton text="Water" />
          </Link>
          <Link to="/roadways">
            <CircularButton text="Roadways" />
          </Link>
        </div>
        <div className="text-base">
          <Link to="/agriculutre">
            <CircularButton text="Agriculture" />
          </Link>
          <Link to="/electricity">
            <CircularButton text="Electricity" />
          </Link>
          <Link to="/labour">
            <CircularButton text="Labour" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Department;
