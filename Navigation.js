import React from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../services/AuthContext";

const Navigation = () => {
    const link = [
        {name: "", Link: "/"},

    ];
    const style = {
        textDecoration: "none",
        color: "#000",
        fontWeight: "300",
      };


    

      return (
        <>
          <header className=" relative  w-full md:justify-between md:flex md:items-center z-50">
            <ul>
              {link.map((el, index) => (
                <Link to={el.Link} style={style} key={`${el}_${index}`}>
                  <li
                    className="px-4 text-lg text-white md:text-black "
                    key={`${el}_${index}`}
                  >
                    {el.name}
                  </li>
                </Link>
              ))}
              
            </ul>
          </header>
        </>
      );
    };
    
    export default Navigation;