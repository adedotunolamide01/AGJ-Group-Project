import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PatienceNav from '../../Navbar/Patiencenav';
import './ViewAppointment.css';

const DocViewAppointment = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8001/datas`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchedData(data);
      });
  }, []);

  return (
    <div className="view-appointment-container">
      <div className="appointment-display-home">
        <PatienceNav />
        <div className="appointment-display">
          {fetchedData.map((data) => {
            const savedApptDate = new Date(data.apptDate);
            const currentDate = new Date();
            if (savedApptDate.getTime() >= currentDate.getTime()) {
              return (
                <p className="appointment-display-text">
                  Your next appointment is {data.apptDate}
                </p>
              );
            } else {
              console.log('You do not have any pending appointment');
            }
          })}
        </div>
        <div className="appointment-history">
          <h3 className="appointment-history-heading">Appointment History</h3>
          {fetchedData.map((data) => {
            const savedApptDate = new Date(data.apptDate);
            const currentDate = new Date();
            if (savedApptDate.getTime() < currentDate.getTime()) {
              return (
                <li>
                  {data.apptDate}
                  <span>{data.reason}</span>
                </li>
              );
            }
          })}
        </div>
        <div className="back-button">
          <Link to="/appointment">
            <button className="btn">
              <svg
                className="appointment-back-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
              </svg>
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocViewAppointment;
