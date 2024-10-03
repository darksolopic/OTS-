import React from "react";

const CircularButton = (props) => {
  return (
    <div className="  my-12 w-[140px] h-[140px] rounded-full bg-white  border-2 border-black flex justify-center items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-300  duration-300  ">
      <div className=""><h1 className="gradienttext text-2xl ">{props.text}</h1></div>
    </div>
  );
};

export default CircularButton;
