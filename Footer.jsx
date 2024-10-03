import React from "react";
import Logo from "../assets/logo.svg";
import Typewriter from "typewriter-effect";
const Footer = () => {
  return (
    <div className="w-full h-[30vh] Footercolor flex justify-center items-center flex-col">
      <div className=" flex justify-center items-center flex-col">
        <img className="w-[100px] h-[100px] " src={Logo} alt="" />
        <p className="footertextcolor text-center">
        <Typewriter
                options={{
                  strings:[
                    "Copyright © 2022 Draft LLC. <br /> All rights reserved."
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 130,
                }}
              />
          
        </p>
      </div>
    </div>
  );
};

export default Footer;
