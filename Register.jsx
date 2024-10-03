import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserAuth } from "../services/AuthContext";
import { database } from "../config/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

const RegisterPage = () => {
  const style = {
    color: "indigo",
  };

  const [userName, setUserName] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const usersCollectionRef = collection(database, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      UserName: userName,
      PhoneNumber: Number(phone),
      Email: email,
      passwordconfirm: passwordconfirm,
      Password: password,
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, googleSignIn, facebookSignIn } = useUserAuth();
  const history = useHistory();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (phone.length !== 10) {
      alert("Please enter a valid phone No. ");
      return;
    }
    try {
      if(password === passwordconfirm){
        await signUp(email, password);
        createUser();
        history.push("/login");
        alert("Register successfully")
      }
     
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await facebookSignIn();
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center md:justify-end secondary ">
        <div className="relative w-full md:w-3/4 h-full flex justify-center items-center md:rounded-bl-2xl first ">
          <div className="relative w-4/5 flex flex-col">
            <h2 className="text-2xl font-medium md:text-3xl mb-6 mt-12">Create Account</h2>
            {error && <p className="bg-red-200 w-3/5 px-2 py-2">{error}</p>}
            <div className="relative flex items-center h-12 mb-6 flex-col md:flex-wrap md:w-3/5">
              <div className="relative flex items-center justify-center mx-2 h-full rounded-full border-indigo-800 border mt-2 mb-2 w-full py-2 md:w-2/5">
                <button onClick={handleGoogleSignIn} className="px-2">
                  <i className="fa fa-google" aria-hidden="true"></i>Sign up
                  with google
                </button>
              </div>
              <div className="relative flex items-center justify-center mx-2 h-full rounded-full border-indigo-800 border mt-2 mb-2 w-full py-2 md:w-2/5">
                <button onClick={handleFacebookSignIn} className="px-2">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  Sign up with facebook
                </button>
              </div>
            </div>
            <form
              action=""
              className="flex flex-col w-full md:w-3/5 mt-16 md:mt-0"
              onSubmit={handleSubmit}
            >
              <input
                name="username"
                type="text"
                placeholder="User Name"
                className="w-full border outline-none px-2  py-2 mb-2 mt-2 border-b-1  border-black border-x-0 border-t-0"
                required
                onChange={(e) => setUserName(e.target.value)}

              />
              <input
                name="email"
                type="email"
                placeholder="E-mail Address"
                className="w-full border outline-none px-2  py-2 mb-2 mt-2 border-b-1  border-black border-x-0 border-t-0"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                name=" password"
                type="password"
                placeholder="Password"
                className="w-full border outline-none px-2  py-2 mb-2 mt-2 border-b-1  border-black border-x-0 border-t-0"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                name = "passwordconfirm"
                type="Password"
                placeholder="Confirm Password"
                className="w-full border outline-none px-2  py-2 mb-2 mt-2 border-b-1  border-black border-x-0 border-t-0"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required

              />
              <input
                name="phonenumber"
                type="number"
                placeholder="Phone Number"
                className="w-full border outline-none px-2  py-2 mb-2 mt-2 border-b-1  border-black border-x-0 border-t-0"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="submit"
                value="Register"
                className="w-full border-none outline-none py-2 bg-violet-600 text-white mb-2 mt-3 transition-all duration-500 ease-out hover:bg-white hover:text-indigo-900 hover:shadow-lg text-white rounded-lg cursor-pointer"
              />
            </form>
            <p className="mt-2">
              Already have an account?{" "}
              <Link to="/login" style={style}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
