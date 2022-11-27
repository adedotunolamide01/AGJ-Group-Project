import React from 'react';
import { useState } from 'react';
import Doctorhistory from '../ListHistory/Doctorhistory';

import Doctornav from '../Navbar/Doctornav';
import './DoctorCss.css';

const Doctorpage = () => {
  const [date, setdate] = useState('');
  const [complain, setComplain] = useState('');
  const [assement, setAssement] = useState('');
  const [issue, setIssue] = useState('');
  const [treatment, setTreatment] = useState('');
  const [status, setStatus] = useState('');
  const [reset] = useState('');

  const handleSubmit = (e) => {
    // e.preventDefault();
    const healthData = { date, complain, assement, issue, treatment, reset };

    fetch('http://localhost:8000/datas', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(healthData),
    }).then(() => {});
  };

  return (
    <div>
      <div className="create">
        <Doctornav />
        <div className="doctorForm">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-25">
                <label for="fname">Date:</label>
              </div>
              <div className="col-75">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  min="2022-10-07T"
                  max="2800-12-14T"
                  onload="getDate()"
                  class="form-control"
                  onChange={(e) => setdate(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="complain">Complain</label>
              </div>
              <div className="col-75">
                <input
                  required
                  type="text"
                  id="complain"
                  name="complain"
                  placeholder="Write something..."
                  value={complain}
                  onChange={(e) => setComplain(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="assement">Assement</label>
              </div>
              <div className="col-75">
                <input
                  required
                  type="text"
                  id="assement"
                  name="Assement"
                  placeholder="Write something..."
                  value={assement}
                  onChange={(e) => setAssement(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="issue">Type of heathly Issue</label>
              </div>
              <div className="col-75">
                <select
                  id="issue"
                  name="issue"
                  required
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                >
                  <option value="select">Select</option>
                  <option value="malaria">malaria</option>
                  <option value="cough">Cough</option>
                  <option value="other">Others</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="treatment">Plan / Treatment:</label>
              </div>
              <div className="col-75">
                <textarea
                  id="treatment"
                  name="treatment"
                  placeholder="Write something.."
                  style={{ height: '100px' }}
                  required
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label for="status">Status</label>
              </div>
              <div className="col-75">
                <select
                  id="status"
                  name="status"
                  required
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="select">Select</option>
                  <option value="oepn">Open</option>
                  <option value="close">Close</option>
                  <option value="Pending">Others</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">{<button className="btn">Submit</button>}</div>
          </form>
        </div>
        <h2>Medical History</h2>
        <Doctorhistory />
      </div>
    </div>
  );
};

export default Doctorpage;
