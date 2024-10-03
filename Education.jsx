import React from "react";
import axios from "axios";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import { useUserAuth } from "../services/AuthContext";
// import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

function Education() {
  
  const [name, setName] = useState("");
  const { user } = useUserAuth();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [add, setAdd] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email && aadhar && add && issue) {
      if (aadhar.length !== 12) {
        alert("Please enter a valid aadhar No. ");
        return;
      }
      if (phone.length !== 10) {
        alert("Please enter a valid phone No. ");
        return;
      }
      const data = {
        Name: name,
        Phone: phone,
        Email: email,
        Aadhar: aadhar,
        Add: add,
        Issue: issue,
      };

      axios
        .post(
          "https://sheet.best/api/sheets/328e37e7-b88a-4ef9-9dc4-0f5d920fe063",
          data
        )
        .then((response) => {
          console.log(response);
          setAadhar("");
          setAdd("");
          setEmail("");
          setIssue("");
          setName("");
          setPhone("");
        });
      alert("form submiteed");
    } else {
      alert("plz fill form");
    }
  };

  return user ? (
    <div className="w-full h-screen secondary flex justify-center items-center">
      <div className="w-[700px] h-[700px] bg-white rounded-xl flex justify-center items-center flex-col">
        <div className="flex justify-center items-center mb-4 ">
          <img className="w-[100px] h-[100px] " src={Logo} alt="" />
          <p className="gradienttext1">Education Form</p>
        </div>
        <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
          <div className=" border-b-2 border-gray py-2 mb-4 ">
            <input
              className="outline-none text-xl form-group "
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className=" border-b-2 border-gray py-2 mb-4">
            <input
              className="outline-none text-xl form-group"
              maxlength="10"
              type="tel"
              placeholder="Phone no."
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div className=" border-b-2 border-gray py-2 mb-4">
            <input
              className="outline-none text-xl form-group"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className=" border-b-2 border-gray py-2 mb-4">
            <input
              className="outline-none text-xl form-group"
              type="number"
              maxLength="12"
              placeholder="Aadhaar no."
              onChange={(e) => setAadhar(e.target.value)}
              value={aadhar}
            />
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-gray-400 text-xl ">Enter your address:</p>
            <textarea
              className="outline-1 outline-gray-400 outline form-group"
              rows="3"
              cols="29"
              onChange={(e) => setAdd(e.target.value)}
              value={add}
            ></textarea>
          </div>
          <div className="flex flex-col mb-4">
            <p className="text-gray-400 text-xl ">Issue:</p>
            <textarea
              className="outline-1 outline-gray-400 outline form-group"
              rows="2"
              cols="29"
              onChange={(e) => setIssue(e.target.value)}
              value={issue}
            ></textarea>
          </div>
          <div className="flex justify-center ">
            <input
              type="submit"
              className="mt-4 border-2 rounded-lg btnbg px-10 py-2 text-white"
              onSubmit={handleSubmit}
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Education;

