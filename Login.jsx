import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserAuth } from "../services/AuthContext";
// import Button from "../components/Button";

const Login = () => {
  const style = {
    color: "indigo",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="relative w-full h-screen flex justify-center items-center md:justify-end secondary">
        <div className="relative w-full md:w-3/4 h-full flex justify-center items-center md:rounded-bl-2xl md:bg-white">
          <div className="relative w-4/5 flex flex-col">
            <h2 className="text-2xl font-medium md:text-3xl mb-6">Log In</h2>
            {error && <p className="bg-red-200 w-3/5 px-2 py-2">{error}</p>}
            <form
              action=""
              className="flex flex-col w-full md:w-3/5"
              onSubmit={handleSubmit}
            >
              <input
                name= "email"
                type="email"
                placeholder="E-mail Address"
                className="w-full border outline-none px-2  py-2 mb-2 mt-2 border-b-1  border-black border-x-0 border-t-0"
                required
                onChange={(e) => setEmail(e.target.value)}
                
              />
              <input
              name ="password"
                type="password"
                placeholder="Password"                
                className="w-full border outline-none px-2 py-2 mb-2 mt-2 border-b-1 border-black border-x-0 border-t-0"
                required
                onChange={(e) => setPassword(e.target.value)}
                
              /> 
                 <input
                type="submit"
                value="Login"
                className="w-full border-none outline-none py-2 bg-violet-600 text-white mb-2 mt-3 transition-all duration-500 ease-out hover:bg-white hover:text-indigo-900 hover:shadow-lg text-white rounded-lg cursor-pointer"
              />

            </form>
            <p className="mt-2">
              Need an account?{" "}
              <Link to="/signup" style={style}>
                register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;