import { useState } from "react";
import { Link } from "react-router-dom";
import "./ViewAppointment.css";

const ViewAppointment = () => {
  const [appHistory, setAppHistory] = useState([
    {
      date: "04 / 11 / 2021",
      Consultant: "Dr. Tobi",
      id: 1,
    },
    {
      date: "06 / 27 / 2021",
      Consultant: "Dr. Sam",
      id: 2,
    },
    {
      date: "02 / 18 / 2022",
      Consultant: "Dr. Shane",
      id: 3,
    },
    {
      date: "08 / 30 / 2022",
      Consultant: "Rema RGN",
      id: 4,
    },
  ]);
  return (
    <div className="appointment-home">
      <div className="appointment-display">
        <p className="appointment-display-text">No appointment information</p>
        <div className="appointment-close-btn">
          <Link to="/appointment">
            <button className="close-btn">Back</button>
          </Link>
        </div>
      </div>
      <div className="appointment-history">
        <h3 className="appointment-history-heading">Appointment History</h3>
        <div>
          {appHistory.map((history) => {
            return <p key={history.id}>{history.date}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewAppointment;
