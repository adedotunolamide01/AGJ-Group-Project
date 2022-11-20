import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ViewAppointment.css";

const ViewAppointment = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/datas`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFetchedData(data);
      });
  }, []);

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
        {fetchedData.map((data) => {
          const savedApptDate = new Date(data.apptDate);
          const currentDate = new Date();
          if (savedApptDate.getTime() > currentDate.getTime()) {
            return (
              <p className="appointment-display-text">
                Your next appointment is {data.apptDate}
              </p>
            );
          } else {
            console.log("You do not have any pending appointment");
          }
        })}

        <div className="appointment-close-btn">
          <Link to="/appointment">
            <button className="close-btn">Back</button>
          </Link>
        </div>
      </div>
      <div className="appointment-history">
        <h3 className="appointment-history-heading">Appointment History</h3>
        {fetchedData.map((data) => {
          const savedApptDate = new Date(data.apptDate);
          const currentDate = new Date();
          if (savedApptDate.getTime() < currentDate.getTime()) {
            return <li>{data.apptDate}</li>;
          }
        })}
      </div>
    </div>
  );
};

export default ViewAppointment;
