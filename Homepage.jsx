import React from "react";
import Header from "../components/Header";
import Department from "../components/Department";
import { About } from "../components/About";
import { Contactus } from "../components/Contactus";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useUserAuth } from "../services/AuthContext";
import Typewriter from "typewriter-effect";
import Gallery from "../components/Gallery";
const Homepage = () => {

  const { user,logout } = useUserAuth();
  async function handleLogout() {
    try {
      await logout()
     alert("Logged Out")
    } catch {
     alert("Failed to log out")
    }
  }

  

  return (
    <>
      <div className=" w-full h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full z-0"> <Gallery/></div>
        <Header />
        <div className="flex justify-center items-center flex-col z-50 relative">
       
          <div className="mt-8 flex">
            <h1 className="text-[70px] font-black text-white mx-3">One .</h1>
            <h1 className="text-[70px] font-black text-white mx-3">Touch .</h1>
            <h1 className="text-[70px] font-black text-white mx-3">Solution{" "}</h1>
          </div>
          <div className="mt-6">
            <p className="textcolor text-xl font-medium">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to one Touch Solution",
                    "Where you can submit your application regarding government complaint",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </p>
          </div>

          <div className="mt-20">
            {user ? 
            
              <button className="w-28 text-lg primary px-4 py-1 rounded-lg hover:bg-white duration-500 ease-in text-white hover:text-black"
              onClick={handleLogout}>
                Logout
              </button>
              
              
            : <Link to="/login"> <button className="w-28 text-lg primary px-4 py-1 rounded-lg hover:bg-white duration-500 ease-in text-white hover:text-black">
                LogIn
              </button></Link>}

              
            
          </div>
        </div>
      </div>
      <Department />
      <About />
      <Contactus />
      <Footer />
    </>
  );
};

export default Homepage;
