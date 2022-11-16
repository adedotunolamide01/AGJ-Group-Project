import React from "react";
import bgImg from "./regImg.jpg";
import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [user, setUser] = useState("patient");

  const handleSubmit = (e) => {
    e.preventDefault();
    const registrationData = {
      fullName,
      email,
      password,
      age,
      bloodGroup,
      address,
      phoneNumber,
      user,
    };

    fetch("http://localhost:8000/reg", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(registrationData),
    }).then(() => {});
  };
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign Up</h2>
          <span>register and enjoy the service</span>
        </div>
        <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
          />
          <input
            type="text"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            placeholder="Blood Group"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            placeholder="Phone number"
          />

          <select value={user} onChange={(e) => setUser(e.target.value)}>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
          </select>

          <button className="btn">Submit </button>
        </form>
        <div className="col-2"></div>
        <img className="regPics" src={bgImg} alt="" />
      </div>
    </section>
  );
}
