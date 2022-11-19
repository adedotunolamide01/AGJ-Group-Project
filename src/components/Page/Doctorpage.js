import React from "react";
import { useState } from "react";
import Doctornav from "../Navbar/Doctornav";

const Doctorpage = () => {
  const [date, setdate] = useState("");
  const [complain, setComplain] = useState("");
  const [diagnose, setDiagnose] = useState("");
  const [treatment, setTreatment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const healthData = { date, complain, diagnose, treatment };

    fetch("http://localhost:8000/datas", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(healthData),
    });
  };
  return (
    <div>
      <div className="create">
        <Doctornav />
        <div className="doctorForm">
          <form onSubmit={handleSubmit}>
            <label>Date:</label>
            <input
              type="datetime-local"
              id="meeting-time"
              name="meeting-time"
              value={date}
              min="2022-10-07T00:00"
              max="2800-12-14T00:00"
              onChange={(e) => setdate(e.target.value)}
            ></input>

            <label>Complain:</label>
            <input
              type="text"
              required
              value={complain}
              onChange={(e) => setComplain(e.target.value)}
            />

            <label>Diagnose:</label>
            <textarea
              required
              value={diagnose}
              onChange={(e) => setDiagnose(e.target.value)}
            ></textarea>
            <label>Treatment:</label>
            <textarea
              required
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Doctorpage;
